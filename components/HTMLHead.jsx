import Head from 'next/head'
import React from 'react'

export default function HTMLHead(props) {
  const { title, description } = props
  return (
    <Head>
      <title>{title}</title>
      <meta name="keywords" content="高翰熠, 高翰熠的博客" />
      <meta name="description" content={description} />
      <meta name="author" content="高翰熠" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}
