import React from 'react';
import LandingNav from '../component/LandingNav';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import Button from '../component/Button';
import Footer from '../component/Footer';


const LoginPage = () => {
  return (
    <section className='bg-gray-900 absolute w-full'>
      <div className='flex flex-col bg-login w-[100%] bg-contain bg-center'>
        <LandingNav />
        <div className='flex flex-col mx-auto mt-24 mb-20 w-[27%] bg-gray-300 rounded-md text-center max-lg:w-[90%]'>
           <h1 className='text-idigo font-semibold text-[14px] mt-5'>Sign in with</h1>
           <ul className='flex mx-auto border-b border-slate-gray w-[90%] justify-center items-center gap-2 '>
             <Link to={''}><li className='px-5 py-2 mb-6 mt-3 bg-white rounded-md font-semibold text-[14px] text-idigo'><FontAwesomeIcon icon={faGithub} /><span className='ml-2'>GITHUB</span></li></Link> 
             <Link to={''}><li className='px-5 py-2 mb-6 mt-3 bg-white rounded-md font-semibold text-[14px] text-idigo'><FontAwesomeIcon icon={faGoogle} /><span className='ml-2'>GOOGlE</span></li></Link>        
           </ul>
             
                <form className='flex flex-col w-[84%] mx-auto mt-6'>
                <h2 className='text-gray-500 font-semibold text-[13px]'>Or sign in with credentials</h2>
               
                <div className='flex flex-col justify-start items-start mt-4'>
                  <label htmlFor="text" className='text-gray-700 font-semibold text-[12px] py-1'>EMAIL</label>
                  <input type="text" className='w-[100%] py-2 pl-2 text-gray-700 font-medium rounded-lg'/>
                </div>

                <div className='flex flex-col justify-start items-start mt-3'>
                  <label htmlFor="" className='text-gray-700 font-semibold text-[12px] py-1'>PASSWORD</label>
                  <input type="text" className='w-[100%] py-2 pl-2 text-gray-700 font-medium rounded-lg'/>
                </div>

                <div className='inline-flex mt-4 text-center'>     
                  <label htmlFor="" className='flex text-center'><input type="checkbox" className='mr-2 w-5 h-5' style={{ transition: "all .15s ease" }}/><span className='text-sm text-gray-700 font-semibold'>Remember me</span></label>
                </div>
               
               <div className='mt-5 mb-8'>
                  <Button label='SIGN IN' width={'w-[100%]'} textColor={'text-white'} backgroundColor={'bg-gray-900'}/>
               </div>
              </form>
        </div>

        <div className='mb-6'>
          <Footer textColor={'text-slate-50'} />
        </div>   
      
       </div>
    </section>
   
  )
}

export default LoginPage;