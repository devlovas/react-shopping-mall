import React, { memo, useState, useEffect, Fragment } from 'react'
import { useHistory } from 'react-router-dom'
import { Carousel } from 'antd-mobile'
import { getProduct } from '@/services'
import { IProductType } from '@/typings'
import Style from '@/components/Detail/index.module.scss'

export default memo(function DetailTpl(props: React.PropsWithChildren<any>): React.ReactElement {
  const productId: string = props.match.params.id
  const [product, setProduct] = useState<IProductType[]>([])
  const [currentIdx, setCurrentIdx] = useState(0)
  const history = useHistory()

  useEffect(async () => {
    const res = await getProduct()
    const product = res.data.filter((dataItem: IProductType) => String(dataItem.id) === productId)
    setProduct(product)
  }, [])

  return (
    <Fragment>
      {
        product.length !== 0 &&
        <div className={Style.wrapper}>
          <header>
            <Carousel
              autoplay={product[0]}
              infinite
              dots={false}
              selectedIndex={currentIdx}
              afterChange={(from, to) => setCurrentIdx(from)}
            >
              {
                product[0].pics.map((url, index) => (
                  <img
                    src={url}
                    key={index}
                    style={{ width: '100%', verticalAlign: 'top' }}
                    onLoad={() => {
                      window.dispatchEvent(new Event('resize'));
                    }}
                  />
                ))
              }
            </Carousel>
            <ul className={Style.minImgs}>
              {
                product[0].pics.map((url, index) => (
                  <li
                    key={index}
                    onClick={e => setCurrentIdx(index)}
                  >
                    <img
                      src={url}
                      style={{ border: currentIdx === index && '1px solid #c0392b'}}
                      onLoad={() => { window.dispatchEvent(new Event('resize')) }}
                    />
                  </li>
                ))
              }
            </ul>
            <div className={Style.head_menu_bar}>
              <button className={Style.head_back}
                onClick={e => history.push('/home')}
              ></button>
              <button className={Style.head_nav_btn}></button>
            </div>
          </header>

          <div className={Style.buyArea}>
            <div className={Style.price_wrap}>
                <em>
                  ¥<span>{parseInt(product[0].price)}</span>.
                  {parseFloat(product[0].price).toFixed(2).split('.')[1]}
                </em>
                <span className={Style.favour}>收藏</span>
                <span className={Style.cheaper_info}>降价提醒</span>
            </div>
            <div className={Style.fn_wrap}>
              <h2>{product[0].name}</h2>
              {
                product[0].note &&
                <span className={Style.itemDesc}>{product[0].note}</span>
              }
            </div>
          </div>
        </div>
      }
    </Fragment>
  )
})
