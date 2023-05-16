/* eslint-disable react-hooks/rules-of-hooks */
import { initFirebase } from '@/firebase';
import usePageStore from '@/store/pageStore';
import useUserStore from '@/store/userStore';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Authentication() {
    initFirebase();
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const [ user, loading ] = useAuthState(auth); 

    if(loading){
        return <div>Loading...</div>
    }

    if(user){
        return <div>Welcome</div>
    }

    // const signIn = async () => {
    //     const result = await signInWithPopup(auth, provider);
    //     console.log(result.user);
    // };

    // const { setPage } = usePageStore(({ setPage }) => ({setPage}));
    // const { user, password, setUser, setPassword  } = useUserStore(
    // ({ user, password, setUser, setPassword }) => 
    // ({user, password, setUser, setPassword }));

    // const handleAuth = async(e: { preventDefault: () => void; }) => {
    //     e.preventDefault();
    //     console.log(user, password);
    //     // if (user === "clemente" && password === "clemente") return setPage();
    // }

//   return (
//     <div className='flex items-center justify-center'>
//         <form 
//             className='flex flex-col items-start gap-4 p-4 bg-white rounded-lg border-2 drop-shadow-xl hover:drop-shadow-2xl cursor-pointer ease-in-out duration-300'
//             onSubmit={signIn}
//         >
//             <label>User</label>
//             <input 
//                 id="user"
//                 className='border-[1px] border-gray-300 rounded-full p-2'
//                 onChange={(e) => 
//                  setUser(e.target.value)
//                 }
//                 type='text'
//                 required
//                 value={user}
//             />
            
//             <label>Password</label>
//             <input 
//                 id="password"
//                 className='border-[1px] border-gray-300 rounded-full p-2'
//                 onChange={(e) => 
//                  setPassword(e.target.value)
//                 }
//                 type='password'
//                 required
//                 value={password}
//             />

//             <button 
//                 type='submit' 
//                 className='border-[1px] border-gray-400 p-2 rounded-md hover:rounded-2xl 
//                            ease-in-out duration-300 cursor-pointer'
//             >
//              SignIn
//             </button>

//         </form>
//     </div>
//   )
}