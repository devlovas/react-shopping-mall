module.exports = (req, res) => {
  return res.json([
    {id: 1, title: '首页', key: 'home', icon: 'icon-31shouye', selIcon: 'icon-31shouyexuanzhong', },
    {id: 2, title: '分类', key: 'category', icon: 'icon-leimupinleifenleileibie', selIcon: 'icon-leimupinleifenleileibie2', },
    {id: 3, title: '购物车', key: 'cart', icon: 'icon-31gouwuche', selIcon: 'icon-31gouwuchexuanzhong', },
    {id: 4, title: '我的', key: 'me', icon: 'icon-31wode', selIcon: 'icon-31wodexuanzhong', }
  ])
}
