import { worker } from '../api/mocks/browser';

export default defineNuxtPlugin(async () => {
  const config = useRuntimeConfig();

  if (config.public.mock) {
    await worker.start({ onUnhandledRequest: 'bypass' });
  }
});
