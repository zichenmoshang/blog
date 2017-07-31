/**
 * Created by weihualiang048 on 17/7/17.
 */
import {vueFormState, vueFormConfig} from '../providers';
import {getVModels, getClasses} from '../utils';
import {FormState} from '../state';

export default {
  render(h) {
    let vnodes = getVModels(this.$slots.default);
    vnodes.forEach(nodes => {
      if (!nodes.data.directives) {
        nodes.data.directives = [];
      }
      nodes.data.directives.push({name: 'validate', value: {formState: this.state, fn: this.formState, formConfig: this.vueFormConfig}});
    });
    return h(this.vueFormConfig.formTag, {
      attrs: {
        'novalidate': '',
        'autocomplete': 'off'
      },
      class: this.className
    }, this.$slots.default);
  },
  inject: {vueFormConfig},
  provide() {
    return {
      [vueFormState]: this.state
    };
  },
  props: {
    tag: String,
    state: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      formState: {}
    };
  },
  computed: {
    className() {
      const c = this.vueFormConfig.formClasses;
      const s = this.state;
      return getClasses(c, s);
    }
  },
  created() {
    this.formState = new FormState();
    Object.keys(this.formState).forEach((key) => {
      this.$set(this.state, key, this.formState[key]);
    });
  }
};
