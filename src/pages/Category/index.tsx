import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from 'antd-mobile'
import useCounter from '@/store'

export default memo(function CategoryTpl (): React.ReactElement {
  const {count, increment, decrement} = useCounter();

  return (
    <div>
      <h1>分类 { count }</h1>
      <Button type='primary' onClick={ increment }>增加</Button>
      <Button type='warning' onClick={ decrement }>增加</Button>

      <NavLink to='/home'>to home</NavLink>

    </div>
  )
})
