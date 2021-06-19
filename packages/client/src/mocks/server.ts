import { setupServer } from 'msw/node';

export const createServer = (requestHandlers: any) =>
  setupServer(...requestHandlers);
