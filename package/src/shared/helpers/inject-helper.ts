import { inject } from 'vue';

function injectStrict<T>(key: string): T {
  const resolved = inject<T>(key);
  if (!resolved) {
    throw new Error(`Could not resolve ${key}`);
  }
  return resolved;
}

export { injectStrict };
