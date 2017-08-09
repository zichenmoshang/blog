import ZForm from './components/z-form';
import ZFormItem from './components/z-form-item';
import validate from './directive/validate';
import Emitter from '../../mixins/emitter';
import {vueFormConfig} from './providers';
import config from './config';
import {extend} from './utils';

class ZVaildtorBase {
  constructor(options) {
    const c = extend({}, config, options);
    this.provide = {
      [vueFormConfig]: c
    };
    this.components = {
      [c.formComponent]: ZForm,
      [c.formItemComponent]: ZFormItem
    };
    this.mixins = [Emitter];
    this.directives = {validate};
  }
}

export default class ZVaildtor extends ZVaildtorBase {
  static install(Vue, options) {
    Vue.mixin(new this(options));
  }
}
