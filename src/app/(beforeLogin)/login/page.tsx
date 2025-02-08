'use client';
import Link from 'next/link';
import Input from '@/app/_component/ui/Input';
import Button from '@/app/_component/ui/Button';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { loginSchema } from './_lib/loginSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { fetchLogin } from './_lib/fetchLogin';
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();
  const { control, handleSubmit } = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    mode: 'onSubmit',
    defaultValues: {
      username: '', // 초기값 설정
      password: '',
    },
  });

  const onSubmit = async (data: z.infer<typeof loginSchema>) => {
    const response: { success: boolean; message?: string; data: null } = await fetchLogin(data);
    if (response.success) {
      router.push('/');
    } else {
      alert(response.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="px-5 pt-20 flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        {/* Username Input */}
        <Controller
          name="username"
          control={control}
          render={({ field }) => (
            <Input
              type="text"
              placeholder="아이디를 입력하세요."
              value={field.value || ''} // 빈 문자열로 초기화
              onChange={field.onChange} // react-hook-form 바인딩
            />
          )}
        />

        {/* Password Input */}
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
              onChange={field.onChange} // react-hook-form 바인딩
            />
          )}
        />
      </div>
      <Button text="로그인" />
      <div className="flex items-center text-sm gap-2 ml-1">
        <span className="text-textLess">아직 회원이 아니신가요?</span>
        <Link href="/signUp" className="text-primary font-semibold">
          회원가입
        </Link>
      </div>
    </form>
  );
}
