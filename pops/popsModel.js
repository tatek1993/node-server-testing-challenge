const db = require('../data/dbConfig.js');

module.exports = {
    add,
    remove,
    find,
    findById
};

function add(data) {
    return db('pops')
        .insert(data, 'id')
        .then((res) => {
            return findById(res[0]);
        });
}

function remove(id) {
    return db('pops')
        .where({ id })
        .del();
}

function find() {
    return db('pops');
}

function findById(id) {
    return db('pops')
        .where({ id })
        .first();
}