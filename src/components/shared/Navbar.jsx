import React, { useState } from 'react';
import CustomeButton from "./CustomeButton";
import SearchBar from '../website/SearchBar';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const navList = ['Learn', 'Blogs', 'Events', 'About'];

    const handleClick = () => {
        navigate('/sign-in')
    }
    return (
        <nav className="w-full md:w-[85%] flex justify-between items-center my-5 p-2 bg-zinc mx-auto rounded-full">
            <h1 className='text-2xl text-white ml-5'>useCoursia</h1>  
            <div className="flex items-center justify-between w-full md:w-auto">
                <ul className={`flex flex-col md:flex-row justify-between items-center gap-3 md:gap-10 absolute md:relative bg-zinc-900 md:bg-transparent p-4 md:p-0 rounded-lg md:rounded-none ${menuOpen ? 'top-16' : '-top-full'} transition-all duration-300`}>
                    {navList.map((item) => (
                        <li key={item} className="w-full md:w-auto">
                            <a href={`#${item.toLowerCase()}`} className="text-white text-lg cursor-pointer hover:text-blue transition duration-300 block text-center md:inline">
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
            <div className="hidden md: flex-center gap-3 w-full md:w-auto">
                <SearchBar />
                <CustomeButton title="Sign in" handleClick={handleClick}/>
            </div>
        </nav>
    );
}

export default Navbar;
