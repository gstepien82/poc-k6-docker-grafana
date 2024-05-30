import { Environment } from '../enums/enums.js';

export function getEnv() {
  if (!`${__ENV.TEST_ENV}`) {
    throw new Error("Environment undefined");
  }
  let env;
  try {
    env = Environment[`${__ENV.TEST_ENV}`];
  } catch (err) {
    throw new Error("Environment not found");
  }
  return env;
}

export function getTenantName() {
  if (!`${__ENV.TENANT_NAME}` && `${__ENV.TEST_ENV}` === 'tenant') {
    throw new Error("Tenant undefined");
  } else {
    return `${__ENV.TENANT_NAME}` || '';
  }
}
