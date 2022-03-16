import React, { useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';

import { shortenAddress } from '../utils/shortenAddress';
import useFetch from '../hooks/useFetch';

const TransactionCard = ({ addressTo, addressFrom, timestamp, message, keyword, amount, url }) => {
  const gifUrl = useFetch({ keyword })

  return (
    <div className='bg-[#F5E1FD] dark:bg-[#181918] m-4 flex flex-1 2xl:min-w-[450px] 2xl:max-w-[500px] sm:min-w-[270px] sm:max-w-[300px] flex-col p-3 rounded-md hover:shadow-2xl'>
      <div className='flex flex-col items-center w-full mt-3'>
        <div className='w-full mb-6 p-2'>
          <a
            href={`https://ropsten.etherscan.io/address/${addressFrom}`}
            target="_blank"
            rel="noopener noreferrer"
          >
              <p className='text-black dark:text-white text-base'>From: {shortenAddress(addressFrom)}</p>
          </a>
          <a
            href={`https://ropsten.etherscan.io/address/${addressTo}`}
            target="_blank"
            rel="noopener noreferrer"
          >
              <p className='text-black dark:text-white text-base'>To: {shortenAddress(addressTo)}</p>
          </a>
          <p className='text-black dark:text-white text-base'>Amount: {amount} ETH</p>
          {message && (
            <>
              <br />
              <p className='text-black dark:text-white text-base'>Mesage: {message}</p>
            </>
          )}
        </div>
            <img 
              src={gifUrl || url}
              alt="gif"
              className='w-full h-64 2xl h-96 rounded-md shadow-lg object-cover'
            />
          <div className='bg-[#F4C2C2] p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl'>
            <p className='text-[#000] font-bold'>{timestamp}</p>
          </div>
      </div>
    </div>  
  )
}

const Transactions = () => {
  const { currentAccount, transactions } = useContext(TransactionContext);

  return (
    <div className='flex w-full dark:bg-gray-800 justify-center dark:text-white items-center 2xl:px-20 gradient-bg-welcome'>
      <div className='flex flex-col dark:bg-gray-800 md:p-12 py-12 px-4'>
        {currentAccount ? (
          <h3 className='text-black text-3xl dark:text-white text-center my-2'>Latest Transactions.</h3>
        ) : (
          <h3 className='text-black text-3xl dark:text-white text-center my-2'>Connect your Account to see the latest Transactions.</h3>
        )}

        <div className='flex flex-wrap justify-center items-center mt-10'>
          {transactions.reverse().map((transaction, i) => (
            <TransactionCard key={i} {...transaction} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Transactions