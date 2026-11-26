const GEMINI_MODEL = 'gemini-3.5-flash-lite';
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`;

function jsonResponse(statusCode, body) {
  return { statusCode, body: JSON.stringify(body) };
}

export async function handleGeminiRequest(method, requestBody, apiKey) {
  if (method !== 'POST') {
    return jsonResponse(405, { error: { message: 'Method not allowed.' } });
  }

  if (!apiKey) {
    return jsonResponse(500, {
      error: { message: 'Chatbot is not configured. Set GEMINI_API_KEY in .env.local or Netlify environment variables.' },
    });
  }

  let payload;
  try {
    payload = JSON.parse(requestBody || '');
  } catch {
    return jsonResponse(400, { error: { message: 'Request body must be valid JSON.' } });
  }

  if (!Array.isArray(payload.contents) || payload.contents.length === 0) {
    return jsonResponse(400, { error: { message: 'Request must include chat contents.' } });
  }

  try {
    const response = await fetch(GEMINI_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-goog-api-key': apiKey,
      },
      body: JSON.stringify({ contents: payload.contents }),
    });

    const responseBody = await response.text();
    return {
      statusCode: response.status,
      body: responseBody || JSON.stringify({
        error: { message: `Gemini returned an empty response (HTTP ${response.status}).` },
      }),
    };
  } catch {
    return jsonResponse(502, { error: { message: 'Could not connect to the Gemini API.' } });
  }
}
