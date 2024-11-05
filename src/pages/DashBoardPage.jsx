import React from 'react';
import SideNavbar from '../component/SideNavbar';
import ProfilePic from '../assets/team-1-800x800.jpg'
import Footer from '../component/Footer';
// import DashboardTable from '../component/DashboardTable';
import OverViewFrame from '../component/OverViewFrame';
import Performance from '../component/Performance';
import PageVisit from '../component/PageVisit';
import Social from '../component/Social';

const DashBoardPage = () => {
  const activities = [
    {
      title: "TRAFFIC",
      amount: "350,897",
      percent: "3.48%",
      time: "Since last month"
  },

  { 
    title: "NEW USERS",
    amount: "2,356",
    percent: "3.48%",
    time: "Since last month"
  },

  {
    title: "SALES",
    amount: "924",
    percent: "3.48%",
    time: "Since last month",
  },

  {
    title: "PERFORMANCE",
    amount: "49,65%",
    percent: "3.48%",
    time: "Since last month",
  }

  ]

  return (

      <div className='flex flex-row mt-0'>
        <div className='w-[20%]'><SideNavbar /></div>

        <div className='flex flex-col w-[80%] h-screen overflow-scroll'>
          <div className='bg-pink mt-0 h-[400px]'>
                <div className='flex flex-row justify-between w-[90%] mx-auto mt-7'>
                  <h1 className='text-white font-semibold my-auto'>DASHBOARD</h1>
                    <div className='flex flex-row'>
                      <input type="text" name='text' placeholder='Search here' className='pl-5 rounded-md'/>
                      <img src={ProfilePic} alt="Profile-pic" width={50} height={50} className='rounded-full ml-3'/>
                    </div>
                </div>
           

              <div className='flex flex-row max-lg:flex-col justify-between w-[90%] mx-auto mt-16'>
                 {activities.map((active) => (
                  <div key={active} className='bg-white rounded-md py-4 px-4 w-[23%]'>
                    <h2 className='font-semibold text-[12px] text-slate-gray'>{active.title}</h2>
                    <h1 className='text-idigo font-semibold text-[18px]'>{active.amount}</h1>
                    <h3 className='mt-4'>{active.percent} <span className='text-slate-gray pl-2'>{active.time}</span></h3>
                  </div>
                 ))}

              </div>
              
              <div className='flex flex-row max-lg:flex-col justify-between w-[90%] mx-auto mt-9'>
                    <OverViewFrame />
                    <Performance />
              </div>
          </div>

         <div className='mt-[310px]'>
            <div className='flex flex-row max-lg:flex-col justify-between w-[90%] mx-auto mt-9'>
              <PageVisit />
              <Social />
            </div>
         </div>
          <Footer />
        </div>
      
      </div>
  )
}

export default DashBoardPage;