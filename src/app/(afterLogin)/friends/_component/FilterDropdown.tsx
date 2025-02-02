'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const FilterDropdown = ({ title, categorys }: { title: string; categorys: string[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOutsideClick = (e: MouseEvent) => {
    const target = e.target as Element;
    if (target.closest('#dropdownButton') || target.closest('#dropdownMenu')) return;
    setIsOpen(false);
  };

  React.useEffect(() => {
    window.addEventListener('click', handleOutsideClick);
    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div className="relative flex flex-col rounded-xl">
      {/* Dropdown Button - Text Only */}
      <button
        id="dropdownButton"
        type="button"
        className={`flex items-center gap-2 ${isOpen ? 'rounded-t-xl bg-areaBg' : 'rounded-xl'} border-2 border-areaBg py-3 pl-5 pr-4 hover:bg-areaBg`}
        onClick={toggleDropdown}
      >
        <div>{title}</div>
        <Image
          src={'/image/arrow_down.png'}
          alt="조건 필터링"
          width={12}
          height={12}
          className={`transform object-contain transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Dropdown Menu - Text Only */}
      {isOpen && (
        <div
          id="dropdownMenu"
          className="absolute top-full flex w-full flex-1 flex-col rounded-b-xl bg-areaBg"
        >
          {/* Regular Link */}
          {categorys?.map((category) => (
            <div key={category} className="flex flex-1 py-3 pl-5 text-sm">
              {category}
            </div>
          ))}

          {/* Active Link */}
          {/* <a
              href="#"
              className="block px-4 py-2 text-sm text-indigo-500 font-medium bg-indigo-50 dark:bg-indigo-500/10"
            >
              Products
            </a> */}

          {/* Regular Link */}
          {/* <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              Services
            </a> */}

          {/* Disabled Link */}
          {/* <span className="block px-4 py-2 text-sm text-gray-400 dark:text-gray-500 cursor-not-allowed">
              Enterprise (Soon)
            </span>

            <hr className="my-1 border-gray-200 dark:border-gray-700" /> */}

          {/* Danger Link */}
          {/* <a
              href="#"
              className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              Log out
            </a> */}
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
