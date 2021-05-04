import React, { memo, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { TabBar } from 'antd-mobile'

import Style from '@/components/DLTabbar/index.module.scss'

export default memo(function DLTabbar() {

  const [selectedTab, setSelectedTab] = useState('redTab')
  const [hidden, ] = useState(false)
  const history = useHistory()

  const [tbListData, ] = useState([
    { title: '首页', key: 'home', icon: 'icon-31shouye', selIcon: 'icon-31shouyexuanzhong', },
    { title: '分类', key: 'category', icon: 'icon-leimupinleifenleileibie', selIcon: 'icon-leimupinleifenleileibie2', },
    { title: '购物车', key: 'cart', icon: 'icon-31gouwuche', selIcon: 'icon-31gouwuchexuanzhong', },
    { title: '我的', key: 'me', icon: 'icon-31wode', selIcon: 'icon-31wodexuanzhong', },
  ])

  useEffect(() => {
    const pathName = history.location.pathname.substr(1)
    setSelectedTab(pathName) // 手动更改Location path 后同时切换菜单图标
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className={ Style.wrapper }>
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="white"
        hidden={hidden}
      >
       {
        tbListData.map(data => {
          return (
            <TabBar.Item
              title={ data.title }
              key={ data.key }
              icon={<div style={{fontSize: '27px'}} className={`iconfont ${ data.icon }`} />}
              selectedIcon={<div style={{fontSize: '27px'}} className={`iconfont ${ data.selIcon }`} />}
              selected={selectedTab === data.key}
              onPress={() => {
                setSelectedTab(data.key)
                history.push('/' + data.key)
              }}
            />
          )
        })
       }
      </TabBar>
    </div>
  )
})
