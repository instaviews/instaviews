const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/product/:id', (req, res) => {
    console.log('GET @ product/:id');
    controller.getProduct(req.params.id, (err, doc) => {
        if (err) {
            console.log(err);
        } else {
            res.status(200).send(doc)
        }
    });
});

router.post('product/:id', (req, res) => {
    console.log('POST @ product/:id');
    res.status(200).send("POST product information!");
})

module.exports = router;