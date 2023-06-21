import * as yup from 'yup';

const passwordCharacterValidationError = (str: string) => {
  return `Пароль повинен містити принаймні 1 ${str}`;
};

export const signupValidationSchema = yup.object({
  firstName: yup.string().required('Ім\'я є обов’язковим полем'),
  lastName: yup.string().required('Прізвище є обов’язковим полем'),
  email: yup
  .string()
  .email('Eлектронна адреса має бути дійсною')
  .required('Eл. пошта є обов’язковим полем'),
  password: yup
  .string()
  .required('Пароль є обов’язковим полем')
  .min(6, "Пароль повинен містити не менше 6 символів")
  .matches(/[0-9]/, passwordCharacterValidationError("цифру"))
  .matches(/[a-zа-я]/, passwordCharacterValidationError("маленьку літеру"))
  .matches(/[[A-ZА-Я]/, passwordCharacterValidationError("велику літеру")),
  confirmPassword: yup.string().oneOf([yup.ref('password'), ''], "Паролі не збігаються"),
}).required();