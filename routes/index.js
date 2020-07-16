const express = require("express");
const router = express.Router();
const getResults = require("../scraper");
const getResults2 = require("../scraper2");
/* GET home page. */
router.get("/", async function(req, res, next) {
  const result = await getResults(); getResults2()
  res.render("index", result);
});
module.exports = router;