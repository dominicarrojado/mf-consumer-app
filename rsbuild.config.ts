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
});
