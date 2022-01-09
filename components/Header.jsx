import React, { useEffect, useState } from 'react'
import { Row, Col, Menu } from 'antd'
import Router from 'next/router'
import Style from '../styles/components/Header.module.css'

export default function Header() {

  const [HOME, NOTES, LIFE, ABOUT] = ['home', 'notes', 'life', 'about']
  const menuItems = [
    { key: HOME, value: 'HOME' },
    { key: NOTES, value: 'NOTES' },
    { key: LIFE, value: 'LIFE' },
  ]
  let lastScroll = 0

  const handleClick = (e) => {
    if (e.key === HOME) {
      Router.push('/', undefined, { scroll: false })
    } else if (e.key === LIFE) {
      Router.push('/life')
    } else if (e.key === NOTES) {
      Router.push('/notes')
    }
  }

  const onLogoClick = () => {
    Router.push('/', undefined, { scroll: false })
  }

  //鼠标向下滚动隐藏导航栏，向上滚动显示导航栏
  const controlHeader = () => {
    if (window.scrollY > lastScroll) {
      setNeedFixed(false)
    } else {
      setNeedFixed(true)
    }
    lastScroll = window.scrollY
  }

  //导航栏是否固定
  const [needFixed, setNeedFixed] = useState(true)
  useEffect(() => {
    window.addEventListener('scroll', controlHeader)
    return () => {
      window.removeEventListener('scroll', controlHeader)
    }
  }, [])


  return (
    <header className={`${Style.header} ${needFixed ? Style.headerFixed : Style.headerInvisible}`}>
      <Row type='flex' justify='center'>
        <Col xs={22} sm={22} md={7} lg={10} xl={10}>
          <span className={Style.logo} onClick={onLogoClick}>ghyyy</span>
        </Col>
        <Col className={Style.menuDiv} xs={2} sm={2} md={14} lg={9} xl={9}>
          <Menu mode='horizontal' className={Style.menu} onClick={handleClick}>
            {
              menuItems.map((menuItem) => {
                return (
                  <Menu.Item key={menuItem.key} className={Style.menuItem}>
                    {menuItem.value}
                  </Menu.Item>
                )
              })
            }
          </Menu>
        </Col>
      </Row>
    </header>
  )
}
