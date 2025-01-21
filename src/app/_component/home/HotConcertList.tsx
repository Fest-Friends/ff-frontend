import CategoryItem from "@/app/_component/CategoryItem";
import { concertItemData } from "@/app/_constants/concertItemData";

export const HotConcertList =  () => (
  <>
  {concertItemData?.map((item,idx) => (
    <CategoryItem
      key={item.id}
      name={item.name}
      location={item.location}
      period={item.period}
      imageUrl={item.imageUrl}
      likes={item.likes}
      searchFriends={item.searchFriends}
      isLike={item.isLike}
      isFirst={idx===0}
    />
  ))}
  </>
)