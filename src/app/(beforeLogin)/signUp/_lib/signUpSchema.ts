import { z } from "zod";

export const signUpSchema = z
  .object({
    id: z.string().min(6, '아이디는 최소 6글자여야 합니다.'),
    password: z.string().min(6, '패스워드는 최소 6글자여야합니다'),
    retypePassword: z.string(),
  })
  .refine((data) => data.password === data.retypePassword, {
    path: ['retypePassword'],
    message: '비밀번호가 같지 않습니다.',
  });