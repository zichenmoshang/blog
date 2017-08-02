export default {
  required(value) {
    return !!value;
  },
  maxlength(value, length) {
    return value.length <= Number(length);
  },
  minlength(value, length) {
    return value.length >= Number(length);
  },
  mobile(value) {
    return (/^[1|3|4|5|7|8|9]\d{10}/).test(value);
  }
};
