import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = process.env.API_KEY;

export async function Gemini(prompt) {
  const padrao = "Me fale sobre a veracidade dessa informação em um pequeno paragrafo e me retorne um valor de 0 a 10 para determinar o quão falsa ela é sendo 0 é verídico, 5 a duvidas, 10 é falsa: Noticia: "
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const result = await model.generateContent(padrao+prompt);
  return result.response.text();
}
