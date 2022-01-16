import React, { Component } from 'react'
import MarkdownNavbar from 'markdown-navbar'
import 'markdown-navbar/dist/navbar.css'
import Style from '../styles/components/Catalog.module.css'

export default class Catalog extends Component {
  render() {
    let { markdown } = this.props
    return (
        <div className={Style.container}>
          <span className={Style.title}>CATALOG</span>
          <MarkdownNavbar
            className={Style.content}
            source={markdown}
            updateHashAuto={false}
            ordered={false}
          />
        </div>
    )
  }
}
