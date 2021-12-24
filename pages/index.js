import Head from 'next/head';
import About from '../components/About';
import Events from '../components/Events';
import Footer from '../components/Footer';
import Join from '../components/Join';
import Navbar from '../components/Navbar';
import Team from '../components/Team';

export default function Home() {
  return (
    <div>
      <Head>
        <title>CSE Club</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <header className='bg-gray-200 dark:bg-gray-800'>
        <Navbar />

        <div className='container px-6 py-16 mx-auto'>
          <div className='items-center lg:flex'>
            <div className='w-full lg:w-1/2'>
              <div className='lg:max-w-lg'>
                <h1 className='text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl'>
                  Join the Club <span className='text-indigo-500'>Today</span>
                </h1>

                <p className='mt-4 text-gray-600 dark:text-gray-400'>
                  Make fun projects with our members{' '}
                  <span className='font-medium text-indigo-500'>TOGETHER</span>
                </p>

                <a href='/contact'>
                  <button className='w-full px-6 my-4 py-2 text-md font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-indigo-500 rounded-lg lg:w-auto hover:bg-indigo-400 focus:outline-none focus:bg-indigo-400'>
                    JOIN
                  </button>
                </a>
              </div>
            </div>

            <div className='flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2'>
              <img className='w-full h-full max-w-md' src='/showcase.png' />
            </div>
          </div>
        </div>
      </header>

      <About />

      <Events />

      <Team />

      <Join />

      <Footer />
    </div>
  );
}
