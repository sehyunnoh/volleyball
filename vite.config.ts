import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

// GitHub Pages serves this repo from a sub-path. Every path-aware piece
// (router, manifest, service worker scope) must agree on it.
const BASE = '/volleyball/'

export default defineConfig({
  base: BASE,
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        id: BASE,
        name: 'Volleyball Handbook',
        short_name: 'Volleyball',
        description:
          'A curated volleyball skills library — categories, levels, and one hand-picked video per skill.',
        start_url: BASE,
        scope: BASE,
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#f7f7f5',
        theme_color: '#f7f7f5',
        icons: [
          { src: 'icons/icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: 'icons/icon-512.png', sizes: '512x512', type: 'image/png' },
          {
            src: 'icons/maskable-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,woff2,webmanifest}'],
        // Skill data ships inside the JS bundle, so the app shell cache is
        // enough to read descriptions and key points offline.
        navigateFallback: `${BASE}index.html`,
        cleanupOutdatedCaches: true,
        runtimeCaching: [
          {
            // YouTube thumbnails: show them again on a flaky gym connection.
            urlPattern: /^https:\/\/i\.ytimg\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'yt-thumbnails',
              expiration: { maxEntries: 120, maxAgeSeconds: 60 * 60 * 24 * 30 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
        ],
      },
    }),
  ],
})
