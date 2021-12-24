import React from 'react';

function About() {
  return (
    <div>
      <section className='bg-gray-200 dark:bg-gray-800'>
        <div className='container px-6 py-8 mx-auto'>
          <div className='items-center lg:flex'>
            <div className='lg:w-full flex-col justify-center text-center'>
              <div>
                <h2 className='text-3xl font-bold text-gray-800 dark:text-gray-100'>
                  Who Are We?
                </h2>
              </div>

              <p className='mt-4 text-gray-500 dark:text-gray-400 lg:max-w-full'>
                Hi, we are the CSE club of{' '}
                <a className='font-bold text-indigo-600 dark:text-indigo-400'>
                  SSTC
                </a>{' '}
                , Do you want to sharpen your skills in programming? We have
                members from all sorts of domain like ethical hacking,
                cryptocurrency, game dev and more...Sounds interesting? Join our
                club today!
              </p>

              <div className='flex items-center mt-6 -mx-2'></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
