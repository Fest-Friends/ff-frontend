import Input from '@/app/_component/ui/Input';
import Button from '@/app/_component/ui/Button';

export default function SignUp() {
  return (
    <div className="flex flex-col px-5 pt-20">
      <div className="flex flex-col gap-6">
        {/* 아이디 */}
        <div className="flex flex-col gap-3">
          <div className="ml-1 text-base font-semibold text-white">아이디</div>
          <Input type="text" placeholder="아이디를 입력하세요." />
        </div>

        {/* 비밀번호 */}
        <div className="flex flex-col gap-3">
          <div className="ml-1 text-base font-semibold text-white">비밀번호</div>
          <div className="flex flex-col gap-2">
            <Input type="password" role="password" placeholder="비밀번호를 입력하세요." isImg />
            <Input
              type="password"
              role="password"
              placeholder="비밀번호를 한 번 더 입력하세요."
              isImg
            />
          </div>
        </div>
      </div>

      <Button text="가입하기" mt="48px" />
    </div>
  );
}
