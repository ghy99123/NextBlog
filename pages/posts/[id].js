import React from 'react'
import Head from 'next/head'
import { Row, Col } from 'antd'
import Header from '../../components/Header'
import Footer from '../../components/footer'
import Catalog from '../../components/Catalog'
import BlogContent from '../../components/BlogContent'
import CommonStyle from '../../styles/components/common.module.css'
import PageStyle from '../../styles/pages/detailed.module.css'
import {urls} from '../../utils/urls'


export default function Detailed({post}) {
  const {title, content} = post
  let markdown = content
  
  return (
    <>
      <Head>
        <title>{title} - 高翰熠的博客</title>
      </Head>
      <Header />
      <Row className={`${CommonStyle.commonMain} ${PageStyle.container}`}
        type='flex' justify='center'>
        <Col className={CommonStyle.commonBox}
          xs={23} sm={23} md={22} lg={16} xl={14}>
          <BlogContent {...post}/>
        </Col>
        <Col className={`${CommonStyle.commonBox} ${CommonStyle.commonRight}`}
          xs={0} sm={0} md={0} lg={5} xl={5}
        >
          <Catalog markdown={markdown}/>
        </Col>
      </Row>
      <Footer></Footer>
    </>
  )
}


// export async function getStaticPaths() {
//   const res = await fetch(urls.articles)
//   const posts = await res.json()
//   const paths = posts.map((post) => ({
//     params: {id: post.id.toString()}
//   }))
//   return {
//     paths,
//     fallback: false 
//   }
// }

export const getServerSideProps = async (context) => {
  const id = context.params.id
  const res = await fetch(urls.article + id)
  const post = await res.json()
  return {
    props: {post}
  }
}
