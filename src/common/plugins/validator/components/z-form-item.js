import {vueFormState, vueFormConfig} from '../providers';
import {getVModels, getFieldClasses} from '../utils';
import {FieldState} from '../state';

export default {
  name: 'z-form-item',
  inject: {vueFormState, vueFormConfig},
  render(h) {
    const vnodes = getVModels(this.$slots.default);
    vnodes.forEach(nodes => {
      if (!nodes.data.directives) {
        nodes.data.directives = [];
      }
      nodes.data.directives.push({
        name: 'validate',
        value: {fieldState: this.vueFormState[this.name]}
      });
    });
    let slots = [this.$slots.default];
    if (this.label) {
      const labelSlot = h('label', {
        class: 'z-form-label',
        style: {
          width: this.labelWidth || this.vueFormConfig.label.width
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
    if (this.errMsg.show) {
      let left = this.labelWidth || this.vueFormConfig.label.width;
      if ((this.labelPosition || this.vueFormConfig.label.position) === 'right') {
        left = 0;
      }
      slots.push(
        h('p', {
          class: 'z-field-error',
          style: {
            left: left
          },
          domProps: {
            innerHTML: this.label + '是' + this.errMsg.text
          }
        })
      );
    }
    const labelClass = 'z-field--' + (this.labelPosition || this.vueFormConfig.label.position);
    return h(this.vueFormConfig.formItemTag || 'div', {
      class: ['z-field', this.className, labelClass]
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
      errMsg: {
        text: '',
        show: false
      }
    };
  },
  computed: {
    className() {
      const c = this.vueFormConfig.fieldClasses;
      const s = this.vueFormState[this.name];
      return getFieldClasses(c, s);
    }
  },
  created() {
    if (Object.keys(this.vueFormState).indexOf(this.name) !== -1) {
      throw new Error(this.name + ' already exists');
    }
    const fieldState = new FieldState(this.name);
    this.vueFormState._addControl(fieldState);
    this.$on('fieldChange', () => {
      this.$nextTick(() => {
        let state = this.vueFormState[this.name];
        this.errMsg.text = Object.values(state['$errMsg'])[0];
        this.errMsg.show = !!this.errMsg.text && (state.$dirty || this.vueFormState.$submit);
      });
    });
  }
};
