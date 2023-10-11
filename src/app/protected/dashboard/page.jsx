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
      <div>
        {/* <Image src={token.image} width={350} height={350}></Image> */}
      </div>
    </>
  );
};

export default Page;
