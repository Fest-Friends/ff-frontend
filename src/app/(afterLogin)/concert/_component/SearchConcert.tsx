'use client';
import Input from '@/app/_component/ui/Input';
import { useConcertListStore } from '@/app/_store/concertListStore';
import React, { useState } from 'react';

const SearchConcert = () => {
  const { actions } = useConcertListStore();
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    actions.setSearchList(value);
  };

  return (
    <div className="w-full px-5 py-6">
      <Input
        type="text"
        role="search"
        placeholder="콘서트 이름을 검색하세요."
        isImg
        onChange={handleInputChange}
        value={inputValue}
      />
    </div>
  );
};

export default SearchConcert;
