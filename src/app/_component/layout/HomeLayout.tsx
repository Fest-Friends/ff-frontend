import Image from 'next/image';
import { HomeBackground } from '../home/HomeBackground';
import { HotConcertList } from '../home/HotConcertList';
export default function HomeLayout() {
  // 토큰 검사한다음 토큰 유무에 따라 레이아웃 다르게

  return (
    <div>
      <HomeBackground />
      <div className="mb-40 mt-10 px-5">
        <div className="flex items-center gap-2">
          <div className="text-xl font-semibold">현재 가장 핫한 콘서트</div>
          <Image
            src="/image/arrow_back_right.png"
            width={16}
            height={16}
            alt="현재 가장 핫한 콘서트"
            className="cursor-pointer"
          />
        </div>
        <div className="mt-5 flex w-full flex-col items-center">
          <HotConcertList />
        </div>
      </div>
    </div>
  );
}
