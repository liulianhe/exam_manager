/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-10-19 18:08:04
 * @LastEditors: 郭雯
 * @LastEditTime: 2020-10-19 19:39:10
 */
import request from '../utils/require';

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