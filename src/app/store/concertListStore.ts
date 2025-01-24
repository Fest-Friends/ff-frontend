import { create } from "zustand";

interface concertItemType {
  id: number,
  name: string,
  location:  string,
  period:  string,
  imageUrl:  string,
  likes:number,
  searchFriends: number,
  isLike: boolean
}

interface concertListStoreType {
  data : concertItemType[]
  searchData : concertItemType[]
  actions: {
    setList: (newState: concertItemType[]) => void;
    setSearchList: (inputValue: string) => void;
  };
}

export const useConcertListStore = create<concertListStoreType>((set) => ({
  data : [],
  searchData : [],
  actions: {
    setList: (newState) => {
      set(() => ({ data:  newState ,  searchData  : newState}));
    },
    setSearchList : (inputValue) => {
      set((prevState) => ({
        searchData:  inputValue ? prevState.data.filter((item) =>
          item.name.toLowerCase().includes(inputValue.toLowerCase())
        ) : prevState.data,
      }));
    },
  }
}));
