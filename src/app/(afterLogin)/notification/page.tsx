import NoticeList from "./_component/NoticeList";
import SnackBar from "@/app/_component/ui/SnackBar";
// import ToastBar from "@/app/_component/ui/ToastBar";

export default function Notification() {
  return (
    <div className="flex flex-col px-5 pt-5">
      <NoticeList />

      <SnackBar text="공연 제안을 수락했습니다."/>
      {/* <ToastBar text="공연 제안을 거절했습니다."/> */}
    </div>
  );
}
