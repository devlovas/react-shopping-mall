import React, { memo } from 'react'

import Style from './index.module.scss'

export default memo(function CategoryTpl (): React.ReactElement {

  return (
    <div className={ Style.wrapper }>
      <h1>分类</h1>
    </div>
  )
})
