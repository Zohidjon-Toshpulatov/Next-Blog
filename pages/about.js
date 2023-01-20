import Head from "next/head"
import Layout from "../components/layout"

function About() {
    return (
        <Layout>
            <Head>
                <title>About myself Zohidjon Toshpulatov</title>
            </Head>
            <h1 className="text-3xl">My name is <span className="text-cyan-500">Zohidjon Toshpulatov</span></h1>
        </Layout>
    )
}

export default About;