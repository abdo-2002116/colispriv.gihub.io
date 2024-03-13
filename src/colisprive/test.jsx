import React, { useState } from 'react';

function Test() {
  
        let Links =[
            {name:"HOME",link:"/"},
            {name:"SERVICE",link:"/"},
            {name:"ABOUT",link:"/"},
            {name:"BLOG'S",link:"/"},
            {name:"CONTACT",link:"/"},
          ];
          let [open,setOpen]=useState(false);
        return (
          <div className='shadow-md w-full fixed  top-0 left-0'>
            <div className='bg-white border-gray-200 px-4 z-40  fixed fixed w-full lg:px-6 py-2.5 dark:bg-fuchsia-800'>
            <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
            text-gray-800'>
              
              <a href="https://www.colisprive.fr/" className="flex items-center">
                        <img src="https://www.colisprive.fr/wp-content/uploads/2018/05/logo-colis-prive-1.svg" className="mr-3 h-6 sm:h-9" alt="colisprive" />
                        <span className="self-center text-xl font-semibold text-black whitespace-nowrap dark:text-white">Colis Privé</span>
                    </a>
            </div>
            
            <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
            <ion-icon name={open ? 'close':'menu'}></ion-icon>
            </div>
      
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-fuchsia-800s md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
              {
                Links.map((link)=>(
                  <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                    <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
                  </li>
                ))
              }
              <button className='bg-indigo-600 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 
    duration-500'>
    Get Started
    </button>
              
            </ul>
            </div>
          </div>
    );
}

export default Test;
