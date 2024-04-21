import { setupWorker } from 'msw/browser';
import { handlers } from './handlers';
import { getSimpleCRUDAPIMock } from '../generated/api.msw';

export const worker = setupWorker(...handlers, ...getSimpleCRUDAPIMock());
