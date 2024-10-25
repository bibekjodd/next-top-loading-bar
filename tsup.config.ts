import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["./src/lib/index.ts"],
  dts: true,
  clean: true,
  sourcemap: true,
  format: ["cjs", "esm"],
  splitting: false,
  target: "esnext",
  tsconfig: "./tsconfig.build.json",
  banner: { js: "'use client'" },
});
