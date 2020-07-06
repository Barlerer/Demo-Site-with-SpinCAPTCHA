var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const jwt = require('jsonwebtoken')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.post('/authbio', (req, res) => {
  if (!req.body.sp_captcha_token) {
    return res.redirect('back');
  } const reqt = req.body
  console.log(reqt)
  const publicKey = `-----BEGIN PUBLIC KEY-----
  MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAxxK+gs9y56C0c58nKB1W
  hlyqqR7/4ISKCjzA4iSiZw8QFjzAGrGx5duqsB6evJzQAI14AOwPIFfKfYyUdl/h
  Hslko7p911E9694vtSO+WE3GsW/EjZpMBV/e+v0Zm27gkR8+fgNdkMyMX5DButLc
  PNgDU4pgHEflu5CeQ4pl51xRwv4pxYpd3zB2b/n1zCU9DYjOcL4PPhcs77TNj+xl
  PCKJokhSxLHhE3n8VgNWP37Z4FSuT78lGoz17SSuPOJy46u1Waj0N8A4y7haZ2XL
  Lny4QuaYIxtkg+HtLL62YU0/9v+tVu7vlrbiVAF9Y+vzf17cmUsE9eOn+4391v26
  MwIDAQAB
  -----END PUBLIC KEY-----`.replace(/\n\s+/g, "\n")
  //If this does not return error, then token is verified
  jwt.verify(req.body.sp_captcha_token, publicKey)
  const userScore = jwt.decode(req.body.sp_captcha_token);
  console.log(userScore.score)
  if (userScore.score < 0.3) {
    return res.send('Hi bot, you have FAILED the CAPTCHA test! your score is: ' + userScore.score);
  }
  console.log(userScore)

  return res.send('Hi lovely user, you have passed the CAPTCHA test! Im so happy you are not a robot. If you were wondering, your score is: ' + userScore.score);
});

app.post('/authspin', (req, res) => {
  if (!req.body.sp_captcha_token) {
    return res.redirect('back');
  } const reqt = req.body
  console.log(reqt)
  const publicKey = `-----BEGIN PUBLIC KEY-----
  MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAq5JU4HBdLYqZgasWoh8d
  x/HSrEDN6i839/OADvFPgNhimFiFBICekqMG/nyJ/GdLzQYNFTEGG/I1qpdQ5/Ol
  B1GmnUyPYU7AztFNhxw4J/ox+03BO/c/8i2ZEu2vYCND4F2O+01sGeBDoIjvc9LR
  un/c4TgyLUiQ47cWJ8LMqYkwJAyBpbUhUznb0smT3fAcdGUh1yiFkQSWx8VOxFxo
  WyPR+99ijL/wIil2WR5jR4uQ1bwG5I5gMpp3inleCNCcTF0l0Ho/R+VdVfVQ9/RV
  wY8MQGBtsnQ7y/40QJIvQxyYK8sf8GPS/WGJERKGamfqRik8s+YXKSPUSJkAaC7A
  UwIDAQAB
  -----END PUBLIC KEY-----`.replace(/\n\s+/g, "\n")
  //If this does not return error, then token is verified
  jwt.verify(req.body.sp_captcha_token, publicKey)
  const userScore = jwt.decode(req.body.sp_captcha_token);
  console.log(userScore.score)
  if (userScore.score < 0.6) {
    return res.send('Hi bot, you have FAILED the CAPTCHA test! your score is: ' + userScore.score);
  }
  console.log(userScore)

  return res.send('Hi lovely user, you have passed the CAPTCHA test! Im so happy you are not a robot. If you were wondering, your score is: ' + userScore.score);
});

app.post('/authbioandspin', (req, res) => {
  if (!req.body.sp_captcha_token) {
    return res.redirect('back');
  } const reqt = req.body
  console.log(reqt)
  const publicKey = `-----BEGIN PUBLIC KEY-----
  MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAu8W0zPRhwNlIIncG3RXx
  LWzuw5tIQA2HEWXhRHrMgmlXPXgqYR0840Ufa5j6n94R9GydDztwqUXxGkdvuIpl
  qtx/0MBHQSH1u8d63L2sXtv7E/9Kba2id+pPO5SpwSIEF8mCWj1Mtc9f2iAWFUQG
  /BsZuZjW2VPy6AAFh9k041y7TktiBZfIDvIpIyar2p1pm6WFuoF28LbAdQqakOgF
  CaHIf4B7VPNTBqHmux+2GU6eIPb+UXGHilCCQX602eOkHRBNrttRhSNkV6Zipzd8
  UbwQng+xW45nEx7Y02x7UFm1q3T3hEhgUkZxKjQTjUauJfBCA7yXCVuay43HxI8S
  jwIDAQAB
  -----END PUBLIC KEY-----`.replace(/\n\s+/g, "\n")
  //If this does not return error, then token is verified
  jwt.verify(req.body.sp_captcha_token, publicKey)
  const userScore = jwt.decode(req.body.sp_captcha_token);
  console.log(userScore.score)
  if (userScore.score < 0.6) {
    return res.send('Hi bot, you have FAILED the CAPTCHA test! your score is: ' + userScore.score);
  }
  console.log(userScore)

  return res.send('Hi lovely user, you have passed the CAPTCHA test! Im so happy you are not a robot. If you were wondering, your score is: ' + userScore.score);
});
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});


module.exports = app;
