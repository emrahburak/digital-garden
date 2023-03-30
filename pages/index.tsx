import Head from 'next/head'
import Layout, { siteTitle } from '../components/Layout'
import * as Text from '@/components/Text'
import Button from '@/components/Button'

import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
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
    </Layout>
  )
}
