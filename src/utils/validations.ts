export const emailValidations = [
  (val: string) => val.length > 0 || 'Email field can not be empty',
  (val: string) =>
    val.match(
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    ) || 'Please check if your email is correct',
];

export const passwordValidations = [
  (val: string) => val.length > 0 || 'Password field can not be empty',
  (val: string) =>
    val.match(/(?=.*?[A-Z])/) ||
    'Password should have min one upper case English Letter',
  (val: string) =>
    val.match(/(?=.*?[a-z])/) ||
    'Password should have min one lower case English Letter',
  (val: string) =>
    val.match(/(?=.*?[0-9])/) || 'Password should have min one number',
  (val: string) =>
    val.match(/(?=.*?[#?!@$%^&*-\.])/) ||
    'Password should have min one special character',
  (val: string) =>
    val.match(/.{8,}/) || 'Password should have min eight letters',
];
