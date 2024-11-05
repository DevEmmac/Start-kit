import React from 'react';
import LandingNav from '../component/LandingNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward } from '@fortawesome/free-solid-svg-icons';
import { faRetweet } from '@fortawesome/free-solid-svg-icons';
import { faFingerprint } from '@fortawesome/free-solid-svg-icons';

const LandingPage = () => {
  return (
    <section className='flex w-full h-[480px] flex-col bg-landing bg-center bg-cover'>
        <div className='bg-black opacity-75 w-full h-full'>
            <LandingNav />
            <div className='flex flex-col text-center items-center mt-14 mx-auto max-w-sm'>
                <h1 className='text-white font-semibold text-[44px]'>Your story start<br />with us.</h1>
                <p className='text-slate-gray font-medium text-sm leading-7'>This is simple example of landing pag you can build using tailwind start kit.It features multiple CSS
                components based on the Tailwindcss design system.</p>
            </div>
        </div>

        <div className='mt-[415px] absolute z-10'> 
                <div className='flex w-[85%] mx-auto gap-8 mb-10 z-10'>
                    <div className='md:w-4/12 bg-slate-200 mt-11 text-center break-words w-full shadow-lg rounded-lg'>
                        <div className='w-16 h-16 flex justify-center items-center rounded-full bg-red-400 mx-auto mt-5 mb-7'><FontAwesomeIcon icon={faAward} color='white'/></div>
                        <h3 className='text-xl font-semibold text-idigo mb-2'>Awarded Agency</h3>
                        <p className='px-3 mb-5 text-idigo'> Divide details about your product or agency work into parts. 
                            A paragraph describing a feature will be enough.</p>
                    </div>
                    <div className='bg-slate-200 md:w-4/12 break-words text-center w-full h-fit shadow-lg rounded-lg'>
                        <div className='w-16 h-16 flex justify-center items-center rounded-full bg-blue-400 mx-auto mt-5 mb-7'><FontAwesomeIcon icon={faRetweet} color='white'/></div>
                        <h3 className='text-xl font-semibold text-idigo mb-2'>Free Revisions</h3>
                        <p className='px-4 mb-5 text-idigo'>Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious.</p>
                    </div>
                    <div className='md:w-4/12 bg-slate-200 mt-8 text-center break-words w-full shadow-lg rounded-lg'>
                        <div className='w-16 h-16 flex justify-center items-center rounded-full bg-green-400 mx-auto mt-5 mb-7'><FontAwesomeIcon icon={faFingerprint} color='white'/></div>
                        <h3 className='text-xl font-semibold text-idigo mb-2'>Verified Company</h3>
                        <p className='px-4 mb-5 text-idigo'>Write a few lines about each one. A paragraph describing a 
                            feature will be enough. Keep you user engaged!</p>
                    </div>
                </div>
            </div>
    </section>
   
  )
}

export default LandingPage;