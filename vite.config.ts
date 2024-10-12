import path from "path";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: [".ts", ".tsx"],
    alias: {
      "~": path.resolve(__dirname, "src"),
    },
  },
});
