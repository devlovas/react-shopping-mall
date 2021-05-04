import http from '@/services/_https'

export const getUser = () => http.get('/api/user')
export const postUser = () => http.post('/api/user')

const temp = {}

export default temp
