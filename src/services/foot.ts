import http from '@/services/_https'

export const getFtMenu = () => http.get('/api/footmenu')
