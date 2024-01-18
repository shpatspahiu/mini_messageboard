const express = require('express');
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Mini MessageBoard', messages: messages });
});


router.get('/new', (req, res, next) => {
  res.render('form')
})

router.post('/new', (req, res, next) => {
  const message = req.body
  console.log(message)
  messages.push({ text: message.text, user: message.user, added: new Date() })
  res.redirect('/')
})

module.exports = router;
