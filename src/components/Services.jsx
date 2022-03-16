import React from 'react';
import { BsShieldFillCheck } from 'react-icons/bs';
import { BiSearchAlt } from 'react-icons/bi';
import { RiHeart2Fill } from 'react-icons/ri';

const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className='flex flex-row justify-start items-center metapakyu p-5 m-2 cursor-pointer hover:shadow-xl'>
    <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
      {icon}
    </div>
    <div className='ml-6 flex flex-col flex-1'>
      <h3 className='mt-2 text-black dark:text-white text-lg'>{title}</h3>
      <p className='mt-2 text-black dark:text-white text-sm md:w-9/12'>{subtitle}</p>
    </div>
  </div>
)

const Services = () => {
  return (
    <div className='flex dark:bg-gray-800 flex-col md:flex-row w-full justify-center items-center gradient-bg-welcome'>
      <div className='flex dark:bg-gray-800 md:flex-row flex-col items-center justify-between md:p-32 md:py-19 py-12 px-16'>
        <div className='flex-1 flex flex-col justify-start items-center'>
          <h1 className='text-black dark:text-white text-3xl sm:text-5xl dark:bg-gray-800 p-6'>Services that we
            <br />
            continue to improve
          </h1>
        </div>
      </div>
      <div className='flex-1 flex dark:bg-gray-800 flex-col justify-start items-center'>
        <ServiceCard
          color="bg-[#2952E3]"
          title="Security Guaranteed"
          icon={<BsShieldFillCheck fontSize={21} className='text-black dark:text-white' />}
          subtitle="Security is Guaranteed. We always maintain privacy and maintain the quality of our Websites."
        />
        <ServiceCard
          color="bg-[#8945F8]"
          title="Best Exchange Rates"
          icon={<BiSearchAlt fontSize={21} className='text-black  dark:text-white' />}
          subtitle="Security is Guaranteed. We always maintain privacy and maintain the quality of our Websites."
        />
        <ServiceCard
          color="bg-[#F84550]"
          title="Fastest Transactions"
          icon={<RiHeart2Fill fontSize={21} className='text-black  dark:text-white' />}
          subtitle="Security is Guaranteed. We always maintain privacy and maintain the quality of our Websites."
        />
      </div>
    </div>
  )
}

export default Services