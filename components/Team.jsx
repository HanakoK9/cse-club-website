import React from 'react';

function Team() {
  return (
    <section className='container mx-auto py-4 bg-gray-200 dark:bg-gray-800'>
      <h2 className='text-xl ml-4 font-medium text-gray-800 capitalize dark:text-white md:text-2xl'>
        Our Team
      </h2>

      <div className='flex items-center justify-center'>
        <div className='grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          <div className='w-full max-w-xs text-center'>
            <img
              className='object-cover object-center w-full h-48 mx-auto rounded-lg'
              src='https://images.unsplash.com/photo-1493863641943-9b68992a8d07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=739&q=80'
              alt='avatar'
            />

            <div className='mt-2'>
              <h3 className='text-lg font-medium text-gray-700 dark:text-gray-200'>
                Human 1
              </h3>
              <span className='mt-1 font-medium text-gray-600 dark:text-gray-300'>
                Founder
              </span>
            </div>
          </div>

          <div className='w-full max-w-xs text-center'>
            <img
              className='object-cover object-center w-full h-48 mx-auto rounded-lg'
              src='https://images.unsplash.com/photo-1516756587022-7891ad56a8cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'
              alt='avatar'
            />

            <div className='mt-2'>
              <h3 className='text-lg font-medium text-gray-700 dark:text-gray-200'>
                Human 2
              </h3>
              <span className='mt-1 font-medium text-gray-600 dark:text-gray-300'>
                App Developer
              </span>
            </div>
          </div>

          <div className='w-full max-w-xs text-center'>
            <img
              className='object-cover object-center w-full h-48 mx-auto rounded-lg'
              src='https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80'
              alt='avatar'
            />

            <div className='mt-2'>
              <h3 className='text-lg font-medium text-gray-700 dark:text-gray-200'>
                Human 3
              </h3>
              <span className='mt-1 font-medium text-gray-600 dark:text-gray-300'>
                Blockchain
              </span>
            </div>
          </div>

          <div className='w-full max-w-xs text-center'>
            <img
              className='object-cover object-center w-full h-48 mx-auto rounded-lg'
              src='https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'
              alt='avatar'
            />

            <div className='mt-2'>
              <h3 className='text-lg font-medium text-gray-700 dark:text-gray-200'>
                Human 4
              </h3>
              <span className='mt-1 font-medium text-gray-600 dark:text-gray-300'>
                Web Developer
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
