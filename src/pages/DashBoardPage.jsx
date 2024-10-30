import React from 'react';
import SideNavbar from '../component/SideNavbar';
import ProfilePic from '../assets/team-1-800x800.jpg'
import Footer from '../component/Footer';
import DashboardTable from '../component/DashboardTable';
import OverViewFrame from '../component/OverViewFrame';

const DashBoardPage = () => {
  return (

      <div className='flex flex-row mt-0'>
        <div className='w-[20%] ring'><SideNavbar /></div>

        <div className='flex flex-col w-[80%] h-screen overflow-scroll'>
          <div className='ring bg-pink mt-0 h-[400px]'>
                <div className='flex flex-row justify-between w-[90%] mx-auto mt-7'>
                  <h1 className='text-white font-semibold my-auto'>DASHBOARD</h1>
                    <div className='flex flex-row'>
                      <input type="text" name='text' placeholder='Search here' className='pl-5 rounded-md'/>
                      <img src={ProfilePic} alt="Profile-pic" width={50} height={50} className='rounded-full ml-3'/>
                    </div>
                </div>
           

              <div className='flex flex-row max-lg:flex-col justify-between w-[90%] mx-auto ring mt-16'>
                <div className='bg-white rounded-md py-4 px-4'>
                  <h2>TRAFFIC</h2>
                  <h1>350,897</h1>
                  <h3>3.48% Since last month</h3>
                </div>

                <div className=' bg-white rounded-md py-4 px-4'>
                  <h2>NEW USERS</h2>
                  <h1>2,356</h1>
                  <h3>3.48% Since last week</h3>
                </div>

                <div className='bg-white rounded-md py-4 px-4'>
                  <h2>SALES</h2>
                  <h1>924</h1>
                  <h3>1.10% Since yesterday</h3>
                </div>

                <div className='bg-white rounded-md py-4 px-4'>
                  <h2>PERFORMANCE</h2>
                  <h1>49,65%</h1>
                  <h3>12% Since last month</h3>
                </div>
              </div>
              
              <div className='flex flex-row max-lg:flex-col justify-between w-[90%] mx-auto ring mt-9'>
                <div className='bg-idigo w-[65%] h-[430px] rounded-md'>
                  <h2>OVERVIEW</h2>
                  <h1>Sales value</h1>
                </div>
                <div className='bg-white w-[32%] h-[430px] ring rounded-md'>
                  <h2>PERFORMANCE</h2>
                  <h1>Total orders</h1>
                </div>
              </div>
          </div>

         <div className='ring mt-[310px]'>
          <div className='flex flex-row max-lg:flex-col justify-between w-[90%] mx-auto ring mt-9'>
            <div className='bg-idigo w-[65%] h-[430px] rounded-md'>
              
            </div>

            <div className='bg-white w-[32%] h-[430px] ring rounded-md'>

            </div>
          </div>
          </div>
          <Footer />
        </div>
      
      </div>
  )
}

export default DashBoardPage;