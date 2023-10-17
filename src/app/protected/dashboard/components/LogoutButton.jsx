'use client'
import { deleteCookie, getCookie } from 'cookies-next';
import { useRouter } from "next/navigation";

const LogoutButton = () => {
    const router = useRouter()
  const logout = () => {
    deleteCookie('token')
    console.log('cookie deleted')
    router.refresh()
    router.push('/protected')
    console.log(getCookie('token') ? getCookie('token')  : 'No more cookie')

  };
  return (
    <button
      onClick={logout}
      className="button-red"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
