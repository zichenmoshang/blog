import {vueFormState, vueFormConfig, formBridge} from '../providers';
import {getClasses, extend} from '../utils';

export default {
  render(h) {
    return h(this.vueFormConfig.formTag, {
      attrs: {
        'novalidate': '',
        'autocomplete': 'off'
      },
      class: ['z-form', this.className]
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
    },
    labelPosition: String,
    labelWidth: String
  },
  data() {
    return {};
  },
  computed: {
    className() {
      const c = this.vueFormConfig.formClasses;
      const s = this.state;
      return getClasses(c, s);
    }
  },
  created() {
    const formState = {
      $dirty: false,
      $pristine: true,
      $valid: true,
      $invalid: false,
      $submit: false,
      _setSubmit: () => {
        this.$set(this.state, '$submit', true);
      },
      _setValidity: () => {
        let isValid = true;
        for (let field of Object.values(this.state)) {
          if (Object.prototype.toString.call(field) === '[object Object]' && field.$invalid) {
            isValid = false;
            break;
          }
        }
        this.$set(this.state, '$valid', isValid);
        this.$set(this.state, '$invalid', !isValid);
      },
      _setDirty: () => {
        for (let field of Object.values(this.state)) {
          if (Object.prototype.toString.call(field) === '[object Object]' && field.$dirty) {
            this.$set(this.state, '$dirty', true);
            this.$set(this.state, '$pristine', false);
            break;
          }
        }
      },
      _addControl: (ctrl) => {
        this.$set(this.state, ctrl.$name, ctrl);
      }
    };
    Object.keys(formState).forEach((key) => {
      this.$set(this.state, key, formState[key]);
    });
    formBridge.$on('fieldChange', () => {
      this.state._setValidity();
      this.state._setDirty();
    });
    this.setLabel();
  },
  methods: {
    setLabel() {
      const label = {
        position: this.labelPosition,
        width: this.labelWidth
      };
      this.vueFormConfig.label = extend({}, label, this.vueFormConfig.label);
    }
  }
};
