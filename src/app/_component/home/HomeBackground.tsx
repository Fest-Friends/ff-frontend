import Button from "../ui/Button";

export function HomeBackground() {


  return (
    <div className="flex w-full flex-col items-center gap-6 bg-home bg-cover bg-no-repeat px-5 py-20 text-sm leading-[19.6px]">
    {/* 타이틀과 서브타이틀 한 번 그룹핑 */}
    <div className="w-full flex-col flex gap-1 text-center">
      <h1 className="text-2xl leading-[33.6px]">
        공연 <span className="font-semibold text-primary">같이 볼 프렌즈</span>가 필요한가요?
      </h1>
      <h2 className="text-textLess">공연을 위한 나만의 페스트프렌즈를 찾아보세요!</h2>
    </div>
  
    {/* 버튼 DIV 상위에서 gap-6을 통해 제목과 버튼 두 콘텐츠 간격을 조정 */}
    <div className="justify-center flex w-full">
      <Button variant="default" width="111px" text="프렌즈 찾기" />
    </div>
  </div>
  )
}