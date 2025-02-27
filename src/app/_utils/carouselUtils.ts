import { ReservedData } from "../(home)/_types/reservedData";


// 무한 캐러셀을 위한 양 끝에 복사된 아이템 추가 
export const setCarouselData = (arr : ReservedData[]) => {
  const dataStart = arr[0];
  const dataEnd = arr[arr.length - 1];
  return [dataEnd, ...arr, dataStart];
}; 
