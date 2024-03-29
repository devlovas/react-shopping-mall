import React, { memo, useState, useEffect, Fragment } from 'react'
import { Carousel } from 'antd-mobile'
import { getNotice } from '@/services'
import { INoticeType } from '@/typings/home'

import Style from '@/pages/Home/Notice/index.module.scss'

export default memo(function NoticeTpl(): React.ReactElement {
  const [notice, setNotice] = useState<INoticeType[]>([])

  useEffect(async () => {
    try { setNotice((await getNotice()).data)
    } catch(err) { console.log(err) }
  }, [])

  return (
    <Fragment>
      {
        notice.length !== 0 &&
        <div className={ Style.wrapper }>
            <i className='iconfont icon-tongzhi'></i>
            <Carousel
              vertical
              dots={false}
              autoplay
              infinite
            >
              {
                notice.map(val => (
                  <div key={val.id} className={ Style.noticeText }>{val.title}</div>
                ))
              }
            </Carousel>
        </div>
      }
    </Fragment>
  )
})
