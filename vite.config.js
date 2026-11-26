import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { handleGeminiRequest } from './server/gemini.js'

function localGeminiApi(apiKey) {
  return {
    name: 'local-gemini-api',
    configureServer(server) {
      server.middlewares.use('/.netlify/functions/chat', async (req, res) => {
        let body = '';
        for await (const chunk of req) body += chunk;

        const result = await handleGeminiRequest(req.method, body, apiKey);
        res.statusCode = result.statusCode;
        res.setHeader('Content-Type', 'application/json; charset=utf-8');
        res.end(result.body);
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');

  return {
    plugins: [react(), localGeminiApi(env.GEMINI_API_KEY)],
  };
});
