const router = require('express').Router()
const Songs = require('./savedSongsModel')
const Users = require('../auth/authModel')

router.get('/save/:id', (req, res) => {
    const id = req.params.id;
    Users.findById(id)
        .then(user => {
            Songs.findSavedSongs(id)
            .then(songs => {
                res.status(200).json(songs)
            })
        })
        .catch(e => {
            res.status(500).json({ error: e.message })
        })
})

router.post('/save', (req, res) => {
    const newSong = req.body;
    console.log(newSong.song_id)
    console.log(newSong.user_id)
    Songs.findById(newSong.song_id, newSong.user_id)
        .then(data => {
            if(data.length > 0){
                return res.status(500).json('song already saved')
            }else {
                 Songs.save(newSong)
                .then(song => {
                    return res.status(200).json(song)
                })
                .catch(e => {
                    res.status(500).json({ error: e.message, also: 'here' })
                })
            }
        })
        .catch(e => {
                return res.status(200).json({ error: e.message })
        }) 
})

router.delete('/save/:user_id/:song_id', (req, res) => {
    const user_id = req.params.user_id;
    const song_id = req.params.song_id;
    Songs.remove(song_id, user_id)
        .then(song => {
            if(!song){
                res.status(404).json({error: 'Could not find song by that ID'})
            } else {
                res.json({ message: 'successfully removed'})
            }
        })
        .catch(e => {
            res.status(500).json({ error: e.message })
        })
})


module.exports = router