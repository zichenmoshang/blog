import {vueFormState, vueFormConfig} from '../providers';

export default {
  inject: {vueFormState, vueFormConfig},
  name: 'z-message',
  render(h) {
    if (!this.name) {
      throw new Error('props name is necessary');
    }
    if (!this.vueFormState[this.name]) {
      throw new Error('props name is not in fileds');
    }
    let error = this.vueFormState[this.name]['$error'];
    let slots = [];
    if (this.vueFormState[this.name]['$dirty'] || this.vueFormState['$submit']) {
      Object.keys(this.$slots).forEach(name => {
        if (error[name]) {
          slots.push(this.$slots[name]);
        }
      });
    }
    return h(this.vueFormConfig.msgTag, {
      class: 'z-msg'
    }, slots);
  },
  props: {
    name: {
      type: String,
      required: true
    }
  }
};
