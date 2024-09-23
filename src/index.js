import { Gemini } from './apiGemini';

document.getElementById('gemini-btn').addEventListener('click', async () => {
  const prompt = document.getElementById('prompt').value
  const result = await Gemini(prompt);
  alert(result);
});
