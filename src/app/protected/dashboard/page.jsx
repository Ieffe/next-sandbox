import { cookies } from "next/headers";
import DashboardNav from "./components/DashboardNav";

const Page = () => {
  const cookieStore = cookies();
  const token = JSON.parse(cookieStore.get("token").value);
  return (
    <>
      <DashboardNav
      name={token.firstName + ' ' + token.lastName}
      img={token.image}
      />
    </>
  );
};

export default Page;
