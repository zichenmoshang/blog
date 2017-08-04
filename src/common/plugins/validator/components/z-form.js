import {vueFormState, vueFormConfig} from '../providers';
import {getClasses, extend} from '../utils';
import {FormState} from '../state';

export default {
  render(h) {
    return h(this.vueFormConfig.formTag, {
      attrs: {
        'novalidate': '',
        'autocomplete': 'off'
      },
      class: [this.className, 'z-form']
    }, this.$slots.default);
  },
  inject: {vueFormConfig},
  provide() {
    return {
      [vueFormState]: this.formState
    };
  },
  props: {
    tag: String,
    state: {
      type: Object,
      default() {
        return {};
      }
    },
    labelPosition: String,
    labelWidth: String
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
  watch: {
    formState(state) {
      Object.keys(state).forEach((key) => {
        this.$set(this.state, key, state[key]);
      });
    }
  },
  created() {
    this.formState = new FormState();
    this.setLabel();
  },
  methods: {
    setLabel() {
      const label = {
        position: this.labelPosition,
        width: this.labelWidth
      };
      this.vueFormConfig.label = extend({}, label, this.vueFormConfig.label);
    },
    submit() {
      this.formState._setSubmit.call(this.state);
    }
  }
};
