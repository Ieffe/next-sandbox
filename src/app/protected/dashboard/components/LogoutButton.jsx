'use client'
import { deleteCookie, getCookie } from 'cookies-next';
import { useRouter } from "next/navigation";

const LogoutButton = () => {
    const router = useRouter()
  const logout = () => {
    console.log(getCookie('token'))
    deleteCookie('token')
    console.log('cookie deleted')
    router.push('/protected')
    console.log(getCookie('token') ? getCookie('token')  : 'No more cookie')

  };
  return (
    <button
      onClick={logout}
      className="bg-black border-2 border-white px-3 py-2 rounded-lg"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
