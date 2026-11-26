import { handleGeminiRequest } from '../../server/gemini.js';

export const handler = async (event) => {
  const result = await handleGeminiRequest(
    event.httpMethod,
    event.body,
    process.env.GEMINI_API_KEY,
  );

  return {
    ...result,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  };
};
