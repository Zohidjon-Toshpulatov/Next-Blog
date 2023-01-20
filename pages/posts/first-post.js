import Head from "next/head"
import Link from "next/link"
import Script from "next/script"
import Layout from "../../components/layout"
import utilStyles from './../../styles/utils.module.css'

function FirstPost() {
    return (
        <div>
            <Layout>
                <h1>First Post</h1>
            </Layout>
        </div>
    )
}

export default FirstPost