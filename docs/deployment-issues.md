# Deployment build failures on Vercel

Vercel runs `npm run build` which loads [`vite.config.ts`](../vite.config.ts). The original config imported `@vitejs/plugin-react`, but the package was never committed to the repository. As a result the build crashed with `ERR_MODULE_NOT_FOUND` while trying to resolve the plugin.

Instead of depending on the plugin we now let Vite's built-in esbuild pipeline handle JSX/TSX by enabling the automatic React runtime. This removes the missing dependency entirely:

```ts
export default defineConfig({
  esbuild: {
    jsx: 'automatic',
    jsxImportSource: 'react',
  },
})
```

Because the config no longer pulls in any external modules, Vercel can complete the build successfully without installing extra packages.
