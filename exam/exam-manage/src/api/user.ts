<<<<<<< HEAD
/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-10-21 22:24:51
 * @LastEditors: 郭雯
 * @LastEditTime: 2020-10-21 22:28:35
 */

import request from '../utils/require'; 

=======
import request from '@/utils/request';
>>>>>>> a343a85633839633e928f4fcff965bdb065b7f00
export function _login(action: any) {
    return request.post('/user/login', action)
}

<<<<<<< HEAD

=======
export function _getMarkingClass() {
    return request.get('/manger/grade ')
}


export function _examStudent(id: any) {

    return request.get(`/exam/student/${id}`)
}

export function _examKark(obj: any) {
    const { id, score } = obj
    // console.log(scores)
    return request.put(`/exam/student/${id}`, { score })
}
export function _getStudentExam(id: string) {
    return request.get(`/exam/student`, { params: { grade_id: id } })
}
>>>>>>> a343a85633839633e928f4fcff965bdb065b7f00

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

export function _addUser(action: any) {
    return request.post('/user', action)
}

export function _EditUser(action: any) {
    return request.put('/user/user', action)
}

export function _addIdentity(action: any) {
    return request.get('/user/identity/edit', { params: action })
}

export function _addApi(action: any) {
    return request.get('/user/authorityApi/edit', { params: action })
}

export function _addView(action: any) {
    return request.get('/user/authorityView/edit', { params: action })
}

export function _setIdentityApi(action: any) {
    return request.post('/user/setIdentityApi', action)
}
export function _setIdentityView(action: any) {
    return request.post('/user/setIdentityView', action)
}