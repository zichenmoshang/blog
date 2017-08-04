import {vueFormState, vueFormConfig} from '../providers';
import {getVModels, getClasses} from '../utils';
import {FieldState} from '../state';

export default {
  inject: {vueFormState, vueFormConfig},
  render(h) {
    const vnodes = getVModels(this.$slots.default);
    vnodes.forEach(nodes => {
      if (!nodes.data.directives) {
        nodes.data.directives = [];
      }
      nodes.data.directives.push({
        name: 'validate',
        value: {fieldState: this.fieldState, formConfig: this.vueFormConfig}
      });
    });
    let slots = [this.$slots.default];
    if (this.label) {
      const labelSlot = h('label', {
        class: 'z-form-label',
        style: {
          width: this.labelWidth || this.vueFormConfig.label.labelWidth
        },
        domProps: {
          innerHTML: this.label
        }
      });
      switch (this.labelPosition || this.vueFormConfig.label.position) {
        case 'left':
          slots.unshift(labelSlot);
          break;
        case 'right':
          slots.push(labelSlot);
          break;
      }
    }
    return h(this.vueFormConfig.formItemTag || 'div', {
      class: [this.className, 'z-form-item']
    }, slots);
  },
  props: {
    tag: String,
    name: {
      type: String,
      required: true
    },
    label: String,
    labelPosition: String,
    labelWidth: String,
    myProp: String
  },
  data() {
    return {
      fieldState: {}
    };
  },
  watch: {
    fieldState(state) {
      this.vueFormState._addControl(state);
      // Object.keys(state).forEach(props => {
      //   this.$set(this.vueFormState[this.name], props, state[props]);
      // });
      // debugger;
    }
  },
  computed: {
    className() {
      const c = this.vueFormConfig.fieldClasses;
      const s = this.fieldState;
      return getClasses(c, s);
    }
  },
  created() {
    this.$set(this.vueFormState, this.name, {});
    this.fieldState = new FieldState(this.name);
  }
};
