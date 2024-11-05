import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFileLines } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

const LandingNav = (props) => {
  return (
    <section className='w-[90%] my-5 mx-auto'>
         <div className='flex relative justify-between items-center text-center'>
            <div className='flex w-fit'>
                <Link to={'/'}>
                   <h2 className='font-semibold text-white hover:text-slate-gray'>TAILWIND STARTER KIT</h2>
                </Link>

                <Link to={'/page-not-found'}>
                  <h3 className='mx-6 hover:text-slate-gray'><FontAwesomeIcon icon={faFileLines} size='lg' color='white'/><span className='ml-2 text-white font-medium hover:text-slate-gray'>Doc</span></h3>
                </Link>
            </div>
            
            <div className='flex w-fit gap-5 items-center text-center'>
                <Link to={'/page-not-found'} className={(props.transparent
                    ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                    : "text-white hover:text-slate-gray")}><FontAwesomeIcon icon={faFacebook} size='lg'/>
                </Link>

                <Link to={'/page-not-found'} className={(props.transparent
                    ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                    : "text-white hover:text-slate-gray")}><FontAwesomeIcon icon={faTwitter} size='lg'/>
                </Link>

                <Link to={'/page-not-found'} className={(props.transparent
                    ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                    : "text-white hover:text-slate-gray")}><FontAwesomeIcon icon={faGithub} size='lg'/>
                </Link>

                <button className='px-7 py-2 bg-white rounded-md hover:bg-slate-gray hover:text-white'>DownLoad</button>
            </div>
         </div>
         <div></div>
    </section>
   
  )
}

export default LandingNav;