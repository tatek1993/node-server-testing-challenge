const db = require('../data/dbConfig.js');

module.exports = {
    remove,
    add,
    find,
    findById
};

function add(data) {
    return db(data)
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
    return db('pops')
}

function findById(id) {
    return db('pops')
        .where({ id })
        .first();
}