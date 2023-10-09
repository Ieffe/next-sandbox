import MainLayout from "@/components/layouts/MainLayout"

const Page = () => {

    return(
        <MainLayout>
            <h1 className="font-bold">Catch-all Segment Route</h1>
            <p>Try to write anything after '/catch-all'</p>
        </MainLayout>
    )
}

export default Page