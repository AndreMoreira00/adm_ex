import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = process.env.API_KEY;

export async function Gemini() {
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = await genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const result = await model.generateContent("O que é uma batata?");
  return result.response.text();
}
