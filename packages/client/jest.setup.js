// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const fetch = require('node-fetch');

/**
 * Note: setImmediate is not defined
 * を解消するため
 */
// eslint-disable-next-line no-undef
require('setimmediate');

/**
 * Note: "fetch" has not been found globally and no fetcher has been configured
 * を解消するため
 */
// eslint-disable-next-line no-undef
if (!globalThis.fetch) {
  // eslint-disable-next-line no-undef
  globalThis.fetch = fetch;
}
