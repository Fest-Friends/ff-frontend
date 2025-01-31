'use client';
import HomeCarouselItem from './HomeCarouselItem';
import Image from 'next/image';
import { reservedData } from '@/app/_constants/reservedData';
import useCarousel from '../hooks/useCarousel';
const HomeCarousel = () => {
  const { CarouselData, nextHandler, prevHandler, current, transition } = useCarousel(reservedData);
  return (
    <div className="relative mx-auto flex h-[308px] max-w-[737px] justify-center overflow-hidden">
      {/* 이전 버튼 */}
      <Image
        src="/image/arrow_back.png"
        width={20}
        height={20}
        alt="이전"
        className="absolute left-4 top-[50%] z-10 cursor-pointer"
        onClick={prevHandler}
      />

      {/* 슬라이드 아이템 */}

      {CarouselData.map((item, idx) => (
        <HomeCarouselItem
          key={idx}
          id={item.id}
          style={{
            transform: `translateX(${(idx - current) * 110}%)`,
            transition: transition ? 'transform 500ms ease-in-out' : 'none',
          }}
          imageUrl={item.imageUrl}
          name={item.name}
          period={item.period}
          inspectionPeriod={item.inspectionPeriod}
          friends={item.friends}
        />
      ))}

      {/* 다음 버튼 */}

      <Image
        src="/image/arrow_back_right.png"
        width={20}
        height={20}
        alt="이후"
        className="absolute right-4 top-[50%] z-10 cursor-pointer"
        onClick={nextHandler}
      />
    </div>
  );
};

export default HomeCarousel;
