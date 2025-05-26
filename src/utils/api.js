// WARNING: This file contains a hardcoded API key for demonstration as per your request.
// DO NOT commit real API keys to public repositories in production!
export const callGeminiTextAPI = async (prompt) => {
  try {
    let chatHistory = [];
    chatHistory.push({ role: "user", parts: [{ text: prompt }] });
    const payload = { contents: chatHistory };
    const apiKey = "AIzaSyDr8Zs5bbGFhGHHGq0o4MiUzX2KEnPb89g";
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const result = await response.json();

    if (result.candidates && result.candidates.length > 0 &&
        result.candidates[0].content && result.candidates[0].content.parts &&
        result.candidates[0].content.parts.length > 0) {
      return result.candidates[0].content.parts[0].text;
    } else {
      return "Failed to generate text. Please try again.";
    }
  } catch (error) {
    return "Error generating text. Please check console.";
  }
};

export const callImagenAPI = async (prompt) => {
  try {
    const payload = { instances: { prompt: prompt }, parameters: { "sampleCount": 1 } };
    const apiKey = "AIzaSyDr8Zs5bbGFhGHHGq0o4MiUzX2KEnPb89g";
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/imagen-3.0-generate-002:predict?key=${apiKey}`;

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const result = await response.json();

    if (result.predictions && result.predictions.length > 0 && result.predictions[0].bytesBase64Encoded) {
      return `data:image/png;base64,${result.predictions[0].bytesBase64Encoded}`;
    } else {
      return "https://placehold.co/1200x600/0A1931/FFD700?text=Image+Error";
    }
  } catch (error) {
    return "https://placehold.co/1200x600/0A1931/FFD700?text=Image+Error";
  }
};