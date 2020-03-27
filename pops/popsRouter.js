const express = require('express');

const Pops = require('./popsModel.js');

const router = express.Router();

router.get('/pop', (req, res) => {
    Pops.find()
        .then(pops => {
            res.status(200).json(pops);
        })
        .catch(err => {
            // console.log(res);
            res.status(500).json({ errorMessage: 'Could not grab pops', err });
        });
});

router.post('/pop', (req, res) => {
    const data = req.body;

    Pops.add(data)
        .then((add) => {
            res.status(201).json(add)
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ errorMessage: 'Failed to add that pop.'})
        })
})

router.delete('/pop/:id', (req, res) => {
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