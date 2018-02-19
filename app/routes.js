var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// add your routes here
router.get('/pick-plan-type', function (req, res) {
  // get the answer from the query string (eg. ?over18=false)
  var radiogroup = req.query.radiogroup

  if (radiogroup === 'direct-debit-payment-monthly-1') {
    // redirect to the relevant page
    res.redirect('/driving-pages/direct-debit-payment-monthly-1')
  } else {
    // if over18 is any other value (or is missing) render the page requested
    res.redirect('/driving-pages/direct-debit-payment-yearly-1')
  } 
})


module.exports = router


