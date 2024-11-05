import React from 'react';

const Social = () => {
  return (
    <section className='bg-white w-[32%] rounded-md shadow-2xl'>
         <h1 className='flex justify-between mt-5 mx-auto w-[87%] text-idigo font-semibold'>Social traffic<spm className='bg-sky-blue text-white text-[12px] px-4 py-1 rounded-md cursor-pointer'>SEE ALL</spm></h1>
      <div className='w-12/12 overflow-x-scroll mt-5 flex flex-col pl-4'>
        <ul className='flex flex-row justify-between w-[185px] text-light-indigo font-semibold text-[12px]'>
            <li>REFERRAL</li>
            <li>VISITORS</li>
        </ul>
        
        <div className='flex mt-8 text-[12px] w-96'>
          <h2 className='text-white-400 font-montserrat hover:text-slate-gray cursor-pointer text-idigo font-semibold'>Facebook</h2>
          <h3 className='text-white-400 font-montserrat hover:text-slate-gray cursor-pointer text-idigo ml-20'>1,480</h3>
          <div className='flex justify-between ml-20 w-11'>
                <h2>60%</h2>
                <div>---</div>
            </div>
        </div>
        <ul className=''></ul>

        <div className='flex mt-8 text-[12px] w-96'>
            <h2 className='text-white-400 font-montserrat hover:text-slate-gray cursor-pointer text-idigo font-semibold'>Facebook</h2>
            <h3 className='text-white-400 font-montserrat hover:text-slate-gray cursor-pointer text-idigo ml-20'>5,480</h3>
            <div className='flex justify-between ml-20 w-11'>
                <h2>70%</h2>
                <div>---</div>
            </div>
        </div>

        <div className='flex mt-8 text-[12px] w-96'>
            <h2 className='text-white-400 font-montserrat hover:text-slate-gray cursor-pointer text-idigo font-semibold'>Google</h2>
            <h3 className='text-white-400 font-montserrat hover:text-slate-gray cursor-pointer text-idigo ml-24'>4,807</h3>
            <div className='flex justify-between ml-20 w-11'>
                <h2>80%</h2>
                <div>---</div>
            </div>
        </div>

        <div className='flex mt-8 text-[12px] w-96'>
            <h2 className='text-white-400 font-montserrat hover:text-slate-gray cursor-pointer text-idigo font-semibold'>Instagram</h2>
            <h3 className='text-white-400 font-montserrat hover:text-slate-gray cursor-pointer text-idigo ml-20'>3,678</h3>
            <div className='flex justify-between w-11 ml-20'>
                <h2>75%</h2>
                <div>---</div>
            </div>
        </div>

        <div className='flex mt-8 text-[12px] w-96'>
            <h2 className='text-white-400 font-montserrat hover:text-slate-gray cursor-pointer text-idigo font-semibold'>twitter</h2>
            <h3 className='text-white-400 font-montserrat hover:text-slate-gray cursor-pointer text-idigo ml-24'>2,645</h3>
            <div className='flex justify-between ml-20 w-11'>
                <h2>30%</h2>
                <div>---</div>
            </div>
        </div>
      </div>
    </section>
    
  )
}

export default Social;