import Button from '@/app/_component/ui/Button';
import Image from 'next/image';
import { findFriendById } from './_lib/dummyData';

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const data = findFriendById(Number(id));
  console.log(data?.friendType);

  // 서버 컴포넌트는 다름
  return (
    <div className="mt-[147px] flex w-full flex-col">
      <div className="relative flex w-full flex-col items-start bg-areaBg p-5">
        <Image
          src={`/image/friend_type_${data?.friendType}.png`}
          alt="상세정보 프렌즈 타입"
          width={168}
          height={213}
          className="absolute right-5 top-0 -translate-y-1/2 transform"
        />
        <div className="text-sm text-textLess">{data?.introduction}</div>
        <div className="text-2xl font-semibold">{data?.name}</div>
        <div className="mt-5 flex items-start gap-5 text-sm">
          <div className="flex flex-col gap-2 text-textLess">
            <div>성별</div>
            <div>음악 취향</div>
            <div>감상 타입</div>
            <div>MBTI</div>
          </div>
          <div className="flex flex-col gap-2">
            <div>{data?.gender}</div>
            <div>{data?.taste}</div>
            <div>{data?.applicationType}</div>
            <div>{data?.mbti}</div>
          </div>
        </div>
        <div className="mt-12 flex w-full items-end justify-between gap-4">
          <div className="text-base">
            <span className="text-[40px] font-semibold text-primary">{data?.volume}</span> Volume
          </div>
          <div className="h-full max-w-[300px] flex-1">
            <Button text="공연 친구 맺기" />
          </div>
        </div>
      </div>
    </div>
  );
}
