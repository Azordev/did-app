export const emailValidations = [
  (val: string) => val.length > 0 || 'Email field can not be empty',
  (val: string) =>
    val.match(
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    ) || 'Please check if your email is correct',
];

export const userCodeValidations = [
  (val: string) =>
    val.length === 10 || 'El codigo debe tener una longitud de 10 caracteres',
  (val: string) =>
    val.match(/^[A-Z]{2}[0-9]{8}$/i) || 'El formato del codigo es incorrecto',
];

export const passwordValidations = [
  (val: string) => val.length > 0 || 'La contraseña',
  (val: string) =>
    val.match(/(?=.*?[A-Z])/) ||
    'La contraseña debe tener mínimo una letra en mayúscula',
  (val: string) =>
    val.match(/(?=.*?[a-z])/) ||
    'La contraseña debe tener mínimo una letra en minúscula',
  (val: string) =>
    val.match(/(?=.*?[0-9])/) || 'La contraseña debe tener mínimo un número',
  (val: string) =>
    val.match(/(?=.*?[#?!@$%^&*-\.])/) ||
    'La contraseña debe tener mínimo un carácter especial',
  (val: string) =>
    val.match(/.{8,}/) || 'La contraseña debe tener mínimo ocho letras',
];
