import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Prevent Windows from trying to resolve macOS-only optional dependency
  optimizeDeps: {
    exclude: ["fsevents"],
  },
  ssr: {
    external: ["fsevents"],
  },
  resolve: {
    alias: {
      fsevents: resolve(__dirname, "src/shims/fsevents.js"),
    },
  },
  server: {
    // Use polling on Windows to avoid fsevents-related watcher issues
    watch: { usePolling: true },
  },
});
