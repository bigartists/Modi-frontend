import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import checker from 'vite-plugin-checker'

// ----------------------------------------------------------------------

export default defineConfig({
  define: {
    'process.env': process.env,
  },
  plugins: [
    react(),
    checker({
      typescript: true,
      eslint: {
        lintCommand: 'eslint "./src/**/*.{js,jsx,ts,tsx}"',
      },
      overlay: {
        initialIsOpen: false,
      },
    }),
  ],
  resolve: {
    alias: [
      {
        find: /^~(.+)/,
        replacement: path.join(process.cwd(), 'node_modules/$1'),
      },
      {
        find: /^@\/(.+)/,
        replacement: path.join(process.cwd(), 'src/$1'),
      },
      {
        find: /^src(.+)/,
        replacement: path.join(process.cwd(), 'src/$1'),
      },
    ],
  },
  server: {
    // https: true,
    host: '0.0.0.0',
    port: 8282,
    open: true,
    proxy: {
      '/modi': {
        target: 'http://localhost:8888',
        changeOrigin: true,
        secure: false,
        // bypass(req, res, options) {
        //   const proxyUrl = new URL(
        //     (options.rewrite as any)(req?.url || ''),
        //     options?.target?.toString() || '',
        //   )
        //   res.setHeader('x-res-proxyUrl', proxyUrl.href)
        // },
      },
    },
  },

  preview: {
    port: 8080,
  },
})
