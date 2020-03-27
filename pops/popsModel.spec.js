const request = require('supertest');

const router = require('./popsRouter.js');
const server = require('../api/server.js');

// console.log(Object.keys(router));
// console.log(Object.keys(server));



describe('popsRouter.js', function() {
    describe('GET /pop', function() {
        it('should return 200 ok', function() {
            return request(server)
                .get('/api/pop')
                .expect(200);
        });

        it('should return JSON', function() {
            return request(server)
                .get('/api/pop')
                .then(res => {
                    expect(res.type).toMatch(/json/i);
                });
        });
    })

    describe('POST /pop', function() {
        it('should return 201 created', function() {
            return request(server)
                .post('/api/pop')
                .send({ pop_name: 'Sprite'}) 
                .expect(201);
        });
        
        it('should return JSON', function(){
            return request(server)
                .post('/api/pop')
                .send({ pop_name: 'Sprite'}) 
                .then(res => {
                    expect(res.body.pop_name).toMatch(/sprite/i);
                })
        });
    });

    describe('DELETE /pop', function() {
        it('should return 404 not found', function() {
            return request(server)
                .delete('/api/pop/15')
                .expect(404);
        });

        it('should return JSON', function(){
            return request(server)
                .delete('/api/pop/15')
                .then(res => {
                    expect(res.body.errorMessage).toMatch(/The pop with that id could not be found./i);
                })
        });
    })
})