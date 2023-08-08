import { inject } from 'vue';

function injectStrict(name: string, item: any) {
  const injected = inject(name, item);
  if (injected) {
    return injected;
  }
}
