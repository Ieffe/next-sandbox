import CenteredLayout from "@/components/layouts/CenteredLayout";
import MainLayout from "@/components/layouts/MainLayout";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <title>Oh no!</title>
      <CenteredLayout>
        <h1 className="font-bold text-3xl text-center">404 - NOT FOUND!</h1>
        <Link href={'/'}>
          <sub className="underline">Back to home!</sub>
        </Link>
      </CenteredLayout>
    </>
  );
}
