import Image from 'next/image';

interface NoticeItemProps {
  time: string;
  user: string;
}

const NoticeItem = ({ time, user }: NoticeItemProps) => {
  return (
    <div className="flex flex-col py-5 border-b border-areaBg">
      <div className='flex justify-between items-center'>
        <p className='text-sm text-primary'>함께 공연 보실래요?</p>
        <p className='text-sm text-textMuted'>{time}</p>
      </div>

      <div className='mt-2 mb-4 flex flex-col gap-1'>
        <p className='text-base font-semibold'>공연 제안 요청이 들어왔어요.</p>
        <p className='text-sm text-textLess'>{user}께서 함께 공연을 보자고 연락이 왔어요. 받으실건가요?</p>
      </div>

      <div className='flex justify-between items-center'>
        <div className='flex items-center gap-1'>
          <p className='text-sm text-textLess'>자세히 보기</p>
          <Image src="/image/arrow_back_right.png" alt="arrow-right" width={12} height={12} />
        </div>
        <div className='flex items-center gap-6'>
          <p className='text-sm font-semibold text-textLess'>거절하기</p>
          <p className='text-base font-semibold text-primary'>수락하기</p>
        </div>
      </div>
    </div>
  );
}

export default NoticeItem;