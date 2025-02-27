'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

interface InputProps {
  type?: string;
  placeholder: string;
  value: string; // Controlled Component로 변경
  role?: 'search' | 'password';
  isImg?: boolean; // Input에 이미지 추가 여부 ex)password, search
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // 필수로 변경
}

export default function Input({
  type = 'text',
  placeholder,
  value,
  role,
  onChange,
  isImg = false,
}: InputProps) {
  const [isClient, setIsClient] = useState(false);

  // Input Focus Border Control
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  // Show Password Control
  const [inputType, setInputType] = useState(type);
  const togglePWVisibility = () => {
    setInputType((prev) => (prev === 'password' ? 'text' : 'password'));
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    isClient && (
      <div
        className={`flex w-full items-center gap-3 rounded-xl border bg-areaBg px-4 py-3 ${
          isFocused ? 'border-primary' : 'border-transparent'
        }`}
      >
        <input
          onChange={onChange}
          type={inputType}
          placeholder={placeholder}
          value={value || ''} // 항상 value를 정의된 상태로 유지
          onFocus={handleFocus}
          onBlur={handleBlur}
          className="placeholder:placeholder w-full bg-transparent text-sm text-white focus:outline-none"
        />

        {isImg && (
          <Image
            width={20}
            height={20}
            src={
              role === 'search'
                ? '/image/search.png'
                : inputType === 'password'
                ? '/image/visibility_off.png'
                : '/image/visibility.png'
            }
            alt="toggle visibility"
            onClick={role === 'password' ? togglePWVisibility : undefined}
            className={role === 'password' ? 'cursor-pointer' : ''}
          />
        )}
      </div>
    )
  );
}
