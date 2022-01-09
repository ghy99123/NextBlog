import '../styles/globals.css'
import 'antd/dist/antd.css'
import Head from 'next/head';
import favicon from '../public/favicon.ico'
import React from 'react';

if (!process.browser) React.useLayoutEffect = React.useEffect;



function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href={favicon.src} />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
