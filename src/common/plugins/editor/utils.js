/* eslint-disable no-magic-numbers */

export function extend(...rest) {
  return rest.reduce((prev, next) => {
    if (prev instanceof Object && next instanceof Object) {
      Object.keys(next).forEach(key => {
        prev[key] = next[key];
      });
    }
    return prev;
  });
}

export function randomId() {
  return Math.random().toString(36).substr(2, 10);
}

export function copy(source) {
  let tmp = source instanceof Array ? [] : {};
  for (let props in source) {
    if (source.hasOwnProperty(props)) {
      tmp[props] = source[source] instanceof Object ? copy(source[props]) : source[props];
    }
  }
  return tmp;
}
