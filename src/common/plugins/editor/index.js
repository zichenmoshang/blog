import editor from './components/editor';
import config from './config';
import {extend} from './utils';

class ZEditorBase {
  constructor(options) {
    const c = extend({}, config, options);
    this.components = {
      [c.editorComponent]: editor
    };
  }
}

export default class ZEditor extends ZEditorBase {
  static install(Vue, options) {
    Vue.mixin(new this(options));
  }
};
