import React, { useState } from 'react';
import CustomeButton from "./CustomeButton";
import SearchBar from '../SearchBar';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const navList = ['Learn', 'Blogs', 'Events', 'About'];

    return (
        <nav className="w-full md:w-[85%] flex justify-between items-center my-5 p-3 bg-zinc-900 mx-auto rounded-full">
            <h1 className='text-3xl text-white ml-5'>Eduka</h1>  
            <div className="flex items-center justify-between w-full md:w-auto">
                <ul className={`flex flex-col md:flex-row justify-between items-center gap-3 md:gap-10 absolute md:relative bg-zinc-900 md:bg-transparent p-4 md:p-0 rounded-lg md:rounded-none ${menuOpen ? 'top-16' : '-top-full'} transition-all duration-300`}>
                    {navList.map((item) => (
                        <li key={item} className="w-full md:w-auto">
                            <a href={`#${item.toLowerCase()}`} className="text-white text-xl cursor-pointer hover:text-blue-400 transition duration-300 block text-center md:inline">
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="md:hidden flex items-center">
                    <button onClick={() => setMenuOpen(!menuOpen)} className="text-white text-2xl">
                        {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
                    </button>
                </div>
            </div>
            <div className="hidden md:flex gap-3 items-center justify-center w-full md:w-auto">
                <SearchBar />
                <CustomeButton title="Sign in" />
            </div>
        </nav>
    );
}

export default Navbar;
