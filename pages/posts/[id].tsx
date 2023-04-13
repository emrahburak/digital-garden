import React from 'react'
import Head from 'next/head'
import * as Text from '../../components/Text'
import Layout from '../../components/Layout'
import DateFormat from '../../components/DateFormat'
import { getAllPostIds, getPostData } from '../../lib/post'
import { GetStaticProps, InferGetStaticPropsType } from 'next'


export default function Post({ postData }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (<Layout>
        <Head>
            <title>
                {postData.title}
            </title>
        </Head>
        <article>
            <Text.TextTitle>
                {postData.title}
            </Text.TextTitle>
        </article>
        <DateFormat dateString={postData.date} />
        <br />
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>);
}



export async function getStaticPaths() {
    const paths = getAllPostIds();

    return {
        paths,
        fallback: false
    }

}


export const getStaticProps: GetStaticProps = async ({ params }: any) => {
    const postData = await getPostData(params.id)
    return {
        props: {
            postData
        }
    }

}