import React, { memo, useState, useEffect, Fragment } from 'react'
import { useSelectedTab, useTabHidden } from '@/store'
import { useHistory } from 'react-router-dom'
import { TabBar } from 'antd-mobile'
import { getFtMenu } from '@/services'

import Style from '@/components/DLTabbar/index.module.scss'

export default memo(function DLTabbar() {
  const [selectedTab, ] = useSelectedTab()
  const [footMenu, setFootMenu] = useState([])
  const [hidden, ] = useTabHidden()
  const history = useHistory()

  useEffect(async () => {
    const res = await getFtMenu()
    setFootMenu(res.data)
  }, [])

  return (
    <Fragment>
      {
        footMenu.lenght !== 0 &&
        <div className={ Style.wrapper }>
          <TabBar
            unselectedTintColor="#949494"
            tintColor="#33A3F4"
            barTintColor="white"
            hidden={hidden}
          >
           {
            footMenu.map(val => {
              return (
                <TabBar.Item
                  title={ val.title }
                  key={ val.key }
                  icon={<div style={{fontSize: '27px'}} className={`iconfont ${ val.icon }`} />}
                  selectedIcon={<div style={{fontSize: '27px'}} className={`iconfont ${ val.selIcon }`} />}
                  selected={selectedTab === val.key}
                  onPress={() => history.push('/' + val.key) }
                />
              )
            })
           }
          </TabBar>
        </div>
      }
    </Fragment>
  )
})
