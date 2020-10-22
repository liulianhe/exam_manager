import request from '../utils/request';
//获取班级列表
export function _getClassList() {
    return request.get('/manger/grade')
}
// export function _getClassRoom() {
//     return request.get('/manger/room')
// }
export function _getClassName() {
    return request.get('/exam/subject')
}
export function _delClassItem(params: any) {
    return request.delete('/manger/grade/delete', { params })
}
export function _addClass(obj: any) {
    return request.post('/manger/grade', { ...obj })
}