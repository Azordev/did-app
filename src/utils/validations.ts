export const emailValidations = [
  (val: string) => val.length > 0 || 'El correo es requerido',
  (val: string) =>
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      val
    ) || 'El formato del correo es incorrecto',
];

export const memberCodeValidations = [
  (val: string) =>
    val.length === 10 || 'El codigo debe tener una longitud de 10 caracteres',
  (val: string) =>
    !!val.match(/^[A-Z]{2}[0-9]{8}$/i) || 'El formato del codigo es incorrecto',
];

export const passwordValidations = [
  (val: string) => val.length > 0 || 'La contraseña es requerida',
];

export const fullnameValidation = [
  (val: string) =>
    val.split(' ').length === 2 || 'Debe ingresar un nombre y un apellido',
];

export const dniValidation = [
  (val: string) =>
    val.length === 8 || 'El codigo debe tener una longitud de 8 caracteres',
  (val: string) =>
    !!val.match(/^[0-9]{8}$/i) || 'El formato del codigo es incorrecto',
];
