const async = require('async');

function parallel(tasks, cb, options={timeoutMS: 2000}) {
  options = options || {};

  if (typeof options.timeoutMS != 'number') {
    return async.parallel(tasks, cb);
  }

  let timeout = setTimeout(() => {
    timeout = null;

    cb(new Error(`May be mongodb is out, timed out after ${options.timeoutMS} ms.`), null);
  }, options.timeoutMS);

  async.parallel(tasks, (err, results) => {
    if (!timeout) return;
    clearTimeout(timeout);

    cb(err, results);
  });
}

module.exports = parallel;
