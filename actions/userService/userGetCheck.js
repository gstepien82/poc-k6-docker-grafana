import http from 'k6/http';
import { check } from 'k6';

export function userGet(url) {
  let response;
  response = http.get(url, {
    tags: { name: 'R1_GET' },
  });
  // console.log(JSON.stringify(response))
  check(response, {
    'User Check status is 200': (r) => r.status === 200,
    'User GET response is valid json': (r) => r.body && JSON.parse(r.body),
  });
}