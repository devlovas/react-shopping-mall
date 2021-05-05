import React, { memo, useState, useEffect, Fragment } from 'react'
import { Carousel } from 'antd-mobile'
import { IBannerType } from '@/typings/home'
import { getBanner } from '@/services'

export default memo(function BannerTpl() {
  const [banner, setBanner] = useState<IBannerType[]>([])

  useEffect(async () => {
    try {
      setBanner((await getBanner()).data)
    } catch(err) {console.log(err)}
  }, [])

  return (
    <Fragment>
      {
       banner.length !== 0 && <Carousel
          autoplay={true}
          infinite
          dotActiveStyle={{backgroundColor: '#108ee9'}}
        >
          {banner.map(val => (
            <a
              key={val.id}
              href={val.url}
              style={{ display: 'inline-block', width: '100%', height: 'auto' }}
            >
              <img
                src={val.pic}
                alt={val.title}
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                }}
              />
            </a>
          ))}
        </Carousel>
      }
    </Fragment>
  )
})
