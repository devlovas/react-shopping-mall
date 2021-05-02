import React, { memo, useState} from 'react'
import { TabBar } from 'antd-mobile'

export default memo(function DLTabbar() {

  const [selectedTab, setSelectedTab] = useState('redTab')
  const [fullScreen, ] = useState(true)
  const [hidden, ] = useState(false)

  const [tbListData, ] = useState([
    { title: '首页', key: 'home', icon: 'icon-31shouye', selIcon: 'icon-31shouyexuanzhong', },
    { title: '分类', key: 'catgeory', icon: 'icon-leimupinleifenleileibie', selIcon: 'icon-leimupinleifenleileibie2', },
    { title: '购物车', key: 'cart', icon: 'icon-31gouwuche', selIcon: 'icon-31gouwuchexuanzhong', },
    { title: '我的', key: 'me', icon: 'icon-31wode', selIcon: 'icon-31wodexuanzhong', },
  ])


  return (
     <div style={fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
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
                onPress={() => setSelectedTab(data.key)}
              />
            )
          })
         }
        </TabBar>
      </div>
  )
})
