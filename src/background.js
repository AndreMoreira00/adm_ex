import { Gemini } from './apiGemini';

chrome.runtime.onInstalled.addListener(() => {
  console.log('Extension installed');
  Gemini().then(response => console.log(response));
});
