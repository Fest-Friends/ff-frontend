interface ToastBarProps {
  text?: string;
}

export default function Button({ text }: ToastBarProps) {
  return (
    <div className="fixed bottom-[40px] w-snack bg-areaBg flex justify-between items-center p-4 rounded-lg shadow-snack">
      <p className="text-sm">{text}</p>
    </div>
  );
}
