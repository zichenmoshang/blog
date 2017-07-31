/**
 * Created by weihualiang048 on 17/7/17.
 */

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

export function getVModels(vnodes) {
  const vModels = [];
  if (!vnodes) {
    return vModels;
  }
  (function search(nodes) {
    for (let node of nodes) {
      if (node.data && node.data.directives) {
        let flag = node.data.directives.some(v => v.name === 'model');
        if (flag) {
          vModels.push(node);
        }
      }
    }
  })(vnodes);
  return vModels;
}

export function getValue(vnode) {
  return vnode.data.directives.filter(v => v.name === 'model')[0].value;
}

export function getClasses(config, state) {
  return {
    [config.dirty]: state.$dirty,
    [config.pristine]: state.$pristine,
    [config.valid]: state.$valid,
    [config.invalid]: state.$invalid
  };
}
