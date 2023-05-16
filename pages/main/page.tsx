import React, { useState } from 'react'
import Palindromo from '../Palindromo/page';
import useUserStore from '@/store/userStore';
import DotsComponent from '../DotsComponent/page';

export default function Main() {
  const { setUser  } = useUserStore(({ setUser }) => ({setUser }));
    const [page, setPage] = useState(true);

    const pages = {
        component_one: <DotsComponent />,
        component_two: <Palindromo />,
    };

    const handleSignOut = async(e: { preventDefault: () => void; }) => {
      e.preventDefault();
      setUser(false);
    };
  
    return (
      <main
        className="flex h-screen w-screen flex-col items-center justify-center p-24 gap-6"
      >
        <div className='flex items-center gap-8'>
          <button 
              type='button' 
              onClick={() => setPage(true)}
              className='p-2 text-gray-400 hover:text-black ease-in-out duration-100 bg-white'
          >
            Draw
          </button>
          <button 
              type='button' 
              onClick={() => setPage(false)}
              className='p-2 text-gray-400 hover:text-black ease-in-out duration-100 bg-white'
          >
            Palíndromo
          </button>

          <button 
              type='button' 
              onClick={handleSignOut}
              className='p-2 text-gray-400 hover:text-black ease-in-out duration-100 bg-white'
          >
            SingOut
          </button>
        </div>
        <div className='flex h-full w-full items-center flex-col p-2 rounded-xl bg-white drop-shadow-xl'>
          {
            page ? pages.component_one : pages.component_two
          }
        </div>
      </main>
    )
}