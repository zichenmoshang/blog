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
      if (node.children) {
        search(node.children);
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
    [config.invalid]: state.$invalid,
    [config.submit]: state.$submit
  };
}

export function getFieldClasses(config, state) {
  let classes = getClasses(config, state);
  Object.keys(state['$error']).forEach(props => {
    classes[`z-field-${props}`] = true;
  });
  return classes;
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
