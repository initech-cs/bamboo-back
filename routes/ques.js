var express = require("express");
var router = express.Router();
const {
  createQues,
  getQues,
  getQuesByID,
  updateQuesByID,
  deleteQues,
  getCategories,
} = require("../src/controllers/quesController");

/* GET exp page. */
// http://localhost:5000/exp
router.route("/").post(createQues).get(getQues);
router.route("/categories").get(getCategories);
//localhost:5000/exp/:id
http: router
  .route("/:id")
  .get(getQuesByID)
  .patch(updateQuesByID)
  .delete(deleteQues);

module.exports = router;
