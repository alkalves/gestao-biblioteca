import http from 'k6/http';
import { check, sleep } from 'k6';
import { BASE_URL } from '../config.js';

export const options = {
  vus: 30,
  duration: '60s',
  thresholds: {
    http_req_duration: ['p(95)<200'],
  },
};

export default function () {
  const timestamp = Date.now();
  const payload = JSON.stringify({
    nome: `PerfTestUser_${timestamp}`,
    email: `perftest_${timestamp}@email.com`,
    senha: 'senha123'
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const res = http.post(`${BASE_URL}/api/bibliotecarios/register`, payload, params);

  check(res, {
    'status is 201': (r) => r.status === 201,
    'response time < 200ms': (r) => r.timings.duration < 200,
  });

  sleep(1);
}
