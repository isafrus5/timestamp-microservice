'use strict';

const express = require('express');
const app = express();
const moment = require('moment');

app.get('/:date', (req, res) => {
  let date = moment( req.params.date, 'MMMM DD, YYYY', true);
  
  if (!date.isValid()) {
    date = moment.unix(req.params.date);
  }
  
  if (!date.isValid()) {
    res.json({
      unix: null,
      natural: null
    });
  }
  
  res.json({
    unix: date.format('X'),
    natural: date.format('MMMM DD, YYYY')
  });
});

app.listen(8080, () => {
  console.log('Server running on port 8080');
});
