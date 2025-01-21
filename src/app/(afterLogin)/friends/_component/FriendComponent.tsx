'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Friend } from '../../_types/friends';

export function FriendComponent({
  id,
  introduction,
  name,
  gender,
  mbti,
  friendType,
  volume,
}: Friend) {
  return (
    <div className="flex w-full items-end justify-between rounded-lg bg-areaBg p-4">
      <div className="flex flex-col gap-4">
        <div>
          <div className="text-sm text-textLess">{introduction}</div>
          <div className="flex items-center">
            <div className="text-xl font-semibold">{name}</div>
          </div>
        </div>
        <div className="flex gap-6 text-sm">
          <div className="flex flex-col gap-1">
            <div className="text-textLess">성별</div>
            <div>{gender}</div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="text-textLess">MBTI</div>
            <div>{mbti}</div>
          </div>
        </div>
        <div className="flex items-start gap-1">
          <Image
            src="/image/volume.png"
            width={28}
            height={28}
            className="object-contain align-middle"
            alt="프렌즈 볼륨"
          />
          <div className="text-[28px] font-medium leading-[24px] text-primary">{volume}</div>
        </div>
      </div>
      <Image
        src={`/image/friend_type_${friendType}.png`}
        alt="친구 타입"
        width={89}
        height={112}
        className="h-full"
      />
    </div>
  );
}
