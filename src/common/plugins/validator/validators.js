export default {
  required: {
    msg: '必填选项',
    fn: (value) => {
      return !!value;
    }
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
