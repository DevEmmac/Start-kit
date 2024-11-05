import React from 'react';
import { Link } from 'react-router-dom';

const SideNavbar = () => {
    const sideNav = [{
    subtitle:[
        {title: 'Styles'},
        {title: 'CSS Components'},
        {title: 'VueJS'},
        {title: 'React'},
        {title: 'Angular'},
        {title: 'Javascript'},
    ]   
}];

  return (
    <section className='flex flex-col h-screen overflow-scroll'>
          <h1 className='my-9 mx-7 font-semibold'>TAILWIND STARTER KIT</h1>
        <ul className='flex flex-col gap-5 font-semibold text-[12px] pl-10 pb-9 border-b border-slategray cursor-pointer'>
            <li className='text-red-400 hover:text-coral-red'>DASHBOARD</li>
            <Link to={'./landing-page'}>
              <li className='hover:text-slate-gray'>LANDING PAGE</li>
            </Link>
            
            <Link to={'profile-page'}>
              <li className='hover:text-slate-gray'>PROFILE PAGE</li>
            </Link>

            <Link to={'login-page'}>
              <li className='hover:text-slate-gray'>LOGIN</li>
            </Link>
            
            <li className='text-slate-gray'>REGISTER (SOON)</li>
            <li className='text-slate-gray'>SETTINGS (SOON)</li>
        </ul>
         <h2 className='text-slate-gray font-semibold mt-6 mx-7 text-[13px]'>DOCUMENTATION</h2>
       <div className=''>
        {sideNav.map((items) => (
            <div key={items}>
            <ul className='pl-10'>
                {items.subtitle.map((label) => (
                <li key={label} className='flex flex-col font-semibold text-[14px] pt-5 hover:text-slate-gray'>{label.title}</li>
                ))}
             </ul>
            </div> 
        ))}

       

       </div>
    </section>
    
  )
}

export default SideNavbar;