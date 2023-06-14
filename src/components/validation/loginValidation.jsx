import * as yup from 'yup';

const passwordCharacterValidationError = (str) => {
  return `Пароль повинен містити принаймні 1 ${str}`;
};

export const loginValidationSchema = yup.object({
  email: yup
  .string()
  .email('Eлектронна адреса має бути дійсною')
  .required('Eл. пошта є обов’язковим полем'),
  password: yup
  .string()
  .required('Пароль є обов\'язковим полем')
  .min(6, "Пароль повинен містити не менше 6 символів")
  .matches(/[0-9]/, passwordCharacterValidationError("цифру"))
  .matches(/[a-zа-я]/, passwordCharacterValidationError("маленьку літеру"))
  .matches(/[[A-ZА-Я]/, passwordCharacterValidationError("велику літеру")),
}).required();