/**
 * Created by weihualiang048 on 17/7/28.
 */
import Vue from 'vue';
import validators from './validators';

export class FormState {
  constructor() {
    this.$dirty = false;
    this.$pristine = true;
    this.$valid = true;
    this.$invalid = false;
  }

  _setValidity() {
    let isValid = true;
    for (let field of Object.values(this)) {
      if (Object.prototype.toString.call(field) === '[object Object]' && field.$invalid) {
        isValid = false;
        break;
      }
    }
    this.$valid = isValid;
    this.$invalid = !isValid;
  }

  _setDirty() {
    for (let field of Object.values(this)) {
      if (Object.prototype.toString.call(field) === '[object Object]' && field.$dirty) {
        this.$dirty = true;
        this.$pristine = false;
        break;
      }
    }
  }

  _addControl(ctrl) {
    Vue.set(this, ctrl.$name, ctrl);
  }

  _removeControl(ctrl) {
    Vue.delete(this, ctrl.$name);
  }
}

export class FieldState {
  constructor(name) {
    this.$name = name;
    this.$dirty = false;
    this.$pristine = true;
    this.$valid = true;
    this.$invalid = false;
    this.$error = {};
  }

  _changeClass(el, formConfig) {
    let className = [];
    Object.keys(this.$error).forEach(props => {
      className.push('pa-field-' + props);
    });
    className.forEach(name => {
      el.classList.add(name);
    });
    this._protoClass(el, this.$dirty, formConfig.fieldClasses['dirty']);
    this._protoClass(el, this.$pristine, formConfig.fieldClasses['pristine']);
    this._protoClass(el, this.$valid, formConfig.fieldClasses['valid']);
    this._protoClass(el, this.$invalid, formConfig.fieldClasses['invalid']);
  }

  _protoClass(el, flag, className) {
    flag ? el.classList.add(className) : el.classList.remove(className);
  }

  _setValidatorVadility(validator, isValid) {
    if (isValid) {
      Vue.delete(this.$error, validator);
    } else {
      Vue.set(this.$error, validator, true);
    }
  }

  _setValidity(isValid) {
    this.$valid = isValid;
    this.$invalid = !isValid;
  }

  _setOldValue(value) {
    this._data._oldValue = value;
  }

  _setDirty(value) {
    if (this.$pristine && value !== this._data._oldValue) {
      this.$dirty = true;
      this.$pristine = false;
      this._data._oldValue = value;
    }
  }

  _valid(value, attrs, el, formConfig) {
    let errNum = 0;
    Object.keys(attrs).forEach(props => {
      if (validators[props]) {
        let isTrue = validators[props](value, attrs[props]);
        this._setValidatorVadility(props, isTrue);
        !isTrue && errNum++;
      }
    });
    const customValidators = attrs.validators;
    if (customValidators) {
      Object.keys(customValidators).forEach(props => {
        let isTrue = customValidators[props](value);
        this._setValidatorVadility(props, isTrue);
        !isTrue && errNum++;
      });
    }
    this._setValidity(errNum === 0);
    this._setOldValue(value);
    this._changeClass(el, formConfig);
  }
}

FieldState.prototype._data = {
  _oldValue: ''
};
