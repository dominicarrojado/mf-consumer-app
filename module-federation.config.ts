import { createModuleFederationConfig } from '@module-federation/rsbuild-plugin';

export default createModuleFederationConfig({
  name: 'mf_consumer_app',
  remotes: {
    provider: `mf_provider_app@${process.env.PROVIDER_APP_URL}/mf-manifest.json`,
  },
  shared: {
    react: { singleton: true },
    'react-dom': { singleton: true },
    tailwindcss: { singleton: true },
    '@tailwindcss/postcss': { singleton: true },
  },
});
