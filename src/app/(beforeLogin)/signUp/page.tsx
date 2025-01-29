'use client';
import Input from '@/app/_component/ui/Input';
import Button from '@/app/_component/ui/Button';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

const schema = z
  .object({
    id: z.string().min(6, '아이디는 최소 6글자여야 합니다.'),
    password: z.string().min(6, '패스워드는 최소 6글자여야합니다'),
    checkPassword: z.string(),
  })
  .refine((data) => data.password === data.checkPassword, {
    path: ['checkPassword'],
    message: '비밀번호가 같지 않습니다.',
  });
type FormData = z.infer<typeof schema>;
export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: 'onChange',
  });
  const onSubmit = (data: FormData) => {
    const apiData = {id: data.id, password:data.password};
    console.log('Form Data:', apiData);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col px-5 pt-20">
      <div className="flex flex-col gap-6">
        {/* 아이디 */}
        <div className="flex flex-col gap-3">
          <div className="ml-1 text-base font-semibold text-white">아이디</div>
          <Input type="text" placeholder="아이디를 입력하세요." {...register('id')} />
          {errors.id && <div className="text-red-400"> {errors.id.message}</div>}
        </div>

        {/* 비밀번호 */}
        <div className="flex flex-col gap-3">
          <div className="ml-1 text-base font-semibold text-white">비밀번호</div>
          <div className="flex flex-col gap-2">
            <Input
              type="password"
              role="password"
              placeholder="비밀번호를 입력하세요."
              isImg
              {...register('password')}
            />
            {errors.password && <div className="text-red-400"> {errors.password.message}</div>}

            <Input
              type="password"
              role="password"
              placeholder="비밀번호를 한 번 더 입력하세요."
              isImg
              {...register('checkPassword')}
            />
            {errors.checkPassword && <div className="text-red-400"> {errors.checkPassword.message}</div>}
          </div>
        </div>
      </div>

      <Button text="가입하기" mt="48px" />
    </form>
  );
}
