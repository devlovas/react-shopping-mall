import React, { memo } from 'react'
import DLHeader from '@/pages/Home/Header'

import Style from './index.module.scss'

export default memo(function HomeTpl (): React.ReactElement {

  return (
    <div className={ Style.wrapper }>
      <DLHeader />
    </div>
  )
})
