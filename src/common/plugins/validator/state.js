import Vue from 'vue';
import validators from './validators';
import {extend} from './utils';

export class FieldState {
  constructor(name) {
    this.$name = name;
    this.$dirty = false;
    this.$pristine = true;
    this.$valid = true;
    this.$invalid = false;
    this.$error = {};
    this.$errMsg = {};
    this._oldValue = undefined;
  }

  _setValidatorVadility(validator, isValid, msg) {
    if (isValid) {
      Vue.delete(this.$error, validator);
      Vue.delete(this.$errMsg, validator);
    } else {
      Vue.set(this.$error, validator, true);
      Vue.set(this.$errMsg, validator, msg);
    }
  }

  _setValidity(isValid) {
    this.$valid = isValid;
    this.$invalid = !isValid;
  }

  _setOldValue(value) {
    this._oldValue = value;
  }

  _setDirty(value) {
    if (this.$pristine && value !== this._oldValue) {
      this.$dirty = true;
      this.$pristine = false;
      this._oldValue = value;
    }
  }

  _valid(value, attrs, vnode) {
    let errNum = 0;
    const customValidators = attrs.validators;
    const _validators = extend({}, validators, customValidators || {});
    Object.keys(attrs).forEach(props => {
      if (_validators[props]) {
        let isTrue = _validators[props]['fn'](value, attrs[props]);
        this._setValidatorVadility(props, isTrue, _validators[props]['msg']);
        !isTrue && errNum++;
      }
    });
    this._setValidity(errNum === 0);
    this._setOldValue(value);
    if (vnode) {
      vnode.context.broadcast('z-form-item', 'fieldChange');
      vnode.context.broadcast('z-form', 'fieldChange');
    }
  }
}
