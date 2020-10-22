/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: 刘连合
 * @Date: 2020-10-19 19:33:39
 * @LastEditors: 刘连合
 * @LastEditTime: 2020-10-21 21:21:22
 */
import request from "../utils/request";
interface addUpdate {
    exam_id?: string,
    exam_name?: string,
    json_path?: string,
    questions_answer?: string,
    questions_id?: string,
    questions_stem?: string,
    questions_type_id?: string,
    questions_type_text?: string,
    subject_id?: string,
    subject_text?: string,
    title?: string,
    user_id?: string,
    user_name?: string,
}
export function _getObjectList() {
    return request.get('/exam/subject')
}
export function _getExamList() {
    return request.get('/exam/examType')
}
export function _getQuestionsList() {
    return request.get('/exam/getQuestionsType')
}

export function _getAllQuestions() {
    return request.get('/exam/questions/new')
}

export function _searchList(params: addUpdate) {
    return request.get('/exam/questions/condition', { params })
}


export function _insertQuestionsType(params: { text: string, sort: number }) {
    return request.get('/exam/insertQuestionsType', { params })
}

export function _delQuestionsType(params: { id: string }) {
    return request.post('/exam/delQuestionsType', params)
}

export function _addNewQuestion(params: addUpdate) {
    return request.post('/exam/questions', params)
}

export function _updateQuestion(params: addUpdate) {
    return request.put('/exam/questions/update', params)
}