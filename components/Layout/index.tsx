import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import getConfig from 'next/config'

import * as Text from '@/components/Text'
import Button from '@/components/Button'
import Picture from '@/components/Picture'

// import ProfilePıc from '../../public/images/profile.jpg'
import ProfilePıc from '@/images/profile.jpg'



import styles from './layout.module.css'

const {publicRuntimeConfig } = getConfig();

const name = 'emrahburak'
export const siteTitle = 'Next.js sample digital garden'

function Layout({
  children,
  home
}: {
  children?: React.ReactNode
  home?: Boolean
}) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src ={ProfilePıc}
              // src={`${publicRuntimeConfig.staticFolder}/${LogoLight}`}
              height={144}
              width={144}
              alt=""
            />

            <Text.TextTitle>{name}</Text.TextTitle>
          </>
        ) : (
          <>
            <Link href="/">
              <Picture
                priority
                src={ProfilePıc}
                size={{ width: 108, height: 108 }}
                alt={''}
              />
            </Link>
            <Button href="/">
              <Text.TextButton>{name}</Text.TextButton>
            </Button>
            {/* <Link href="/">{name}</Link> */}
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div>
          <Button href="/">
            <Text.TextButton>Back to home</Text.TextButton>
          </Button>
          {/* <Link href="/">Back to Home</Link> */}
        </div>
      )}
    </div>
  )
}

export default Layout
