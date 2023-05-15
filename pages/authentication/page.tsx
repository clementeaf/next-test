import usePageStore from '@/store/pageStore';
import React, { useState } from 'react'

export default function Authentication() {
    const { setPage } = usePageStore(({ setPage }) => ({setPage}));
    const [user, setUser] = useState({
        user: "",
        password: "",
    });


    const handleAuth = () => {
        if (user.user === "clemente" && user.password === "clemente") return setPage();
    }


  return (
    <div className='flex flex-col items-center'>
        <form className='flex flex-col items-start gap-4 p-4 bg-white rounded-lg'>
            <label>User</label>
            <input 
                id="user"
                className='border-[1px] border-gray-300 rounded-full p-2'
                onChange={(e) => 
                 setUser((prevState) => ({
                    ...prevState,
                    user: e.target.value,
                 }))
                }
            />
            
            <label>Password</label>
            <input 
                id="password"
                className='border-[1px] border-gray-300 rounded-full p-2'
                onChange={(e) => 
                 setUser((prevState) => ({
                    ...prevState,
                    password: e.target.value,
                 }))
                }
            />
            <button 
                type='button' 
                className='border-[1px] border-gray-400 p-2 rounded-md hover:rounded-2xl ease-in-out duration-300'
                onClick={handleAuth}
            >
             SignIn
            </button>
        </form>
    </div>
  )
}