import { CohereClient, CohereError, CohereTimeoutError } from 'cohere-ai';
import GhostAdminAPI from '@tryghost/admin-api';
import axios from 'axios';

// Configura tus API Keys
const GHOST_APIKEY = '66ec8c78b8138f304055d0b3:a7960c103cf0ad6639edbabb4fb09fd10e295741a88efb02d1ec5e8169377b2a';
const GHOST_URL = 'http://localhost:2368';
const COHERE_APIKEY = 'xfQYySmCeMLK5cSCsGSaelaldht12vFBFurINjtj';
const UNSPLASH_ACCESS_KEY = 'lhqqg7aHrUumgohufYAK91tm7FN25uSzNsgcI_vBupQ';
const UNSPLASH_URL = 'https://api.unsplash.com/search/photos';

const cohere = new CohereClient({ token: COHERE_APIKEY });
const api = new GhostAdminAPI({ url: GHOST_URL, key: GHOST_APIKEY, version: 'v5.0' });

// Función para limpiar el contenido de respuesta de Cohere y extraer el JSON válido
function extraerJSONValido(texto) {
	const match = texto.match(/{[\s\S]*}/);
	if (match) {
		return match[0];
	} else {
		throw new Error("No se encontró un JSON válido en la respuesta.");
	}
}

async function buscarImagenRelacionada() {
	try {
		const searchTerms = [
			"Personal Growth", "Self-Improvement", "Motivation", "Mindfulness", "Resilience",
			"Self-Discipline", "Positive Thinking", "Goal Setting", "Time Management", "Mental Health",
			"Meditation", "Success", "Focus", "Gratitude", "Confidence", "Productivity", "Wellbeing",
			"Life Balance", "Inspiration", "Empowerment", "Self-Reflection", "Leadership",
			"Emotional Intelligence", "Stress Management", "Creativity", "Adaptability", "Self-Awareness",
			"Positivity", "Vision Board", "Growth Mindset", "Inner Peace", "Achievement"
		];
		const query = searchTerms[Math.floor(Math.random() * searchTerms.length)];

		const response = await axios.get(UNSPLASH_URL, {
			params: {
				query,
				client_id: UNSPLASH_ACCESS_KEY,
				per_page: 10
			}
		});

		const images = response.data.results;
		if (images.length > 0) {
			const randomImage = images[Math.floor(Math.random() * images.length)];
			return randomImage.urls.regular || null;
		} else return null;
	} catch (error) {
		console.error("Error buscando imagen en Unsplash:", error);
		return null;
	}
}

async function generarContenidoCompleto() {
	try {
		const response = await cohere.generate({
			model: 'command-xlarge-nightly',
			prompt: 'Instrucciones: 1. Devuelve el contenido en formato JSON estricto. 2. El objeto JSON debe contener las siguientes claves: "title", "excerpt", "htmlContent", "metaTitle", "metaDescription". 3. No incluya caracteres adicionales fuera de las comillas, como "#" o guiones. 4. Ejemplo de salida: {"title": "Título de ejemplo","excerpt": "Un breve resumen del artículo.","htmlContent": "<h1>Encabezado</h1><p>Contenido del artículo en formato HTML.</p>","metaTitle": "Meta título de ejemplo","metaDescription": "Meta descripción para SEO."}. Tema: 1. Título Impactante: Crea un título atractivo que llame la atención y resuma de manera efectiva el contenido del artículo. 2. Introducción Inspiradora: Comienza con una introducción que capte el interés del lector, describiendo brevemente la importancia del desarrollo personal y cómo puede transformar la vida de una persona. 3. Desglose de Estrategias Prácticas: • Ofrece un mínimo de tres estrategias o consejos prácticos sobre cómo los lectores pueden mejorar un aspecto específico de sus vidas (por ejemplo, gestión del tiempo, hábitos saludables, desarrollo de la autoestima). • Cada estrategia debe incluir una breve explicación teórica y un ejemplo práctico que el lector pueda aplicar en su vida diaria. 4. Beneficios a Largo Plazo: Explica cómo la implementación de estas estrategias puede influir positivamente en la vida de los lectores a largo plazo, destacando aspectos como la mejora de la salud mental, el aumento de la productividad o la construcción de relaciones más saludables. 5. Conclusión Motivadora: Termina el artículo con una conclusión que motive a los lectores a tomar acción. Incluye una cita inspiradora o un llamado a la acción que los anime a empezar su viaje de desarrollo personal hoy mismo. 6. Metadatos: • Meta título: Crea un meta título conciso que resuma el contenido del artículo en menos de 60 caracteres. • Meta descripción: Escribe una meta descripción que describa de manera atractiva el artículo en menos de 160 caracteres, enfocada en atraer clics desde los motores de búsqueda. • Tags: Sugerir al menos cinco etiquetas relevantes que ayuden a categorizar el artículo para el SEO (por ejemplo, “crecimiento personal”, “productividad”, “autoayuda”, “motivación”, “bienestar mental”). Devuelve este contenido en un objeto JSON',
			max_tokens: 1000,
			temperature: 0.7
		});

		// Limpia la respuesta de Cohere y extrae el JSON válido
		const cleanResponse = extraerJSONValido(response.generations[0].text);
		console.log("Cohere Response (cleaned):", cleanResponse);

		const content = JSON.parse(cleanResponse);

		if (!content.title || !content.htmlContent) {
			throw new Error("Contenido incompleto o inválido generado por Cohere");
		}

		const imageUrl = await buscarImagenRelacionada();

		return {
			status: 'published',
			title: content.title.trim(),
			excerpt: content.excerpt?.trim(),
			html: content.htmlContent.trim(),
			meta_title: content.metaTitle?.trim(),
			meta_description: content.metaDescription?.trim(),
			feature_image: imageUrl
		};

	} catch (err) {
		if (err instanceof CohereTimeoutError) console.log("La solicitud a Cohere ha caducado:", err);
		else if (err instanceof CohereError) console.log("Error de Cohere:", err.statusCode, err.message, err.body);
		else console.log("Error inesperado:", err);
		return null;
	}
}

(async function main() {
	try {
		const post = await generarContenidoCompleto();
		if (post) {
			console.log('Adding', post.title);
			const result = await api.posts.add(post, { source: 'html' });
			console.log(`Post added: ${result.title}`);
		}
	} catch (err) {
		console.error('There was an error', err);
		process.exit(1);
	}
}());