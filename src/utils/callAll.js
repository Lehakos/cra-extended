// @flow
const callAll = (...fns: Array<*>) => (...args: Array<*>): void => {
  fns.forEach((fn: any) => {
    if (typeof fn !== 'function') {
      return;
    }

    fn(...args);
  });
};

export default callAll;
