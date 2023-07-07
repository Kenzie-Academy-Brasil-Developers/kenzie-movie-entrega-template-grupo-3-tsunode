import { z } from 'zod';
export const RegisterFormSchema = z
  .object({
    name: z.string().nonempty('O Nome é obrigatório'),
    email: z.string().nonempty('O E-mail é obrigatório'),

    password: z
      .string()
      .min(8, 'A senha deve conter no mínimo 8 caracteres')
      .regex(/(?=.*[A-Z])/, 'password must contain at least One Capital letter')
      .regex(/(?=.*[a-z])/, 'A senha deve conter um caracter minúsculo')
      .regex(/(?=.*[0-9])/, 'A senha deve conter um caracter maiúsculo')
      .regex(/(?=.*[!@#$%^&*])/, 'A senha deve conter um caracter especial'),

    confirmPassword: z.string().nonempty('Confirmação de senha é obrigatório'),
  })
  .refine(({ password, confirmPassword }) => confirmPassword === password, {
    message: 'ambas senhas devem ser idêntivas',
    path: ['confirmPassword'],
  });
