import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function projects() {
  return (
    <div className='bg-gray-200'>
      <Navbar />
      <h1 className='text-2xl py-4 text-center font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300'>
        Projects we're working on
      </h1>
      <div className='flex-row md:flex py-8'>
        <div className='max-w-sm mx-auto overflow-hidden bg-gray-100 rounded-lg shadow-lg dark:bg-gray-800'>
          <img
            className='object-cover object-center w-full h-56'
            src='https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
            alt=''
          />

          <div className='flex items-center px-6 py-3 bg-gray-900'>
            <h1 className='mx-3 text-lg font-semibold text-white'>
              Social Media Manager
            </h1>
          </div>

          <div className='px-6 py-4'>
            <h1 className='text-xl font-semibold text-gray-800 dark:text-white'>
              App Dev Team
            </h1>

            <p className='py-2 text-gray-700 dark:text-gray-400'>
              Full Stack maker & UI / UX Designer , love hip hop music Author of
              Building UI.
            </p>

            <div className='flex items-center mt-4 text-gray-700 dark:text-gray-200'>
              <svg
                className='w-6 h-6 fill-current'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z'
                />
              </svg>

              <h1 className='px-2 text-sm'>person@example.com</h1>
            </div>
          </div>
        </div>
        <div className='max-w-sm mx-auto overflow-hidden bg-gray-100 rounded-lg shadow-lg dark:bg-gray-800'>
          <img
            className='object-cover object-center w-full h-56'
            src='https://images.unsplash.com/photo-1614680376739-414d95ff43df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'
            alt=''
          />

          <div className='flex items-center px-6 py-3 bg-gray-900'>
            <h1 className='mx-3 text-lg font-semibold text-white'>
              Discord Bot
            </h1>
          </div>

          <div className='px-6 py-4'>
            <h1 className='text-xl font-semibold text-gray-800 dark:text-white'>
              Web Dev Team
            </h1>

            <p className='py-2 text-gray-700 dark:text-gray-400'>
              Full Stack maker & UI / UX Designer , love hip hop music Author of
              Building UI.
            </p>

            <div className='flex items-center mt-4 text-gray-700 dark:text-gray-200'>
              <svg
                className='w-6 h-6 fill-current'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z'
                />
              </svg>

              <h1 className='px-2 text-sm'>person@example.com</h1>
            </div>
          </div>
        </div>
        <div className='max-w-sm mx-auto overflow-hidden bg-gray-100 rounded-lg shadow-lg dark:bg-gray-800'>
          <img
            className='object-cover object-center w-full h-56'
            src='https://images.pexels.com/photos/8369588/pexels-photo-8369588.jpeg?cs=srgb&dl=pexels-rodnae-productions-8369588.jpg&fm=jpg'
            alt=''
          />

          <div className='flex items-center px-6 py-3 bg-gray-900'>
            <h1 className='mx-3 text-lg font-semibold text-white'>
              Crypto Firewall
            </h1>
          </div>

          <div className='px-6 py-4'>
            <h1 className='text-xl font-semibold text-gray-800 dark:text-white'>
              Blockchain Team
            </h1>

            <p className='py-2 text-gray-700 dark:text-gray-400'>
              Crypto firewall for transactions
            </p>

            <div className='flex items-center mt-4 text-gray-700 dark:text-gray-200'>
              <svg
                className='w-6 h-6 fill-current'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z'
                />
              </svg>

              <h1 className='px-2 text-sm'>person@example.com</h1>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default projects;
