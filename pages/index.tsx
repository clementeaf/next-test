import Main from './main/page';
import { initFirebase } from '@/firebase';
import useUserStore from '@/store/userStore';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const Home = () => {
  initFirebase();
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const { user, setUser  } = useUserStore(
    ({ user, setUser }) => 
    ({user, setUser }));

  const signIn = async () => {
    const result = await signInWithPopup(auth, provider);
    if (result.user){
      setUser(result.user.emailVerified)
    }
  };

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center text-center gap-4">
      {user ? (
        <Main />
      ):(
      <>
        <p>Please signIn to continue</p><button onClick={signIn}>
          <div className="bg-blue-600 text-white rounded-md p-2 w-48">
            Sign In
          </div>
        </button>
      </>
       )}
    </div>
  );
};

export default Home;