import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import * as path from "path";

export default defineConfig({
  plugins: [solid()],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
});
