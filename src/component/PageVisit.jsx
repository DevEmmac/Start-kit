import React from 'react';
import { Link } from 'react-router-dom';

const PageVisit = () => {
    const PageVisit = [
        {
            title: "PAGE NAME",
            users: [
                {username: "CSS"},
                {username: "Sam"},
                {username: "Mac"},
                {username: "Hp"},
                {username: "Window"}
            ]

        },
        {
           title: "VISITORS",
           users: [
                {amount: "4,569"},
                {amount: "3,985"},
                {amount: "3,513"},
                {amount: "2,050"},
                {amount: "1,795"}
           ]
        },
        {
            title: "UNIQUE USERS",
            users: [
                {unique: "340"},
                {unique: "319"},
                {unique: "294"},
                {unique: "147"},
                {unique: "190"}
            ]
        },
        {
            title: "BOUNCE RATE",
            users: [
                {rate: "46,53%"},
                {rate: "46,53%"},
                {rate: "36,49%"},
                {rate: "50,87%"},
                {rate: "46,53%"}
            ]
        }
    ]
  return (
    <section className='bg-slate-50 w-[65%] rounded-md shadow-2xl'>
        <h1 className='flex justify-between mt-5 mx-auto w-[87%] text-idigo font-semibold'>Page visits <spm className='bg-sky-blue text-white text-[12px] px-4 py-1 rounded-md cursor-pointer'>SEE ALL</spm></h1>
      <div className='flex justify-between mt-6'>
         {PageVisit.map((pagevisit) => (
            <div key={pagevisit} className='mx-5'>
                <h2 className='flex flex-row text-[12px] font-semibold text-light-indigo'>{pagevisit.title}</h2>

                {pagevisit.users.map((info) => (
                    <ul key={info} className='mt-8 mb-5 text-[13px]'>
                       <li className='text-white-400 font-montserrat hover:text-slate-gray cursor-pointer text-idigo font-semibold'>
                          <Link to={'./'}>{info.username}</Link>
                       </li>

                       <li className='text-white-400 font-montserrat hover:text-slate-gray cursor-pointe text-idigo'>
                          <Link to={'./'}>{info.unique}</Link>
                       </li>

                       <li className='text-white-400 font-montserrat hover:text-slate-gray cursor-pointer text-idigo'>
                          <Link to={'./'}>{info.amount}</Link>
                       </li>

                       <li className='text-white-400 font-montserrat hover:text-slate-gray cursor-pointer text-idigo'>
                          <Link to={'./'}>{info.rate}</Link>
                       </li>
                    </ul>
                  ))}
                
            </div>
        ))}    
              
      </div>
    </section>
  )
}

export default PageVisit;