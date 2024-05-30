

import {  Environment } from './enums/enums.js';
import { getEnv, getTenantName } from './utils/envResolver.js';

const urls = JSON.parse(open('./urls.json'));

const readUrlString = (api, env, tenant) => {
  if (env !== Environment.tenant) {
    return urls[api][env];
  } else {
    return `https://${tenant}${urls[api].suffix}`;
  }
};
export default {
url: readUrlString('apiUrl', getEnv(), getTenantName()),
};
