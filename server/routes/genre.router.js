const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  // query to get all genres
  const query = `SELECT * FROM "genres";`
  pool.query(query)
    .then((response) => {
      console.log('response on server genres GET is:', response.rows);
      res.send(response.rows)
    })
    .catch((error) => {
      console.log('error in server genres GET');
      res.sendStatus(500)
    })
});

module.exports = router;