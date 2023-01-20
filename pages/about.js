import Head from "next/head"
import Layout from "../components/layout"

function About({ name }) {
    return (
        <Layout>
            <Head>
                <title>About myself {name}</title>
            </Head>
            <h1 className="text-3xl">My name is <span className="text-cyan-500">{name}</span></h1>
        </Layout>
    )
}

export default About

export async function getStaticProps() {
    const name = await (await fetch('http://localhost:3000/api/hello')).json();

    return {
        props: {
            name: name.name
        }
    }
}