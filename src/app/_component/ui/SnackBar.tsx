interface SnackBarProps {
  text?: string;
}

export default function Button({ text }: SnackBarProps) {
  return (
    <div className="fixed bottom-[40px] w-snack bg-areaBg flex justify-between items-center p-4 rounded-lg shadow-snack">
      <p className="text-sm">{text}</p>

      {/* 해야할 행동 변수화 */}
      <p className="text-sm text-textLess">친구보기</p>
    </div>
  );
}
