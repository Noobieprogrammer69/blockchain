import { useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

import logo from '../../images/logo.png';

const NavbarItem = ({ title, classProps }) => {
  return (
    <li className={`mx-4 cursor-pointer ${classProps}`}>
      {title}
    </li>
  );
}

const Navbar = ({ setDarkTheme, darkTheme }) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className='w-full flex md:justify-center justify-between items-center dark:bg-gray-800 p-4'>
      <div className='md:flex-[0.5] flex-initial justify-center items-center'>
        <img src={logo} alt="logo" className='w-32 cursor-pointer' />
      </div>
      <ul className='text-black dark:text-white md:flex hidden list-none flex-row justify-between items-center flex-initial'>
        {["Market", "Exchange", "Tutorial", "Wallets"].map((item, index) => (
            <NavbarItem key={item + index} title={item} />
        ))}
         <button type="button" onClick={() => setDarkTheme(!darkTheme)} className="text-xl dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full px-2 py-1 hover:shadow-lg">{darkTheme ? '💡 Light' : '🌙 Dark'}</button>
        <li className='bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]'>
          Login
        </li>
      </ul>
      <div className='flex relative'>
          {toggleMenu 
            ? <AiOutlineClose fontSize={28} className='text-black md:hidden cursor-pointer' onClick={() => setToggleMenu(false)} />
            : <HiMenu fontSize={28} className='text-black md:hidden cursor-pointer' onClick={() => setToggleMenu(true)} />}
          {toggleMenu && (
            <ul
              className='z-10 fixed top-0 right-0 p-3 w-[100vw] h-2/7 shadow-2xl md:hidden list-none flex flex-col justify-center items-center rounded-md blue-glassmorphism text-black dark:text-white animate-slide-in'
            >
              <li className='text-xl w-full my-2'>
                <AiOutlineClose onClick={() => setToggleMenu(false)} />
              </li>
              <button type="button" onClick={() => setDarkTheme(!darkTheme)} className="text-xl dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full px-2 py-1 hover:shadow-lg">{darkTheme ? '💡 Light' : '🌙 Dark'}</button>
              {["Market", "Exchange", "Tutorial", "Wallets"].map((item, index) => (
                <NavbarItem key={item + index} title={item} classProps='my-2 text-lg' />
             ))}
            </ul>
          )}
      </div>
    </nav>
  )
}

export default Navbar