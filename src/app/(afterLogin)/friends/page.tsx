import { FriendComponent } from './_component/FriendComponent';
import { Friend } from '../_types/friends';
import FilterDropdown from './_component/FilterDropdown';
import Link from 'next/link';
export default function Page() {
  const dummyFilters: { title: string; categorys: string[] }[] = [
    { title: '성별', categorys: ['무관', '남성', '여성'] },
    { title: '감상 타입', categorys: ['무관', '감상해요!', '즐겨요!'] },
  ];
  const dummyFriends: Friend[] = [
      {
        id: 1,
        introduction: "활기찬 하루를 즐기는 친구",
        name: "민준",
        gender: "남",
        mbti: "ENTP",
        friendType: "A",
        volume: 75,
      },
      {
        id: 2,
        introduction: "책과 커피를 좋아하는 낭만주의자",
        name: "지우",
        gender: "여",
        mbti: "INFJ",
        friendType: "B",
        volume: 50,
      },
      {
        id: 3,
        introduction: "여행과 모험을 사랑하는 열정가",
        name: "준호",
        gender: "남",
        mbti: "ESTP",
        friendType: "A",
        volume: 80,
      },
      {
        id: 4,
        introduction: "편안한 분위기를 좋아하는 온화한 사람",
        name: "서연",
        gender: "여",
        mbti: "ISFP",
        friendType: "C",
        volume: 30,
      },
      {
        id: 5,
        introduction: "유머와 에너지로 가득 찬 분위기 메이커",
        name: "도윤",
        gender: "남",
        mbti: "ENFP",
        friendType: "B",
        volume: 90,
      },
      {
        id: 6,
        introduction: "섬세하고 따뜻한 마음을 가진 조언자",
        name: "하윤",
        gender: "여",
        mbti: "INFJ",
        friendType: "C",
        volume: 45,
      },
      {
        id: 7,
        introduction: "디테일을 놓치지 않는 분석가",
        name: "지호",
        gender: "남",
        mbti: "INTJ",
        friendType: "A",
        volume: 60,
      },
      {
        id: 8,
        introduction: "자연 속에서 에너지를 충전하는 힐링러",
        name: "유진",
        gender: "여",
        mbti: "ISFJ",
        friendType: "B",
        volume: 40,
      },
      {
        id: 9,
        introduction: "강렬한 열정을 가진 예술가",
        name: "승현",
        gender: "남",
        mbti: "ENTP",
        friendType: "C",
        volume: 85,
      },
      {
        id: 10,
        introduction: "공감과 소통을 중시하는 리더",
        name: "수아",
        gender: "여",
        mbti: "ENFJ",
        friendType: "A",
        volume: 70,
      },
    ];

  return (
    <div className="w-full px-5 py-10">
      <div className="mb-6 text-2xl">
        나의 성격과 맞는
        <br />
        <span className="font-semibold text-primary">공연 프렌즈</span>를 찾아보세요!
      </div>
      <div className="flex w-full cursor-pointer justify-start gap-4 py-5 text-sm text-textLess">
        {dummyFilters.map((filter) => (
          <FilterDropdown key={filter.title} title={filter.title} categorys={filter.categorys} />
        ))}
      </div>
      <div className="flex flex-col items-center gap-4">
        {dummyFriends.map((friend) => (
          <Link className="flex w-full items-end" href={`friends/${friend.id}`} key={friend.id}>
            <FriendComponent
              key={friend.id}
              id={friend.id}
              introduction={friend.introduction}
              name={friend.name}
              gender={friend.gender}
              mbti={friend.mbti}
              friendType={friend.friendType}
              volume={friend.volume}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
