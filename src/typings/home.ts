export interface IBannerType {
  id: number // 主键
  titile: string // 标题
  note: string // 备注
  pic: string // 图片地址
  url: string // 链接地址
  type: number // 轮播类型
  status: number // 在线状态
  sort: number // 排序
}

export interface INoticeType {
  id: number
  title: string
  note: string
  url: string
  type: number
  status: number
  sort: number
}

export interface IMenusType {
  id: number // 主键
  text: string // 标题
  note: string // 备注
  icon: string // 图片地址
  url : string // 链接地址
  type: number // 轮播类型
  status: number // 在线状态
  sort: number // 排序
}

export interface IProductType {
  id: number // 主键
  name: string // 商品名称
  pics: string[] // 商品图
  price: number // 销售价
  sale: number // 销量
  note: string // 备注

  new_status: number // 新品状态
  verify_status: number // 审核状态
  publish_status: number // 上架状态
  recommand_status: number // 推荐状态
}
