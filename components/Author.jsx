import React from 'react'
import { Avatar, Divider } from 'antd'
import { UserOutlined, GithubFilled } from '@ant-design/icons';
import { AVATAR } from '../static/img/imgs';
import authorStyle from '../styles/components/Author.module.css'
import commonStyle from '../styles/components/common.module.css'

export default function Author() {
  return (
    <div className={`${commonStyle.commonBox} ${commonStyle.commonRight} ${authorStyle.container}`}>
      <div><Avatar shape="square" size={130} src={AVATAR} /></div>
      高翰熠, 前端小学生<br />
      Master of Information Technology
      <Divider>账号</Divider>
      <a href="https://github.com/ghy99123">
        <Avatar size={28} icon={<GithubFilled />} className={authorStyle.account} />
      </a>
    </div>
  )
}
