import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className='w-full md:w-[20vw] flex justify-between gap-2 items-center border rounded-full p-2'>
      <input
        type="search"
        placeholder='Search'
        className='bg-transparent w-[90%] ml-3 border-none outline-none text-white'
        value={inputValue}
        onChange={handleInputChange}
      />
      <button
        className={`flex justify-center items-center p-2 rounded-full focus-within:border-none ${inputValue ? 'bg-white' : 'bg-zinc-700'}`}
      >
        <CiSearch size={25} />
      </button>
    </div>
  );
}

export default SearchBar;
