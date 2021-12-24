import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function contact() {
  return (
    <>
      <Navbar />
      <div className='bg-gray-200 py-10'>
        <section className='w-full max-w-xl px-6 py-4 mx-auto bg-gray-50 rounded-md shadow-md dark:bg-gray-800'>
          <h2 className='text-3xl font-semibold text-center text-gray-800 dark:text-white'>
            Join the club today!
          </h2>
          <p className='mt-3 text-center text-gray-600 dark:text-gray-400'>
            Send us a message
          </p>

          <form
            className='mt-6'
            action='https://formsubmit.co/bhupeshpr252@gmail.com'
            method='POST'
          >
            <div class='items-center -mx-2 md:flex'>
              <div class='w-full mx-2'>
                <label class='block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200'>
                  Name
                </label>

                <input
                  class='block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
                  type='text'
                  name='name'
                  required
                />
              </div>

              <div class='w-full mx-2 mt-4 md:mt-0'>
                <label class='block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200'>
                  E-mail
                </label>

                <input
                  class='block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
                  type='email'
                  name='email'
                  required
                />
              </div>
            </div>

            <div className='w-full mt-4'>
              <label className='block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200'>
                Message
              </label>

              <textarea
                className='block w-full h-40 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
                type='text'
                name='message'
                required
              ></textarea>
            </div>

            <div className='flex justify-center mt-6'>
              <button className='px-4 py-2 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'>
                Send Message
              </button>
            </div>

            <div>
              <input type='hidden' name='_next' value='/'></input>
            </div>
          </form>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default contact;
