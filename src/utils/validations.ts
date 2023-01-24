export const emailValidations = [
  (val: string) => val.length > 0 || 'El correo es requerido',
  (val: string) =>
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      val
    ) || 'El formato del correo es incorrecto',
];

export const memberCodeValidations = [
  (val: string) =>
    val.length === 10 || 'El código debe tener una longitud de 10 caracteres',
  (val: string) =>
    !!val.match(/^[A-Z]{2}[0-9]{8}$/i) || 'El formato del código es incorrecto',
];

export const passwordValidations = [
  (val: string) => val.length > 0 || 'La contraseña es requerida',
];

export const dniValidation = [
  (val: string) =>
    val.trim().length === 10 ||
    'El código debe tener una longitud de 10 caracteres',
  (val: string) =>
    !val.match(/\b\s+\b/g) || 'El formato del código es incorrecto',
];
