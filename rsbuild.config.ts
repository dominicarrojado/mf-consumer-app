import path from 'node:path';
import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import moduleFederationConfig from './module-federation.config';

export default defineConfig({
  plugins: [pluginReact(), pluginModuleFederation(moduleFederationConfig)],
  output: {
    assetPrefix: '/mf-consumer-app/',
  },
  source: {
    exclude: [
      path.resolve(__dirname, 'src/__tests__'),
      path.resolve(__dirname, 'src/__mocks__'),
    ],
  },
  html: {
    template: './src/index.html',
    meta: {
      charset: {
        charset: 'UTF-8',
      },
      viewport: 'width=device-width, initial-scale=1.0',
      description:
        'Whether for new home loans or refinance, get the best rates and personalized advice with PropertyGuru Finance.',
    },
  },
});
