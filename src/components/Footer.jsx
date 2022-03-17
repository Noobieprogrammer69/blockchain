import React from 'react';
import logo from '../../images/logo.png';

const Footer = () => {
  return (
    <div className='w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-welcome dark:bg-gradient-to-r from-gray-700 to-gray-900'>
      <div className='w-full flex sm:flex-row flex-col justify-between items-center my-4'>
        <div className='flex flex-[0.5] w-full justify-center items-center'>
          <img src={logo} alt="logo" className='w-32' />
        </div>
        <div className='flex flex-1  justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full'>
          <p className='text-black text-base dark:text-white text-center mx-2 cursor-pointer'>Market</p>
          <p className='text-black text-base dark:text-white text-center mx-2 cursor-pointer'>Exchange</p>
          <p className='text-black text-base dark:text-white text-center mx-2 cursor-pointer'>Turorials</p>
          <p className='text-black text-base dark:text-white text-center mx-2 cursor-pointer'>Wallet</p>
        </div>
      </div>
      <div className='flex justify-center items-center flex-col mt-5'>
        <p className='text-black  dark:text-white text-sm text-center'>Message me</p>
        <p className='text-black  dark:text-white text-sm text-center'>joververgara1@gmail.com</p>
      </div>
      <div className='sm:w-[90%]  w-full h-[0.25px] bg-gray-400 mt-5'></div>
      <div className='sm:w-[90%]  w-full flex justify-between items-center mt-3'>
      <p className='text-black  dark:text-white text-sm text-center'>Created By Jover Vergara</p>
      <p className='text-black  dark:text-white text-sm text-center'>All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer