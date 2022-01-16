import React from 'react'
import Image from 'next/image'
import Style from '../styles/components/IntroHeader.module.css'

export default function Introheader(props) {
  const {src, title, subtitle} = props
  return (
    <header className={Style.introHeader}>
      <Image 
        className={Style.bgImg}
        layout='fill'
        alt='Backgroud Image'
        src={src}
        priority
      />
      <div className={Style.container}>
        <h3 className={Style.title}>{title}</h3>
        <div className={Style.subtitle}>{subtitle}</div>
      </div>
    </header>
  )
}
