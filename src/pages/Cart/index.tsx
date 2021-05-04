import React, { memo } from 'react'

import Style from '@/pages/Cart/index.module.scss'

export default memo(function CartTpl (): React.ReactElement {
  return (
    <div className={ Style.wrapper }>
      <h1>购物车</h1>
    </div>
  )
});
