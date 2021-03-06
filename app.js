const express = require('express');
const ExpressError = require('./expressError');
const {
  convertToNumbers,
  getMean,
  getMedian,
  getMode,
} = require('./operations');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/mean', function (req, res, next) {
  try {
    const numParams = req.query.nums ? req.query.nums.split(',') : [];
    const nums = convertToNumbers(numParams);
    const mean = getMean(nums);

    return res.json({ operation: 'mean', value: mean });
  } catch (err) {
    return next(err);
  }
});

app.get('/median', function (req, res, next) {
  try {
    const numParams = req.query.nums.split(',');
    const nums = convertToNumbers(numParams);
    const median = getMedian(nums);

    return res.json({ operation: 'median', value: median });
  } catch (err) {
    return next(err);
  }
});

app.get('/mode', function (req, res, next) {
  try {
    const numParams = req.query.nums.split(',');
    const nums = convertToNumbers(numParams);
    const mode = getMode(nums);

    return res.json({ operation: 'mode', value: mode });
  } catch (err) {
    return next(err);
  }
});

// 404 handler
app.use(function (req, res, next) {
  const notFoundError = new ExpressError('Not Found', 404);
  return next(notFoundError);
});

// generic error handler
app.use(function (err, req, res, next) {
  // the default status is 500 Internal Server Error
  let status = err.status || 500;
  let message = err.message;

  // set the status and alert the user
  return res.status(status).json({
    error: { message, status },
  });
});

app.listen(3000, () => {
  console.log('App on port 3000');
});
