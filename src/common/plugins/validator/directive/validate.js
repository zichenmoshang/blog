import {getValue} from '../utils';
import {FieldState} from '../state';

export default {
  name: 'validate',
  bind(el, binding, vnode) {
    const attrs = vnode.data.attrs;
    let fieldState = binding.value.fieldState;
    const formConfig = binding.value.formConfig;
    const value = getValue(vnode);
    fieldState._valid(value, attrs, formConfig);
  },
  update(el, binding, vnode) {
    const attrs = vnode.data.attrs;
    let fieldState = binding.value.fieldState;
    const formConfig = binding.value.formConfig;
    const value = getValue(vnode);
    fieldState._valid(value, attrs, formConfig);
  },
  unbind(el, binding) {
    let formState = binding.value.formState;
    const fn = binding.value.fn;
    fn._removeControl.call(formState);
  }
};

