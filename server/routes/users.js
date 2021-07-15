const express = require('express');
const router = express.Router();

router.get('/id?', (req, res) => {
    let id = req.params.id
    if(id) { 
        res.json(chirpStore.GetUsers(id));
    } else {  
        res.send(chirpStore.GetUser())
    }
});

router.post('/', (req, res) => {
    chirpStore.CreateChirp(req.body);
    res.sendStatus(200);
}); 

module.exports = router;