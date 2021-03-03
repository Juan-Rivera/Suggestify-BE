const router = require('express').Router()
const Profiles = require('./profileModel')

router.patch('/:id', (req, res) => {
    const id = req.params.id
    const changes = req.body
    Profiles.update(changes, id)
    .then(user => {
        res.status(200).json(user)
    })
    .catch(e => {
        res.status(500).json({ error: e.message})
    })
})

router.get('/:id', (req, res) => {
    const id = req.params.id
    Profiles.findById(id)
    .then(user => {
        res.status(200).json(user)
    })
    .catch(er => {
        res.send(er)
    })
})

module.exports = router
