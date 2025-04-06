import type { FederationRuntimePlugin } from '@module-federation/runtime';

const fallbackPlugin = (): FederationRuntimePlugin => {
  return {
    name: 'fallback-plugin',
    async errorLoadRemote(args) {
      try {
        const backupEntryUrl = 'http://localhost:3000/mf-manifest.json';

        if (!backupEntryUrl) {
          throw new Error('No backup entry URL provided');
        }

        const response = await fetch(backupEntryUrl);

        if (!response.ok) {
          throw new Error(
            `Failed to fetch backup entry: ${response.statusText}`
          );
        }

        const backupManifest = await response.json();

        console.info('Successfully loaded backup manifest');

        return backupManifest;
      } catch (error) {
        console.error('Failed to load backup manifest:', error);

        // if backup service also fails, return original error
        return args;
      }
    },
  };
};

export default fallbackPlugin;
