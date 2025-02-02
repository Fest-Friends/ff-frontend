import React from 'react';
import Image from 'next/image';
import Button from '@/app/(home)/_component/ui/Button';
import InfoItem from './InfoItem';

const ConcertDetailInfo = () => {
  return (
    <div className="relative h-fit w-full bg-areaBg">
      <Image
        width={168}
        height={222}
        src="/image/example.png"
        alt="포스터"
        className="absolute left-5 top-[-111px] rounded-lg object-cover"
      />
      <div className="flex justify-end gap-4 p-5">
        <Image className="flex-shrink-0" width={24} height={24} src="/image/share.png" alt="공유" />
        <Image
          className="flex-shrink-0"
          width={24}
          height={24}
          src="/image/share.png"
          alt="좋아요"
        />
      </div>
      <div className="px-5 pb-4 pt-16">
        <div className="flex flex-col gap-1">
          <p className="text-base text-textLess">블루스퀘어 마스터카드홀</p>
          <p className="text-xl font-semibold text-white">소란 winter concert ‘BE MY LIGHT’</p>
        </div>
        <div className="mb-12 mt-5 grid gap-2">
          <InfoItem title="장소" content="블루스퀘어 마스터카드홀" />
          <InfoItem title="공연기간" content="2024.12.27 ~ 2024.12.31" />
          <InfoItem title="공연시간" content="120분" />
        </div>
        <div className="flex justify-between gap-4">
          <Button text="공연 친구 찾기" width="66%" />
          <Button text="알림 등록" width="33%" variant="secondary" />
        </div>
      </div>
    </div>
  );
};

export default ConcertDetailInfo;
