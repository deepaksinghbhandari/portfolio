import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/portfolio/", // crucial for GitHub Pages
  plugins: [react()]
});
