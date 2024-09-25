import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = process.env.API_KEY;

export async function Gemini(prompt) {
  const padrao = "Você é um intrutor de nóticias e devera me explicar da forma mais simples e compreensível sobre a veracidade das informações em um pequeno paragrafo, e me fale as princiapais fontes de informações sobre esse contendo: "
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash", generationConfig:{
    candidateCount: 1,
    maxOutputTokens: 1000,
    temperature: 0.5,
  }});
  const result = await model.generateContent(padrao+prompt);
  return result.response.text();
}
