import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/index.ts',
  output: {
    name: 'event',
    dir: 'dist',
    format: 'umd',
    sourcemap: true,
  },
  plugins: [
    typescript(),
  ],
};
