import request from '../utils/require';
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
export function _delClassItem(grade_id:string) {
    return request.delete('/manger/grade/delete',{params:{grade_id}})
 
  
}