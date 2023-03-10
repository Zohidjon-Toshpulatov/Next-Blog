import Head from 'next/head';
import Date from '../../components/date';
import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import utilStyles from '../../styles/utils.module.css';

export default function PostDetails({ postData }) {

    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <h1 className="text-3xl font-bold text-center mb-2">
                {postData.title}<br />
            </h1>
            <div className={utilStyles.lightText}><Date dateString={postData.date} /></div>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}