import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['./src/index.ts'],
  clean: true,
  sourcemap: true,
  dts: true,
  splitting: false,
  banner: { js: '"use client"' },
  tsconfig: './tsconfig.json',
  target: 'esnext',
  format: ['esm', 'cjs']
});
