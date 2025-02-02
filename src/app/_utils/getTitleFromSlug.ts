// // 타이틀 추출 함수수

export function getTitleFromSlug(pathname: string, isDynamic: boolean) {
  if (isDynamic) {
    let title = '';
    if (pathname.includes('concert')) title += '콘서트';
    if (pathname.includes('friends')) title += '프렌즈';
    title += ' 상세정보';
    return title;
  }
  const titles: Record<string, string> = {
    '/login': '로그인',
    '/signUp': '회원 가입',
    '/friends': '프렌즈 구하기',
  };
  return titles[pathname] || 'Default Title';
}
