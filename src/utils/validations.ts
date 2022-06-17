export const emailValidations = [
  (val: string) => val.length > 0 || 'Email field can not be empty',
  (val: string) =>
    val.match(
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    ) || 'Please check if your email is correct',
];

export const memberCodeValidations = [
  (val: string) =>
    val.length === 10 || 'El codigo debe tener una longitud de 10 caracteres',
  (val: string) =>
    val.match(/^[A-Z]{2}[0-9]{8}$/i) || 'El formato del codigo es incorrecto',
];

export const passwordValidations = [
  (val: string) => val.length > 0 || 'La contraseña',
];
