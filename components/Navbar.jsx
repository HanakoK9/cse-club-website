import React from 'react';

function Navbar() {
  return (
    <nav class='bg-white shadow dark:bg-gray-800'>
      <div class='container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300'>
        <a
          href='/'
          class='border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6'
        >
          home
        </a>

        <a
          href='/projects'
          class='border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6'
        >
          projects
        </a>

        <a
          href='/contact'
          class='border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6'
        >
          contact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
