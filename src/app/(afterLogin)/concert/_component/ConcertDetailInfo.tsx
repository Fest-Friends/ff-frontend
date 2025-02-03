'use client'
import React from 'react';
import Image from 'next/image';
import Button from '@/app/_component/ui/Button';
import InfoItem from './InfoItem';
import { useParams } from 'next/navigation';
import { concertItemData } from '@/app/_constants/concertItemData';
export const findConcertItemById = (id:number) => {
  return concertItemData.find((item) => item.id === id);
};
const ConcertDetailInfo = () => {
  const {id} = useParams();
  const data = findConcertItemById(Number(id));
  console.log(data);
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
          <p className="text-base text-textLess">{data!.location}</p>
          <p className="text-xl font-semibold text-white">{data!.name}</p>
        </div>
        <div className="mb-12 mt-5 grid gap-2">
          <InfoItem title="장소" content={data!.location} />
          <InfoItem title="공연기간" content={data!.period} />
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
