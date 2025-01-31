import React from 'react';
import Image from 'next/image';
interface HomeCarouselItemProps {
  id: number;
  name: string;
  imageUrl: string;
  period: string;
  inspectionPeriod: number;
  friends: boolean;
  style: {
    transform: string;
    transition: string;
    position: string;
  };
}

const HomeCarouselItem = ({
  id,
  style,
  name,
  imageUrl,
  period,
  inspectionPeriod,
  friends,
}: HomeCarouselItemProps) => {
  return (
    <div
      style={style}
      className={`absolute flex h-[308px] w-[230px] rounded-lg bg-gradient-to-b from-black/40 to-black/80 shadow-md`}
    >
      <Image src={imageUrl} alt="Background" className="rounded-lg object-cover opacity-50" fill />

      <div className="z-10 mb-2 flex w-full flex-col justify-between p-4">
        <div>
          <p className="mb-1 text-sm font-normal text-white">{period}</p>
          <p className="text-base font-medium text-white">{name}</p>
        </div>
        <div className="flex items-end justify-between">
          <p className="text-lg font-semibold text-white">
            {friends ? '친구와 함께해요' : '혼자 즐겨요'}
          </p>
          <div className="flex items-end">
            <p className="self-end text-[40px] font-semibold leading-none text-primary">
              {inspectionPeriod}
            </p>
            <p className="ml-1 text-base font-normal text-white">일전</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCarouselItem;
