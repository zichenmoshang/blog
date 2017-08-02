import PaForm from './components/pa-form';
import PaMessage from './components/pa-message';
import validate from './directive/validate';
import {vueFormConfig} from './providers';
import config from './config';
import {extend} from './utils';

class PaVaildtorBase {
  constructor(options) {
    const c = extend({}, config, options);
    this.provide = {
      [vueFormConfig]: c
    };
    this.components = {
      [c.formComponent]: PaForm,
      [c.msgComponent]: PaMessage
    };
    this.directives = {validate};
  }
}

export default class PaVaildtor extends PaVaildtorBase {
  static install(Vue, options) {
    Vue.mixin(new this(options));
  }
}
