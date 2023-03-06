import Header from "../components/header"
import Footer from "../components/footer"
import Head from "next/head"
import { ReactNode } from "react"

interface Props {
    children?: ReactNode
}

export default function format( {children}: Props ) {
    return (
        <>
            <Head>
                <title>Blog</title>
            </Head>
            <Header />
            <main> {children} </main>
            <Footer />
        </>
    )
}
