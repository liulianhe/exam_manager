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