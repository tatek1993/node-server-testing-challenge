const express = require('express');

const Pops = require('./popsModel.js');

const router = express.Router();

router.get('/', (req, res) => {
    Pops.find()
        .then((pops) => {
            res.json(pops);
        })
        .catch(err => {
            res.status(500).json({ errorMessage: 'Could not grab pops' });
        });
});

router.post('/', (req, res) => {
    const data = req.body;

    Pops.add(data)
        .then((res) => {
            res.status(201).json(res)
        })
        .catch((err) => {
            res.status(500).json({ errorMessage: 'Failed to add that pop.'})
        })
})

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    Pops.remove(id)
        .then((del) => {
            if(del) {
                res.status(200).json(del)
            } else {
                res.status(404).json({ errorMessage: 'The pop with that id could not be found.'})
            }
        })
        .catch((err) => {
            res.status(500).json({ errorMessage: 'Could not delete that pop'})
        });
});

module.exports = router;