import React from 'react';
import Image from 'next/image';

interface CategoryItemProps {
  name: string;
  location: string;
  period: string;
  imageUrl: string;
  likes: number;
  searchFriends: number;
  isLike: boolean;
  isFirst?: boolean;
}

const CategoryItem = ({
  name,
  location,
  period,
  imageUrl,
  likes,
  searchFriends,
  isLike,
  isFirst,
}: CategoryItemProps) => {
  return (
    <div className={`border-areaBg flex w-full border-b py-4 ${
      isFirst ? 'pt-0' : ''
    }`}>
      <Image
        width={107}
        height={142}
        src={imageUrl}
        alt="포스터"
        className="mr-4 flex-shrink-0 rounded-lg object-cover"
      />
      <div className="flex flex-col justify-between">
        <div className='flex flex-col gap-1'>
          <p className="text-textLess text-sm">{location}</p>
          <p className="h-12 overflow-hidden text-base font-semibold text-white">{name}</p>
        </div>

        <div className='flex flex-col gap-1'>
          <p className="text-sm text-white">{period}</p>
          <div className="flex gap-3">
            <div className="flex items-center">
              <Image
                className="mr-1 flex-shrink-0"
                width={16}
                height={16}
                src={`/image/favorite_${isLike ? 'active' : 'deActive'}.png`}
                alt="좋아요"
              />
              <p className="text-textMuted text-sm"> {likes}</p>
            </div>

            <div className="flex items-center">
              <Image
                className="mr-1 flex-shrink-0"
                width={16}
                height={16}
                src="/image/person.png"
                alt="찾는친구인원수"
              />
              <p className="text-textMuted text-sm">{searchFriends}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
