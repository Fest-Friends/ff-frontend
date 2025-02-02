"use client"; 
import { setCarouselData } from "@/app/_utils/carouselUtils";
import { useState } from "react";
import { ReservedData } from "../(home)/_types/reservedData";



const useCarousel = ( reservedData : ReservedData[])=> {

  const CarouselData = setCarouselData(reservedData);

   const CAROUSEL_LENGTH = CarouselData.length;
   const [current, setCurrent] = useState(1); // 현재 슬라이드 위치
   const [transition, setTransition] = useState(true);
 
   // n번째 슬라이드로 이동
   const moveToNthSlide = (n : number) => {
     setTransition(false); // 트랜지션 비활성화
     setCurrent(n); // 현재 슬라이드 위치를 업데이트
     setTimeout(() => {
       setTransition(true); // 트랜지션 복원
     }, 50); // 약간의 딜레이를 추가
   };
 
   // 다음 슬라이드로 이동
   const nextHandler = () => {
     const currentItem = current + 1;
     setCurrent(currentItem);
     if (current === CAROUSEL_LENGTH - 2) {
       setTimeout(() => {
         moveToNthSlide(1); // 첫 번째 실제 아이템으로 이동
       }, 500); // 트랜잭션이 끝난 후 순간 이동하도록
     }
   };
 
   // 이전 슬라이드로 이동
   const prevHandler = () => {
     const currentItem = current - 1;
     setCurrent(currentItem);
 
     if (currentItem === 0) {
       setTimeout(() => {
         moveToNthSlide(CAROUSEL_LENGTH - 2); // 마지막 실제 아이템으로 이동
       }, 500); //
     }
   };


   return {CarouselData ,nextHandler  , prevHandler  ,   setCurrent,current ,transition ,CAROUSEL_LENGTH };
};

export default useCarousel;