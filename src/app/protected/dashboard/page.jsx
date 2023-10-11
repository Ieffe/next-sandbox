import { redirect } from "next/navigation";
import LogoutButton from "./components/LogoutButton";
import { cookies } from "next/headers";

const Page = () => {
  const cookieStore = cookies();
  const token = JSON.parse(cookieStore.get("token").value);
  console.log(token);
  const logout = () => {
    redirect('/protected')
  }
    return <>
        <p>Logged in as {token.firstName + ' ' + token.lastName}</p>
       <LogoutButton
       ></LogoutButton>
    </>;
};

export default Page;
