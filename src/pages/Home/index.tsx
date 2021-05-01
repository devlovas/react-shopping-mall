import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from 'antd-mobile'
import { getUser, postUser } from '@/services'


export default memo(function HomeTpl (): React.ReactElement {

  return (
    <div>
      <h1>首页</h1>
      <Button type='primary' onClick={ getUser }>GET</Button>
      <Button type='warning' onClick={ postUser }>POST</Button>
      <NavLink to='/category'>to categroy</NavLink>

    </div>
  )
})
