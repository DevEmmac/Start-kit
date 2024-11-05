import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <section className=''>
         <div className='flex flex-col justify-center items-center ring mt-20'>
            <h1 className='text-3xl'>PageNotFound</h1>
            <div className='flex gap-10 mt-10'>
                <Link to={'/'}>
                  <button className='ring'>Home</button>
                </Link>
                
                <Link to={'/landing-page'}>
                  <button className='ring'>Back</button>
                </Link>
                
            </div>
        </div>
    </section>
   
  )
}

export default PageNotFound;