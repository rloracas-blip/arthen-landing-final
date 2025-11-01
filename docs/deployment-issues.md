# Deployment build failures on Vercel

During the Vercel build the step `npm run build` invokes Vite, which reads the project configuration from [`vite.config.ts`](../vite.config.ts). That file unconditionally imports `@vitejs/plugin-react`.

```
import react from '@vitejs/plugin-react'
```

Because the plugin was not listed in `package.json`, it was never installed in production environments. Node therefore threw `ERR_MODULE_NOT_FOUND` while resolving the import, causing the build to abort before Vite could compile the application.

To fix the failure we now declare the plugin in the regular `dependencies` block so it is always installed, even when a build environment skips dev dependencies:

```json
"dependencies": {
  "@vitejs/plugin-react": "^4.3.4"
}
```

After adding the dependency, run `npm install` so that `package-lock.json` captures the new entry. Subsequent Vercel builds will install the plugin and Vite will be able to start the build.
