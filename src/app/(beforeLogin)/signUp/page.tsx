'use client';
import Input from '@/app/_component/ui/Input';
import Button from '@/app/_component/ui/Button';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, Controller } from 'react-hook-form';
import { signUpSchema } from './_lib/signUpSchema';
import { fetchSignUp } from './_lib/fetchSignUp';
import { fetchLogin } from '../login/_lib/fetchLogin';
import { useRouter } from 'next/navigation';

export default function SignUp() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    mode: 'onChange',
  });
  const router = useRouter();

  const onSubmit = async (data: z.infer<typeof signUpSchema>) => {
    const {
      success: signUpSuccess,
      message: signUpMessage,
    }: { success: boolean; message?: string; data: null } = await fetchSignUp(data);

    if (signUpSuccess) {
      alert('가입되었습니다! Fest Friends에 오신 걸 환영합니다!');
      const { username, password } = data;
      const { success: loginSuccess, message: loginMessage } = await fetchLogin({ username, password });

      if (loginSuccess) {
        router.push('/');
      } else {
        alert(loginMessage);
      }
    } else {
      alert(signUpMessage);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col px-5 pt-20">
      <div className="flex flex-col gap-6">
        {/* 아이디 */}
        <div className="flex flex-col gap-3">
          <div className="ml-1 text-base font-semibold text-white">아이디</div>
          <Controller
            name="username"
            control={control}
            render={({ field }) => (
              <Input
                type="text"
                placeholder="아이디를 입력하세요."
                value={field.value || ''} // 빈 문자열로 초기화
                onChange={field.onChange}
              />
            )}
          />
          {errors.username && <div className="text-red-400">{errors.username.message}</div>}
        </div>

        {/* 비밀번호 */}
        <div className="flex flex-col gap-3">
          <div className="ml-1 text-base font-semibold text-white">비밀번호</div>
          <div className="flex flex-col gap-2">
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <Input
                  type="password"
                  role="password"
                  placeholder="비밀번호를 입력하세요."
                  isImg
                  value={field.value || ''} // 빈 문자열로 초기화
                  onChange={field.onChange}
                />
              )}
            />
            {errors.password && <div className="text-red-400">{errors.password.message}</div>}

            <Controller
              name="retypePassword"
              control={control}
              render={({ field }) => (
                <Input
                  type="password"
                  role="password"
                  placeholder="비밀번호를 한 번 더 입력하세요."
                  isImg
                  value={field.value || ''} // 빈 문자열로 초기화
                  onChange={field.onChange}
                />
              )}
            />
            {errors.retypePassword && <div className="text-red-400">{errors.retypePassword.message}</div>}
          </div>
        </div>
      </div>

      <Button text="가입하기" mt="48px" />
    </form>
  );
}
