import React, { memo } from 'react'
import HeaderTpl from '@/pages/Home/Header'
import BannerTpl from '@/pages/Home/Banner'
import NoticeTpl from '@/pages/Home/Notice'
import MenusTpl  from '@/pages/Home/Menus'
import ProductTpl from '@/pages/Home/Product'
import Style from './index.module.scss'

export default memo(function HomeTpl (): React.ReactElement {

  return (
    <div className={ Style.wrapper }>
      <HeaderTpl />
      <BannerTpl />
      <NoticeTpl />
      <MenusTpl  />
      <ProductTpl />
    </div>
  )
})
