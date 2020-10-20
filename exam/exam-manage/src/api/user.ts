import request from '../utils/require';
export function _login(action: any) {
    return request.post('/user/login', action)
}
//获取班级列表
export function _getClassList() {
    return request.get('/manger/grade')
}