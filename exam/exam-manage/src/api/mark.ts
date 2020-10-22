/*
 * @Author: 李壮壮 
 * @Date: 2020-10-21 09:19:12 
 * @Last Modified by: 李壮壮
 * @Last Modified time: 2020-10-21 10:10:26
 */
<<<<<<< HEAD
import request from '../utils/require'; 
export function _getMarkingClass() {
    return request.get('/manger/grade ')
}
export function _examStudent(id:any){
    return request.get(`/exam/student/${id}`,)
}
export function _examKark(obj: any){
    const {id,score} =obj
    return request.put(`/exam/student/${id}`,{score})
}
export function _getStudentExam(id: string) {
    return request.get(`/exam/student`,{params:{grade_id:id}})
=======
import request from '../utils/request';
export function _getMarkingClass() {
    return request.get('/manger/grade ')
}
export function _examStudent(id: any) {
    return request.get(`/exam/student/${id}`)
}
export function _examKark(obj: any) {
    const { id, score } = obj
    return request.put(`/exam/student/${id}`, { score })
}
export function _getStudentExam(id: string) {
    return request.get(`/exam/student`, { params: { grade_id: id } })
>>>>>>> a343a85633839633e928f4fcff965bdb065b7f00
}