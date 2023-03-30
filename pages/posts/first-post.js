import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/Layout'

function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
    </Layout>
  )
}

export default FirstPost
