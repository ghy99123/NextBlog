import React from 'react'
import Link from 'next/link'
import listStyle from '../styles/components/BlogList.module.css'

export default function BlogIntroBox(item) {
  const {title, subTitle, introduce, addTime, id} = item
  
  return (
    <div className={listStyle.item}>
      <Link href={{ pathname: '/posts/[id]', query: { id: id } }}>
        <a className={listStyle.title}>
          <div className={listStyle.mainTitle}>{title}</div>
          <div className={listStyle.subTitle}>{subTitle}</div>
        </a>
      </Link>
      <div className={listStyle.content}>{introduce}</div>
      <div className={listStyle.footer}>发表于 {addTime}</div>
    </div>
  )
}
