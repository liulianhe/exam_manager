/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: 刘连合
 * @Date: 2020-10-19 19:33:39
 * @LastEditors: 刘连合
 * @LastEditTime: 2020-10-19 21:18:53
 */
import request from "../../utils/require";

export function _getTestList(){
    return request.get('/exam/subject')
}