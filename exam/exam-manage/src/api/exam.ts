<<<<<<< HEAD
import request from '../utils/require';
=======
import request from '../utils/request';
>>>>>>> a343a85633839633e928f4fcff965bdb065b7f00
//考试类型
export function _examType() {
    return request.get('/exam/examType')
}
//选择课程
export function _subject() {
    return request.get('/exam/subject')
}
//添加考试
export function _questions() {
    return request.post('/exam/questions')
}

export function _questionsNew() {
    return request.get('/exam/questions/new')
}

//题目类型 /exam/
export function _getQuestionsType() {
    return request.get('/exam/getQuestionsType')
}

//所有试题根据条件获取接口  /exam/questions/condition
export function _questionsCondition(params: {}) {
    return request.get('/exam/questions/condition', {
        params
    })
}
//列表 
export function _examExam() {
    return request.get('/exam/exam')
}

//跳转
export function _examExamId(exam_id: string) {
    return request.get(`/exam/exam/${exam_id}`)
}


//添加考试 
export function _examExamP(obj: {}) {
    return request.post('/exam/exam', obj)
}

export function _examExamPut(arr: string[], exam_id: string) {
    let question_ids = JSON.stringify(arr)
    return request.put(`/exam/exam/${exam_id}`, { question_ids })
}