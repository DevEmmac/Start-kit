import React from 'react';
import LandingNav from '../component/LandingNav';
import profileImage from '../assets/team-2-800x800.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faBuildingColumns } from '@fortawesome/free-solid-svg-icons';
import Button from '../component/Button';

const ProfilePage = () => {
  return (
    <section className='flex bg-profile w-full h-[400px] bg-cover bg-center ' height='75vh'>
      <div className='relative bg-black opacity-55 w-full h-full'>
      <LandingNav />
      </div>
      <div className='flex absolute justify-center items-center w-full h-[500px] mt-52 z-10'>
        <div className='bg-white w-[80%] h-full rounded-md mx-auto'>
          <div className='flex justify-center items-center w-[80%] mx-auto relative gap-[500px] mt-4'>
            <div className='flex justify-between w-[27%] text-center text-idigo font-semibold'>
              <h3 className='flex flex-col'>22<span className='text-slate-gray text-[15px]'>Friends</span></h3>
              <h3 className='flex flex-col'>22<span className='text-slate-gray text-[15px]'>Photos</span></h3>
              <h3 className='flex flex-col'>22<span className='text-slate-gray text-[15px]'>Comments</span></h3>
            </div>
            
            <div className='flex absolute mb-12 mx-auto'>
              <img src={profileImage} alt="profile-img" width={150} height={150} className='rounded-full'/>
            </div>

            <div className=''>
            <Button label={'Connect'} backgroundColor={'bg-pink'} textColor={'text-white'}  type="button" style={{ transition: "all .10s ease" }}/> 
            </div>
          
          </div>

          <div className='flex flex-col justify-center items-center text-center mt-32'>
            <div>
            <h1 className="text-4xl font-semibold leading-normal text-gray-800">Jenna Stones</h1>
            <h2 className='text-slate-gray font-semibold uppercase text-[18px]'><span className='mx-2'><FontAwesomeIcon icon={faLocationDot} size='lg'/></span>Los Angeles, California</h2>
            </div>
            
            <div className='mt-10 font-semibold text-idigo'>
              <h2><span className='mx-1'><FontAwesomeIcon icon={faBriefcase} /></span> Solution Manager - Creative Tim Officer</h2>
              <h3><span className='mx-1'><FontAwesomeIcon icon={faBuildingColumns} /></span> University of Computer Science</h3>
            </div>

            <div className='flex lg:flex-col justify-center items-center'>
              <p className="mt-10 font-medium text-lg leading-relaxed text-idigo max-w-3xl">
                An artist of considerable range, Jenna the name taken by
                Melbourne-raised, Brooklyn-based Nick Murphy writes,
                performs and records all of his own music, giving it a
                warm, intimate feel with a solid groove structure. An
                artist of considerable range.
              </p>
              <Button label='Show more'/>
            </div>
          </div>

        </div>
        
      </div>

    </section>
    
  )
}

export default ProfilePage;