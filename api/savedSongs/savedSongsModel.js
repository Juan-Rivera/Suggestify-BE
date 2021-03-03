const db = require('../../data/dbConfig')

module.exports = {
    findById,
    findSavedSongs,
    save,
    remove
}

// might be used for later dont know yet
function findById(song_id, user_id){
    return db('savedSongs').where({song_id}).andWhere({user_id})
}

// finds saved songs for specific user
function findSavedSongs(user_id){
    return db('savedSongs').where({user_id})
}

// saves song for specific user
async function save(song) {
    const [newSong] = await db('savedSongs').insert(song, '*');
  
    return newSong;
}

// removes a saved song for specific user
function remove(song_id, user_id){
    return db('savedSongs').del().where({song_id}).andWhere({user_id})
}