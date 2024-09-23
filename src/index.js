import { Gemini } from './apiGemini';

document.getElementById('gemini-btn').addEventListener('click', async () => {
  const result = await Gemini();
  alert(result);
});
