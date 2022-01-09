import React, { useState } from 'react'
import { List } from 'antd'
import listStyle from '../styles/components/BlogList.module.css'
import BlogIntroBox from './BlogIntroBox'

export default function BlogList({ blogArticles }) {
  const [blogList, setBlogList] = useState(blogArticles)
  return (
    <List
      className={listStyle.container}
      itemLayout='vertical'
      dataSource={blogList}
      renderItem={item => {
        return (
          <List.Item>
            <BlogIntroBox {...item} />
          </List.Item>
        )
      }}
    />
  )
}
