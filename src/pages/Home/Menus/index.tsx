import React, { memo, useState, useEffect, Fragment } from 'react'
import { useHistory } from 'react-router-dom'
import { Grid } from 'antd-mobile'
import { getMenus } from '@/services'
import { IMenusType } from '@/typings/home'
import Style from '@/pages/Home/Menus/index.module.scss'

export default memo(function MenusTpl (): React.ReactElement {

  const [menus, setMenus] = useState<IMenusType[]>([])
  const history = useHistory()

  useEffect(async () => {
    try { setMenus((await getMenus()).data)
    } catch(err) {console.log(err)}
  }, [])

  return (
    <Fragment>
      {
        menus.lenght !== 0 &&
        <Grid data={menus}
          columnNum={4}
          hasLine={false}
          onClick={dataItem => history.push(dataItem.url)}
          renderItem={dataItem => (
            <div className={Style.wrapper}>
              <img src={dataItem.icon} alt="" />
              <div style={{ color: '#888', fontSize: '14px', marginTop: '12px' }}>
                <span>{dataItem.text}</span>
              </div>
            </div>
          )}
        />
      }
    </Fragment>
  )
})
