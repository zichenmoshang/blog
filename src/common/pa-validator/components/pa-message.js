/**
 * Created by weihualiang048 on 17/7/26.
 */

import {vueFormState, vueFormConfig} from '../providers';

export default {
  inject: {vueFormState, vueFormConfig},
  name: 'pa-message',
  render(h) {
    if (!this.name) {
      throw new Error('props name is necessary');
    }
    if (!this.vueFormState[this.name]) {
      throw new Error('props name is not in fileds');
    }
    let error = this.vueFormState[this.name]['$error'];
    let slots = [];
    Object.keys(this.$slots).forEach(name => {
      if (error[name] === false) {
        slots.push(this.$slots[name]);
      }
    });
    return h(this.vueFormConfig.msgTag, {}, slots);
  },
  props: {
    name: {
      type: String,
      required: true
    }
  }
};
