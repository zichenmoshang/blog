import {getValue} from '../utils';
import {FieldState} from '../state';

export default {
  name: 'validate',
  bind(el, binding, vnode) {
    const attrs = vnode.data.attrs;
    const name = attrs.name;
    if (!name) {
      throw new Error('attribute name is required');
    }
    const fn = binding.value.fn;
    let formState = binding.value.formState;
    const formConfig = binding.value.formConfig;
    let fieldState = new FieldState(name);
    const value = getValue(vnode);
    fieldState._valid(value, attrs, el, formConfig);
    fn._addControl.call(formState, fieldState);
    fn._setValidity.call(formState);
  },
  update(el, binding, vnode) {
    const attrs = vnode.data.attrs;
    const name = attrs.name;
    let formState = binding.value.formState;
    const formConfig = binding.value.formConfig;
    const fn = binding.value.fn;
    const value = getValue(vnode);
    formState[name]._setDirty(value);
    formState[name]._valid(value, attrs, el, formConfig);
    fn._setValidity.call(formState);
    fn._setDirty.call(formState);
  },
  unbind(el, binding) {
    let formState = binding.value.formState;
    const fn = binding.value.fn;
    fn._removeControl.call(formState);
  }
};

