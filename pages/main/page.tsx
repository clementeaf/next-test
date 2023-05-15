import React, { useState } from 'react'
import Palindromo from '../Palindromo/page';
import ClickPositions from '../DotsComponent/page';

export default function Main() {
    const [page, setPage] = useState(true);

    const pages = {
        component_one: <ClickPositions />,
        component_two: <Palindromo />,
    };
  
    return (
      <main
        className="flex min-h-screen flex-col items-center justify-center p-24 gap-6"
      >
        <div className='flex items-center gap-10'>
          <button 
              type='button' 
              onClick={() => setPage(true)}
              className='p-2 border-[1px] border-gray-400 rounded-md hover:border-gray-600 hover:rounded-2xl ease-in-out duration-300 bg-white'
          >
            Draw
          </button>
          <button 
              type='button' 
              onClick={() => setPage(false)}
              className='p-2 border-[1px] border-gray-400 rounded-md hover:border-gray-600 hover:rounded-2xl ease-in-out duration-300 bg-white'
          >
            Palíndromo
          </button>
        </div>
        {
          page ? pages.component_one : pages.component_two
        }
      </main>
    )
}