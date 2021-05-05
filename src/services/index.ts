import http from '@/services/_https'

export const getBanner = () => http.get('/api/banner')
export const postUser = () => http.post('/api/user')
