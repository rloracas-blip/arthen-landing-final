# Deployment build failures on Vercel

During the Vercel build the step `npm run build` invokes Vite, which reads the project configuration from [`vite.config.ts`](../vite.config.ts). That file unconditionally imports `@vitejs/plugin-react`.

```
import react from '@vitejs/plugin-react'
```

Because the plugin is not listed in `package.json`, it is never installed in production environments. Node therefore throws `ERR_MODULE_NOT_FOUND` while resolving the import, causing the build to abort before Vite can compile the application.

To fix the failure you must add the missing dependency to the dev dependencies section:

```json
"devDependencies": {
  "@vitejs/plugin-react": "^4.3.4"
}
```

After adding the dependency, run `npm install` so that `package-lock.json` captures the new entry. Subsequent Vercel builds will install the plugin and Vite will be able to start the build.
