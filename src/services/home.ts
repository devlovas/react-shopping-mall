import http from '@/services/_https'

export const getBanner = () => http.get('/api/banner')
export const getNotice = () => http.get('/api/notice')
export const getMenus  = () => http.get('/api/menus')
