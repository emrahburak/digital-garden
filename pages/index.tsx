import Head from 'next/head'
import Link from 'next/link'

import { GetStaticProps, InferGetStaticPropsType } from 'next'
import Layout, { siteTitle } from '../components/Layout'
import DateFormat from '@/components/DateFormat'
import * as Text from '@/components/Text'
import Button from '@/components/Button'

import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ allPostData }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <Text.TextBody>Merhaba ben Emrah</Text.TextBody>
        <Text.TextBody>
          (This is a sample website - you’ll be building a site like this on{' '}
        </Text.TextBody>
      </section>
      <Button href={'https://nextjs.org/learn'}>
        <Text.TextButton>our Next.js tutorial</Text.TextButton>
      </Button>
      <section>
        <Text.TextTitle>
          Blog
        </Text.TextTitle>
        <ul>
          {allPostData.map(({ id, date, title }: { id: string, date: string, title: string }) => (
            <li key={id}>
              <Button href={`/posts/${id}`}>
                <Text.TextTitle>{title}</Text.TextTitle>
              </Button>
              <small>
                <DateFormat dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}


import { getSortedPostsData } from '@/lib/post'

export const getStaticProps: GetStaticProps = async () => {
  const allPostData = await getSortedPostsData();
  return {
    props: {
      allPostData,
    },
  };
}