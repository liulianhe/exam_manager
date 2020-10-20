/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: 刘连合
 * @Date: 2020-10-19 19:33:39
 * @LastEditors: 刘连合
 * @LastEditTime: 2020-10-20 20:16:42
 */
import request from "../utils/require";

export function _getObjectList(){
    return request.get('/exam/subject')
}
export function _getExamList(){
    return request.get('/exam/examType')
}
export function _getQuestionsList(){
    return request.get('/exam/getQuestionsType')
}

export function _getAllQuestions(){
    return request.get('/exam/questions/new')
}

export function _searchList(params: any){
    return request.get('/exam/questions/condition',{params})
}


export function _insertQuestionsType (params: any){
    return request.get('/exam/insertQuestionsType',{params})
}

export function _delQuestionsType (params: any){
    return request.post('/exam/delQuestionsType',params)
}