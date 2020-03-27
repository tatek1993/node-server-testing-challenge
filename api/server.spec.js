const request = require('supertest');

const server = require('./server.js');

describe('server.js', function() {
    describe('GET /', function() {
        it('should return 200 ok', function() {
            return request(server)
                .get('/')
                .expect(200);
        });
    })
})