import React from 'react'
import { Row, Col } from 'antd'
import HTMLHead from '../components/HTMLHead'
import Header from '../components/Header'
import IntroHeader from '../components/IntroHeader'
import { HOME_BG } from '../static/img/imgs'
import Footer from '../components/footer'
import Author from '../components/Author'
import BlogList from '../components/BlogList'
import commonStyle from '../styles/components/common.module.css'
import { urls } from '../utils/urls'
import Clock from '../components/Clock/Clock'

export default function Home({ blogArticles }) {
  const info = { title: 'Blog', subtitle: 'Giving is a reward in itself.' }
  return (
    <>
      <HTMLHead title='首页 - 高翰熠的博客' description='高翰熠的博客' />
      <Header />
      <IntroHeader src={HOME_BG} {...info} />
      <main>
        <Row className={commonStyle.commonMain} type="flex" justify="center">
          <Col className={`${commonStyle.commonBox} ${commonStyle.indexBox}`} xs={23} sm={23} md={17} lg={18} xl={15}  >
            <BlogList blogArticles={blogArticles} />
          </Col>
          <Col xs={0} sm={0} md={6} lg={5} xl={4} >
            <Row gutter={[0, 8]}>
              <Clock />
              <Author />
            </Row>
          </Col>
        </Row>
      </main>
      <Footer />
    </>
  )
}

//获取所有笔记
export const getStaticProps = async () => {
  const res = await fetch(urls.articles)
  const blogArticles = await res.json()
  return {
    props: { blogArticles },
    revalidate: 300
  }
}
