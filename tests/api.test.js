const app = require('../index');
const request = require('supertest');

test.each([
  ["test", 200],
  ["test1", 200],
  ["test2", 200],
])('.get %1', async (a, expected) => {
  const response = await request(app).get(`/?data=${a}`);
  console.log(response.body);
  expect(response.body.status).toEqual(200);
});