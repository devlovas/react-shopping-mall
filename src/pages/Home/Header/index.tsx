import React, { memo } from 'react'
import { useSelectedTab, useTabHidden } from '@/store'
import { useHistory } from 'react-router-dom'
import { NavBar, SearchBar } from 'antd-mobile'

import style from '@/pages/Home/Header/index.module.scss'

export default memo(function DLHeader() {

  const history = useHistory()
  const [, setSelectedTab] = useSelectedTab()
  const [, setHidden] = useTabHidden()

  return (
    <div className={ style.wrapper }>
      <NavBar
        mode="dark"
        leftContent={<i
          style={{fontSize: '21px'}}
          className='iconfont icon-31liebiao'
          onClick={ e => (history.push('/category'), setSelectedTab('category')) }/>}

        rightContent={<span
          onClick={ e => (history.push('/login'), setHidden(true)) }
          style={{fontSize: '18px'}}
          children='登录'/>}
      >
        <SearchBar className={ style.am_search }
        placeholder="搜索商品..."
        maxLength={8}
        onFocus={ e => (history.push('/search'), setHidden(true)) } />
      </NavBar>
    </div>
  )
})
