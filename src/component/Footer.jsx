import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const footerLink = [
        {title: "Creative Tim",
            links: [
                {name: "Creative Tim"},
                 {name: "About Us"},
                 {name: "Blog"},
                 {name: "MIT License"}
            ]
        },
        
    ]
  return (  
    <div className=' max-lg:flex-col w-[90%] mx-auto mt-8 border-t-2 pt-5 border-slategray text-[15px]'>
        {footerLink.map((label) => (
            <div className='flex flex-row justify-between font-semibold text-slate-gray'>
                <h1 key={label} className=''>Copyright © 2024 <span className='hover:text-black'>{label.title}</span></h1>
            <ul className='flex flex-row cursor-pointer justify-between w-[35%]'>
              {label.links.map((link) => (
                <Link to="./">
                  <li key={link} className='hover:text-black'>{link.name}</li>
                </Link>
              ))}
            </ul>
            </div>
          
        ))}
    </div>
  )
}

export default Footer;