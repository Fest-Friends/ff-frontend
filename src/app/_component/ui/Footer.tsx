'use client';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const pathname = usePathname();
  const hideFooterPages = ['/login', '/signUp'];

  if (hideFooterPages.includes(pathname)) {
    return null;
  }

  return (
    <div className="flex flex-col gap-6 bg-areaBg px-5 py-6">
      <div className="flex items-center justify-between">
        <Image width={118} height={31} alt="푸터 로고" src="/image/logo.png" />
        <Link href="https://github.com/Fest-Friends">
          <Image
            width={28}
            height={28}
            alt="깃허브로 이동"
            src="/image/Github.png"
            className="cursor-pointer"
          />
        </Link>
      </div>

      {/* 푸터 정보 */}
      <div className="flex flex-col gap-1">
        <div className="flex text-sm text-textLess">
          <p className="w-[60px]">Project</p>
          <p className="mr-2">ㅣ</p>
          <p>GDGoc TUK 3기 Project</p>
        </div>

        <div className="flex text-sm text-textLess">
          <p className="w-[60px]">Member</p>
          <p className="mr-2">ㅣ</p>
          <p>Luke, Jenna, Dan, Jun, Ann</p>
        </div>

        <div className="flex text-sm text-textLess">
          <p className="w-[60px]">Period</p>
          <p className="mr-2">ㅣ</p>
          <p>24.11.01 - 25.03.04</p>
        </div>
      </div>

      <div>
        <hr className="mb-2 h-[1px] border-none bg-textMuted" />
        <p className="text-xs text-textMuted">Copyright © FestFriends All Rights Reserved.</p>
      </div>
    </div>
  );
}
