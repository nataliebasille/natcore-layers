import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import path from "path";

export default defineConfig({
  plugins: [
    solidPlugin({
      typescript: {
        onlyRemoveTypeImports: true,
      },
    }),
  ],
  server: {
    port: 5050,
  },
  build: {
    target: "esnext",
  },
  resolve: {
    alias: {
      "@layers": path.resolve(__dirname, "../src"),
    },
  },
});
