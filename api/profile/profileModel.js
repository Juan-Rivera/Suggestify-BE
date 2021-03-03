const db = require('../../data/dbConfig')

module.exports = {
    findById,    
    update
}

function findById(id){
    return db('users').where({id}).first()
}

function update(changes, id){
    return db('users')
    .update(changes)
    .where({id})
}
