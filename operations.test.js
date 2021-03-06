const ExpressError = require('./expressError');
const {
  convertToNumbers,
  getMean,
  getMedian,
  getMode,
} = require('./operations');

const arr1 = [1, 2, 3, 4];
const arr2 = [1, -2, 23, -36, 3.5];
const arr3 = [1, 2, 3, 3, 3, 2, 3, 4, 4, 4, 4, 4, 5, 4, 6, 7, 7, 5, 4545, 454];

describe('getMean function', () => {
  it('calculates mean for parameter array correctly', function () {
    expect(getMean(arr1)).toEqual(2.5);
    expect(getMean(arr2)).toEqual(-2.1);
    expect(getMean(arr3)).toEqual(253.5);
  });

  it('calculates mean for empty array correctly', () => {
    expect(getMean([])).toEqual(0);
  });
});

describe('getMedian function', function () {
  it('calculates correct median for parameter array', function () {
    expect(getMedian(arr1)).toEqual(2.5);
    expect(getMedian(arr2)).toEqual(1);
    expect(getMedian(arr3)).toEqual(4);
  });
});

describe('getMode function', function () {
  it('calculates correct median for parameter array', function () {
    expect(getMode(arr3)).toEqual(4);
  });
});
