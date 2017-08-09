const compareStrategies = {
  equal: {
    msg: '值不相等',
    fn: (value, compareValue) => value === compareValue
  }
};

let compare = {
  msg: '',
  fn: (value, {compareValue, mode}) => {
    compare.msg = compareStrategies[mode]['msg'];
    return compareStrategies[mode]['fn'](value, compareValue);
  }
};

export default {
  compare,
  required: {
    msg: '必填选项',
    fn: value => !!value
  },
  maxlength: {
    msg: '长度不能超过',
    fn: (value, length) => {
      return value.length <= Number(length);
    }
  },
  minlength: {
    msg: '长度不能少于',
    fn: (value, length) => {
      return value.length >= Number(length);
    }
  },
  mobile: {
    msg: '正确的手机号码',
    fn: (value) => {
      return (/^[1|3|4|5|7|8|9]\d{10}/).test(value);
    }
  }
};
