import React from 'react'
import HTMLHead from '../../components/HTMLHead'
import { Row, Col} from 'antd'
import Header from '../../components/Header'
import Introheader from '../../components/IntroHeader'
import Footer from '../../components/footer'
import BlogList from '../../components/BlogList'
import commonStyle from '../../styles/components/common.module.css'
import { NOTES_BG } from '../../static/img/imgs'
import { urls } from '../../utils/urls'

export default function Notes({blogArticles}) {
  const info = {title: 'Notes', subtitle: '尽信书，则不如无书'}
  return (
    <>
      <HTMLHead title='笔记 - 高翰熠的博客' description='高翰熠的博客笔记' />
      <Header />
      <Introheader src={NOTES_BG} {...info}/>
      <main>
        <Row className={commonStyle.commonMain} type="flex" justify="center">
          <Col className={`${commonStyle.commonBox} ${commonStyle.indexBox}`} xs={23} sm={23} md={21} lg={19} xl={19}  >
            <BlogList blogArticles={blogArticles} />
          </Col>
        </Row>
      </main>
      <Footer />
    </>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(urls.articles + '?type=tech')
  const blogArticles = await res.json()
  return {
    props: { blogArticles },
    revalidate: 300
  }
}
