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
      introduction: '활기찬 하루를 즐기는 친구',
      name: '민준',
      gender: '남',
      mbti: 'ENTP',
      friendType: 'A',
      volume: 75,
    },
    {
      id: 2,
      introduction: '조용히 사람을 챙기는 친구',
      name: '서연',
      gender: '여',
      mbti: 'INFJ',
      friendType: 'B',
      volume: 60,
    },
    {
      id: 3,
      introduction: '끊임없이 배우는 친구',
      name: '도윤',
      gender: '남',
      mbti: 'INTJ',
      friendType: 'C',
      volume: 85,
    },
    {
      id: 4,
      introduction: '평화로운 분위기를 만드는 친구',
      name: '하은',
      gender: '여',
      mbti: 'ISFJ',
      friendType: 'D',
      volume: 50,
    },
    {
      id: 5,
      introduction: '아이디어가 넘치는 친구',
      name: '지호',
      gender: '남',
      mbti: 'INFP',
      friendType: 'A',
      volume: 70,
    },
    {
      id: 6,
      introduction: '현실적인 조언을 주는 친구',
      name: '유진',
      gender: '여',
      mbti: 'ESTJ',
      friendType: 'B',
      volume: 65,
    },
    {
      id: 7,
      introduction: '창의적으로 생각하는 친구',
      name: '현우',
      gender: '남',
      mbti: 'ISTP',
      friendType: 'C',
      volume: 90,
    },
    {
      id: 8,
      introduction: '친구의 감정을 이해하는 친구',
      name: '예진',
      gender: '여',
      mbti: 'ENFP',
      friendType: 'D',
      volume: 55,
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
