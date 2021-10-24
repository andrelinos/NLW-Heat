# NLW Heal - Web



# Notes

Durante o projeto, tive algumas dificuldades para fazer algumas coisas. Então vou alistar abaixo as dificuldades e as soluções

## Adicionar Environment Variables

- Para que o [Vite](https://vitejs.dev/) reconheça as variáveis de ambiente, precisamos instalar o módulo ``dotenv`` adicionar como que um feedback no arquivo ``vite.config.ts``. 

- Instalar o dotenv
```bash
$ yarn add dotenv
```
- Configurações do vite.config.ts
```ts
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.VITE_GITHUB_CLIENT_ID': `"${process.env.VITE_GITHUB_CLIENT_ID}"`,
    'process.env.VITE_GITHUB_AUTH_URL': `"${process.env.VITE_GITHUB_AUTH_URL}"`,
    }
});

// No arquivo auth.tsx, defini como abaixo?

  const CLIENT_ID = process.env.VITE_GITHUB_CLIENT_ID;
  const VITE_GITHUB_AUTH_URL = process.env.VITE_GITHUB_AUTH_URL;
```

- Conteúdo do arquivo .env
```env
VITE_GITHUB_CLIENT_ID= seu client ID
VITE_GITHUB_AUTH_URL= URL auth 
```