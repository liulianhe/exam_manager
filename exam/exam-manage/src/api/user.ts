import request from '../utils/require';
export function _login(action: any) {
    return request.post('/user/login', action)
}
export function _getUserInfo() {
    return request.get('/user/userInfo')
}
export function _getUserNew(user_id: string) {
    return request.get('/user/new', { params: { user_id } })
}
export function _getUserApi() {
    return request.get('/user/identity_api_authority_relation')
}