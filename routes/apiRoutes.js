const express = require('express');
const router = express.Router();
const store = require('../db/store')
// localhost:3001/api/notes
router.get('/notes', (req, res) => {
    store

})

router.post('/notes', (req, res) => {
    store
        
})

router.delete('/notes', (req, res) => {
    store
        
})




module.exports = router;
