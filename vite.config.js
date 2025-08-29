import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://salmon-coast-0caff3a1e.1.azurestaticapps.net/login",
        changeOrigin: true,
      },
    },
  },
});
