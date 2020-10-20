import request from '../utils/require';
export function _login(action: any) {
    return request.post('/user/login', action)
}

export function _getMarkingClass() {
    return request.get('/manger/grade ')
}

export function _getStudentExam(id: string) {
    return request.get(`/exam/student`,{params:{grade_id:id}})
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
    return request.get('/user/identity_api_authority_relation')}