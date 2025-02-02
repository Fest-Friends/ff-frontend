'use client';
import HomeCarouselItem from './HomeCarouselItem';
import Image from 'next/image';
import { reservedData } from '@/app/_constants/reservedData';
import useCarousel from '../hooks/useCarousel';
const HomeCarousel = () => {
  const {
    CarouselData,
    nextHandler,
    prevHandler,
    setCurrent,
    current,
    transition,
    CAROUSEL_LENGTH,
  } = useCarousel(reservedData);
  return (
    <div>
      <h1 className="mx-5 mb-6 mt-10 text-2xl font-normal leading-[33.6px]">
        조만간 만나볼 <br /> <span className="font-semibold text-primary">아티스트</span>입니다.
      </h1>
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
              transform: `translateX(${(idx - current) * 107}%)`,
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
      <ul className="mt-5 flex w-full justify-center gap-2">
        {CarouselData.map((_, idx) =>
          idx !== 0 && idx !== CAROUSEL_LENGTH - 1 ? (
            <li
              key={idx}
              className={`h-2 w-5 cursor-pointer rounded-full ${idx === current ? 'bg-white' : 'bg-areaBg'}`}
              onClick={() => setCurrent(idx)}
            />
          ) : null
        )}
      </ul>
    </div>
  );
};

export default HomeCarousel;
