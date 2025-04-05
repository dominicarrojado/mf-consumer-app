import { createModuleFederationConfig } from '@module-federation/rsbuild-plugin';

export default createModuleFederationConfig({
  name: 'mf_consumer_app',
  remotes: {
    provider: `mf_provider_app@${process.env.PROVIDER_APP_URL}/mf-manifest.json`,
  },
  shared: {
    react: { singleton: true },
    'react-dom': { singleton: true },
    '@fontsource/poppins/500.css': { singleton: true },
    '@fontsource/poppins/500-italic.css': { singleton: true },
    '@fontsource/poppins/600.css': { singleton: true },
    '@fontsource/poppins/600-italic.css': { singleton: true },
    '@fontsource/roboto/400.css': { singleton: true },
    '@fontsource/roboto/400-italic.css': { singleton: true },
    '@fontsource/roboto/500.css': { singleton: true },
    '@fontsource/roboto/500-italic.css': { singleton: true },
  },
});
