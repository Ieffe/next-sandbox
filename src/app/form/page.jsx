import Form from './components/HookForm'
import styles from './form.module.css'
const { default: MainLayout } = require("@/components/layouts/MainLayout")

const Page = () => {

    return(
        <MainLayout>
            <p className="self-start mb-4">In this page, i'm trying a <span className={styles.span}>react-hook-form</span> plugin for comparing its feature with only using vanilla react Hooks. The form you see below is the one that uses <span className={styles.span}>react-hook-form</span> </p>
            <Form></Form>
        </MainLayout>
    )
}

export default Page