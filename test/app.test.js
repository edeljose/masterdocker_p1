const request = require('supertest');
const app = require('../app');

describe('Pruebas de la API', () => {
    test('Debe responder con status 200', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toBe(200);
    });
});

