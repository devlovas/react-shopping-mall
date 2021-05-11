import React, { memo } from 'react'
import { useHistory } from 'react-router-dom'
import { NavBar, SearchBar } from 'antd-mobile'
import style from '@/pages/Home/Header/index.module.scss'

export default memo(function HeaderTpl(): React.ReactElement {
  const history = useHistory()

  return (
    <div className={ style.wrapper }>
      <NavBar
        mode="dark"
        leftContent={<i
          style={{fontSize: '21px'}}
          className='iconfont icon-31liebiao'
          onClick={ e => history.push('/category') }/>}

        rightContent={<span
          onClick={ e => history.push('/login') }
          style={{fontSize: '18px'}}
          children='登录'/>}
      >
        <SearchBar className={ style.am_search }
        placeholder="搜索商品..."
        maxLength={8}
        onFocus={ e => history.push('/search') } />
      </NavBar>
    </div>
  )
})
