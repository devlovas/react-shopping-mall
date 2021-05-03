import React, { memo } from 'react'

import Style from './index.module.scss'

export default memo(function HomeTpl (): React.ReactElement {

  return (
    <div className={ Style.wrapper }>
      <h1>首页</h1>
    </div>
  )
})
