/**
 * Evaluates `f` on `args`.
 * @example
 * // returns 3
 * evl(1, 2, (a, b) => a + b);
 * 
 * @param   {...*} args arguments. This is  everything before `f`.
 * @param   {...function} f a function. This is always the last parameter.
 * @returns {*} the result of evaluating `f` on `args`.
 */
module.exports = (...args) => (args[args.length - 1]).apply(null, args.slice(0, args.length - 1));