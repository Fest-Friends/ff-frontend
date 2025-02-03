'use client';

import { useParams, usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getTitleFromSlug } from '@/app/_utils/getTitleFromSlug';

function headerType(pathname: string): string {
  const logoHeader = ['/', '/concert'];
  if (logoHeader.includes(pathname)) {
    return 'logo';
  }
  return 'title';
}

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();
  const [isClient, setIsclient] = useState(false);
  const [isDynamic,setIsDynamic] = useState<boolean>(Object.keys(params).length !== 0);
  const [title,setTitle] = useState<string>('');
  useEffect(() => {
    setIsclient(true);
  }, []);
  useEffect(() => {
    setIsDynamic(Object.keys(params).length !== 0)
  },[params]);
  useEffect(() => {
    if (headerType(pathname) === 'title') {
      setTitle(getTitleFromSlug(pathname, isDynamic));     
    }
  },[pathname,isDynamic])
  return (
    isClient && (
      <div className="sticky top-0 z-50 flex w-full items-center justify-between bg-bg p-5">
        {headerType(pathname) === 'logo' && (
          <>
            <Link href="/">
              <Image
                width={94.79}
                height={25}
                alt="홈페이지로 이동"
                src="/image/logo.png"
                className="cursor-pointer"
              />
            </Link>
          </>
        )}
        {headerType(pathname) === 'title' && (
          <>
            <div
              onClick={() => {
                router.back();
              }}
            >
              <Image
                width={20}
                height={20}
                alt="뒤로가기"
                src="/image/arrow_back.png"
                className="cursor-pointer"
              />
            </div>
            <div className="text-lg text-white md:text-xl">
              {title}
            </div>
            </>
        )}
        {/* 추후 메뉴 디자인 만들어지면 메뉴 컴포넌트로 대체 */}
        <Image width={24} height={24} alt="메뉴" src="/image/menu.png" className="cursor-pointer" />
      </div>
    )
  );
}
