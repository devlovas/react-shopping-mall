import React, { memo, useState, useEffect, Fragment } from 'react'
import { useHistory } from 'react-router-dom'
import Style from '@/pages/Home/Product/index.module.scss'
import { IProductType } from '@/typings'
import { getProduct } from '@/services'

export default memo(function ProductTpl (): React.ReactElement {

  const [product, setProduct] = useState([])
  const history = useHistory()

  useEffect(async () => {
    try{
      setProduct((await getProduct()).data)
    } catch(err) { console.log(err) }
  }, [])

  return (
    <Fragment>
      {
        product.lenght !== 0 &&
        <div className={Style.wrapper}>
          {
            product.map(dataItem => {
              return (
                <div className={Style.product}
                  onClick={
                    () => history.push(`/product/detail/${dataItem.id}`)
                  }
                >
                  <img src={dataItem.pics[0]} alt="" />
                  <h2>{dataItem.name}</h2>
                  <em>
                    ¥
                    <span>{parseInt(dataItem.price)}</span>.
                    {parseFloat(dataItem.price).toFixed(2).split('.')[1]}
                  </em>
                  <span>{dataItem.sale}人已购买</span>
                </div>
              )
            })
          }
        </div>
      }
    </Fragment>
  )
})
