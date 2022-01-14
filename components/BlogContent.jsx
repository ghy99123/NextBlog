import React from 'react'
import { marked } from 'marked'
import hljs from "highlight.js"
import 'highlight.js/styles/gml.css'
import PageStyle from '../styles/pages/detailed.module.css'

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  pedantic: false,
  sanitize: false,
  tables: true,
  breaks: false,
  smartLists: true,
  smartypants: true, 
  highlight: function (code) {
    return hljs.highlightAuto(code).value
  }
});

export default function BlogContent(post) {
  const { title, subTitle, addTime, content } = post
  const htmlContent = marked(content)
  return (
    <div>
      <div className={PageStyle.title}>{title}</div>
      <div className={PageStyle.subTitle}>{subTitle}</div>
      <div className={PageStyle.postDate}>发表于{addTime}</div>
      <div
        className={PageStyle.content}
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      >
      </div>
    </div>
  )
}
