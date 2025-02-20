import NoticeItem from "./NoticeItem";

export default function NoticeList() {
  return (
    <div className="flex flex-col">
      {/* 알림 리스트 API 이후 map으로 NoticeItem 뿌리기 */}
      <NoticeItem time="6시간 전" user="김희찬님" />
      <NoticeItem time="1일 전" user="쏜애플님"/>
    </div>
  );
}
