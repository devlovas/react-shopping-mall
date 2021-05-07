module.exports = (req, res) => {
  return res.json([
    {
      id: 1, // 主键
      text: '天猫新品', // 标题
      note: '备注', // 备注
      icon: 'https://gw.alicdn.com/tfs/TB1OIxTcLc3T1VjSZLeXXbZsVXa-183-144.png?getAvatar=1', // 图片地址
      url: '/acategory', // 链接地址
      type: 0, // 轮播类型
      status: 1, // 在线状态
      sort: 0 // 排序
    },
    {
      id: 2, // 主键
      text: '商品分类', // 标题
      note: '备注', // 备注
      icon: 'https://gw.alicdn.com/tfs/TB1nBktVxTpK1RjSZR0XXbEwXXa-183-144.png?getAvatar=1', // 图片地址
      url: '/category', // 链接地址
      type: 0, // 轮播类型
      status: 1, // 在线状态
      sort: 0 // 排序
    },
    {
      id: 3, // 主键
      text: '今日爆款', // 标题
      note: '备注', // 备注
      icon: 'https://gw.alicdn.com/tfs/TB1LvIxVAvoK1RjSZFDXXXY3pXa-183-144.png?getAvatar=1', // 图片地址
      url: '/category', // 链接地址
      type: 0, // 轮播类型
      status: 1, // 在线状态
      sort: 0 // 排序
    },
    {
      id: 4, // 主键
      text: '天猫超市', // 标题
      note: '备注', // 备注
      icon: 'https://gw.alicdn.com/tfs/TB1FucwVwHqK1RjSZFgXXa7JXXa-183-144.png?getAvatar=1', // 图片地址
      url: '/category', // 链接地址
      type: 0, // 轮播类型
      status: 1, // 在线状态
      sort: 0 // 排序
    },
    {
      id: 5, // 主键
      text: '充值中心', // 标题
      note: '备注', // 备注
      icon: 'https://gw.alicdn.com/tfs/TB1llI3f4n1gK0jSZKPXXXvUXXa-183-144.png?getAvatar=1', // 图片地址
      url: '/category', // 链接地址
      type: 0, // 轮播类型
      status: 1, // 在线状态
      sort: 0 // 排序
    },
    {
      id: 6, // 主键
      text: '阿里拍卖', // 标题
      note: '备注', // 备注
      icon: 'https://gw.alicdn.com/tfs/TB16ZYDk4n1gK0jSZKPXXXvUXXa-183-144.png?getAvatar=1', // 图片地址
      url: '/category', // 链接地址
      type: 0, // 轮播类型
      status: 1, // 在线状态
      sort: 0 // 排序
    },
    {
      id: 7, // 主键
      text: '造点新货', // 标题
      note: '备注', // 备注
      icon: 'https://gw.alicdn.com/tfs/TB1xcTYxFT7gK0jSZFpXXaTkpXa-183-144.png?getAvatar=1', // 图片地址
      url: '/category', // 链接地址
      type: 0, // 轮播类型
      status: 1, // 在线状态
      sort: 0 // 排序
    },
    {
      id: 8, // 主键
      text: '会员中心', // 标题
      note: '备注', // 备注
      icon: 'https://img.alicdn.com/tfs/TB1FyEazAY2gK0jSZFgXXc5OFXa-183-144.png?getAvatar=1', // 图片地址
      url: '/category', // 链接地址
      type: 0, // 轮播类型
      status: 1, // 在线状态
      sort: 0 // 排序
    },
  ])
}
