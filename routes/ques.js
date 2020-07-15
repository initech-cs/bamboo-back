var express = require('express');
var router = express.Router();
const {
    createQues, 
    showQues,
    getQuesByID,
    updateQuesByID
} = require('../src/controllers/quesController')

/* GET exp page. */
// http://localhost:5000/exp
router.route('/')
    .post(createQues)
    // .get(showQues)

// http://localhost:5000/exp/:id
// router.route('/:id')
//     .get(getQuesByID)
//     .patch(updateQuesByID)

module.exports = router;
