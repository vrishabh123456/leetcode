/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function(fn, t = 1000) {
    let timer;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), t);
    }
};

//   const log = debounce(console.log, 100);
//   log('Hello'); // t = 0ms, 100ms
//   settimeout(() => log('hello'), 200);  // t = 200ms