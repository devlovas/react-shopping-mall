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
