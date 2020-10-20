/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: 刘连合
 * @Date: 2020-10-20 09:00:15
 * @LastEditors: 刘连合
 * @LastEditTime: 2020-10-20 22:08:04
 */
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

export function _getUser() {
    return request.get('/user/user')
}
export function _getIdentityView() {
    return request.get('/user/identity_view_authority_relation')
}
export function _getViewAuth() {
    return request.get('/user/view_authority')
}
export function _getIdentity() {
    return request.get('/user/identity')
}
export function _getApiAuth() {
    return request.get('/user/api_authority')
}
export function _getIdentityApi() {
    return request.get('/user/identity_api_authority_relation')
}
