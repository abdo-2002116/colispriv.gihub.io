import React from 'react';
import { Link } from 'react-router-dom';
import Footer from "../footer";
import Header from "../header";
import Button from './button';

export default function Creercompte() {
    return (
        <>
            <header>
            <nav className="bg-white border-gray-200 px-4 top-0 fixed fixed z-40 w-full lg:px-6 py-2.5 dark:bg-fuchsia-800">
                <div className="flex flex-wrap justify-between  -z-10 items-center mx-auto max-w-screen-xl">
                    <a href="https://www.colisprive.fr/" className="flex items-center">
                        <img src="https://www.colisprive.fr/wp-content/uploads/2018/05/logo-colis-prive-1.svg" className="mr-3 h-6 sm:h-9" alt="colisprive" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Colis Privé</span>
                    </a>
                    <div className="flex items-center lg:order-2">
                        <a href="https://extranet-cps.colisprive.ma/authentification" className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-purple-950 dark:hover:bg-fuchsia-700 focus:outline-none dark:focus:ring-gray-800">Log in</a>
                       
                        <a className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-orange-600  dark:hover:bg-fuchsia-700  focus:outline-none dark:focus:ring-primary-800"> <Link to="/creercompte">Get started</Link></a><button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                            <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button>
                    </div>
                    <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                            <a  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-white lg:dark:hover:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"><Link  to="/" > Home</Link></a>
                            </li>
                            <li>
                                <a  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-white lg:dark:hover:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"><Link to="/" > service</Link></a>
                            </li>
                            <li>
                                <a className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-white lg:dark:hover:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"><Link  to="/"> FAQ</Link></a>
                            </li>
         
                            
                            <li>
                                <a className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-white lg:dark:hover:text-gray-400  dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"><Link to="/" > Contact</Link></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
            <div className="border-fuchsia-950">
              
                <div class="isolate bg-white  mt-50  lg:px-8">
                <div class="mx-auto max-w-2xl mt-20 text-center ">
                    
                    <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Créer votre compte
                    </h2>
                    <p class="mt-2 text-lg leading-8 text-gray-600">Aute magna irure deserunt veniam aliqua magna enim voluptate.</p>
                    </div>
                    <div className=" w-full ">
                        <form action="#" method="POST" class="mx-auto mt-16 max-w-xl   sm:mt-20">
                        <div class="grid grid-cols-1 gap-x-8  gap-y-6 sm:grid-cols-2">
<div>
  <label for="first-name" class="block text-sm font-semibold leading-6 text-gray-900">First name</label>
  <div class="mt-2.5">
    <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
  </div>
</div>
<div>
  <label for="last-name" class="block text-sm font-semibold leading-6 text-gray-900">Last name</label>
  <div class="mt-2.5">
    <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
  </div>
</div>
<div class="sm:col-span-2">
  <label for="company" class="block text-sm font-semibold leading-6 text-gray-900">Company</label>
  <div class="mt-2.5">
    <input type="text" name="company" id="company" autocomplete="organization" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
  </div>
</div>
<div class="sm:col-span-2">
  <label for="email" class="block text-sm font-semibold leading-6 text-gray-900">Email</label>
  <div class="mt-2.5">
    <input type="email" name="email" id="email" autocomplete="email" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
  </div>
</div>
<div class="sm:col-span-2">
  <label for="phone-number" class="block text-sm font-semibold leading-6 text-gray-900">Phone number</label>
  <div class="relative mt-2.5">
    <div class="absolute inset-y-0 left-0 flex items-center">
      <label for="country" class="sr-only">Country</label>
     
     
    </div>
    <input type="tel" name="phone-number" id="phone-number" autocomplete="tel" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
  </div>
</div>
<div class="sm:col-span-2">
  <label for="message" class="block text-sm font-semibold leading-6 text-gray-900">Message</label>
  <div class="mt-2.5">
    <textarea name="message" id="message" rows="4" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
  </div>
</div>

</div>
<div class="my-10">
<button type="submit" class="block w-full bg-fuchsia-900	 rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Créer votre compte</button>
</div>
                        </form>
                    </div>
                </div>
            </div>
            
            <Footer />
        </>
    );
}
