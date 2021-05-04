import React, { memo } from 'react'
import { NavBar, SearchBar } from 'antd-mobile'

import style from '@/pages/Home/Header/index.module.scss'

export default memo(function DLHeader() {
  return (
    <div className={ style.wrapper }>
      <NavBar
        mode="dark"
        leftContent={<i style={{fontSize: '21px'}} className='iconfont icon-31liebiao'/>}
        rightContent={<span style={{fontSize: '18px'}} children='登录'/>}
      >
        <SearchBar className={ style.am_search }
        placeholder="搜索商品..."
        maxLength={8}
        disabled />
      </NavBar>
    </div>
  )
})
