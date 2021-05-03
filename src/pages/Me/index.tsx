import React, { memo } from 'react'

import Style from '@/pages/Me/index.module.scss'

export default memo(function MeTpl (): React.ReactElement {
  return (
    <div className={ Style.wrapper }>
      <h1>个人中心</h1>
    </div>
  )
});
