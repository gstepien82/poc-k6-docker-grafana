import { userGet } from '../actions/userService/userGetCheck.js';
import { userPost } from '../actions/userService/userPostCheck.js';
import config from '../config.js';
import {
  textSummary,
  jUnit,
} from 'https://jslib.k6.io/k6-summary/0.1.0/index.js';
import { htmlReport } from 'https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js';

export function handleSummary(data) {
  console.log('Preparing the end-of-test summary...');
  return {
    "./reports/data.json": JSON.stringify(data),
    "./reports/result.html": htmlReport(data, {
      title: `User Test Flow ${new Date()
        .toISOString()
        .slice(0, 16)
        .replace('T', ' ')}`,
    }),
    stdout: textSummary(data, { indent: " ", enableColors: true }), './reports/user.xml': jUnit(data, {
      name: 'User Flow',
      classname: 'Test',
    }),
  }
}


const isNumeric = (value) => /^\d+$/.test(value);
const default_vus = 1;
const target_vus = isNumeric(config.numberOfVUs)
  ? Number(config.numberOfVUs)
  : default_vus;

export const options = {
  summaryTrendStats: [
    'avg',
    'min',
    'med',
    'max',
    'p(50)',
    'p(90)',
    'p(95)',
    'p(99)',
    'count',
  ],
  scenarios: {
    getAndPost: {
      executor: 'constant-vus',
      vus: target_vus,
      duration: '1s',
      exec: 'getAndPost',
    },
  },
  thresholds: {
    'http_req_duration{name:R1_GET}':
      ['p(90)<1000', 'p(99)<1500'],
      'http_req_duration{name:R2_POST}':
      ['p(90)<1000', 'p(99)<1500'],
    'http_req_failed{scenario:getAndPost}': ['rate<0.03'],
    'http_req_duration{scenario:getAndPost}': ['p(99)<3000'],
    'iteration_duration{scenario:getAndPost}': ['p(99)<4000'],
  },
};

const urls = {
  getUrl: `${config.url}/api/users/2`,
  postUrl: `${config.url}/api/users`,
};

export function getAndPost() {
  userGet(urls.getUrl);
  let payload = {
    "name": "morpheus",
    "job": "leader"
}
  userPost(urls.postUrl,payload)


}
