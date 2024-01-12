'use strict';

const assert = require('node:assert').strict;

const COLOR_ERROR = '\x1b[0;31m';
const COLOR_INFO = '\x1b[1;37m';
const COLOR_NORM = '\x1b[0m';

const logger = (color) => (s) => {
  console.log(color + s + COLOR_NORM);
};

logger.error = logger(COLOR_ERROR);
logger.info = logger(COLOR_INFO);

const serialize = (args) => [...args].map((x) => {
  const type = typeof x;
  if (type === 'object') return JSON.stringify(x);
  if (type === 'string') return `'${x}'`;
  if (type === 'number') return x.toString();
  return x.toString();
}).join(', ');

module.exports = (cases) => (name) => {
  const fn = require(`./Tasks/${name}.js`);
  let passed = 0;
  for (const [args, expected] of cases) {
    const msg = `Case: ${fn.name}(${serialize(args)}) ->`;
    let res, result;
    try {
      res = fn(...args);
      result = JSON.stringify(res);
    } catch (err) {
      logger.error(`${msg} ${result}, exception: ${err.stack}`);
      continue;
    }
    if (typeof expected === 'function') {
      if (!expected(res)) {
        logger.error(`${msg} ${result}`);
      }
      passed++;
      continue;
    }
    try {
      assert.deepEqual(res, expected);
      passed++;
    } catch {
      const ex = JSON.stringify(expected);
      logger.error(`${msg} ${result}, expected: ${ex}`);
    }
  }
  logger.info(`Test ${name}.js: Passed: ${passed} of ${cases.length}`);
  if (passed !== cases.length) process.exit(1);
};