import request from '../utils/require';
//获取班级列表
export function _getClassList() {
    return request.get('/manger/grade')
}