import React, { memo } from 'react'
import HeaderTpl from '@/pages/Home/Header'
import BannerTpl from '@/pages/Home/Banner'
import NoticeTpl from '@/pages/Home/Notice'

import Style from './index.module.scss'

export default memo(function HomeTpl (): React.ReactElement {

  return (
    <div className={ Style.wrapper }>
      <HeaderTpl />
      <BannerTpl />
      <NoticeTpl />
    </div>
  )
})
