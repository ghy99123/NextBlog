import React from 'react'
import Style from '../styles/components/IntroHeader.module.css'

export default function Introheader(props) {
  const {src, title, subtitle} = props
  return (
    <header className={Style.introHeader} style={{backgroundImage: `url(${src})`}}>
      <div className={Style.container}>
        <h3 className={Style.title}>{title}</h3>
        <div className={Style.subtitle}>{subtitle}</div>
      </div>
    </header>
  )
}
