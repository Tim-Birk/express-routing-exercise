const ExpressError = require('./expressError');

const convertToNumbers = (nums) => {
  const numbers = [];
  for (n of nums) {
    let num = Number(n);
    if (isNaN(num)) throw new ExpressError(`${n} is not a number`, 400);
    numbers.push(num);
  }
  return numbers;
};

const getMean = (nums) => {
  if (nums.length === 0) return 0;
  let sum = 0;
  for (num of nums) {
    sum += Number(num);
  }
  return sum / nums.length;
};

const getMedian = (nums) => {
  // source: https://stackoverflow.com/questions/45309447/calculating-median-javascript
  if (nums.length === 0) return 0;

  nums.sort(function (a, b) {
    return a - b;
  });

  var half = Math.floor(nums.length / 2);

  if (nums.length % 2) return nums[half];

  return (nums[half - 1] + nums[half]) / 2.0;
};

const getMode = (nums) => {
  if (nums.length === 0) return 0;

  let frequency = {};
  let currentMode;
  let maxFreq = 0;
  for (num of nums) {
    let n = Number(num);
    // if the number hasn't been recorded yet make new property
    if (frequency[n] === undefined) {
      frequency[n] = 0;
    }
    // add one to frequency
    frequency[n] += 1;
    // determine if new mode should be set
    if (frequency[n] > maxFreq) {
      maxFreq = frequency[n];
      currentMode = n;
    }
  }
  return currentMode;
};

module.exports = { convertToNumbers, getMean, getMode, getMedian };
