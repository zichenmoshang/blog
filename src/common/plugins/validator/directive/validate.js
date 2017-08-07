import {getValue} from '../utils';

export default {
  name: 'validate',
  bind(el, binding, vnode) {
    const attrs = vnode.data.attrs;
    let fieldState = binding.value.fieldState;
    const value = getValue(vnode);
    fieldState._valid(value, attrs);
  },
  update(el, binding, vnode) {
    const attrs = vnode.data.attrs;
    let fieldState = binding.value.fieldState;
    const value = getValue(vnode);
    fieldState._setDirty(value);
    fieldState._valid(value, attrs);
  }
};

