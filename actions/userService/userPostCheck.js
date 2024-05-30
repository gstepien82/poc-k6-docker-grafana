import http from 'k6/http';
import { check } from 'k6';

export function userPost(url, body) {
  let response = http.post(url, JSON.stringify(body), {
        headers: {
            "Content-Type": "application/json"
        },
        tags: { name: 'R2_POST' }});
console.log(JSON.stringify(response))
  check(response, {
    'User post status is 200': (r) => r.status === 201,
    'User post response is valid json': (r) => r.body && JSON.parse(r.body),
  });
}