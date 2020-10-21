
import require from '../utils/require';
//获取班级列表
export function _getClassList() {
    return require.get('/manger/grade')
}

// 添加教室号
export function _addClassList(params:any) {
    return require.post('/manger/room',params);
}

// 删除教室
export function _delClassList(param:any) {
    return require.delete('/manger/room/delete',{params:{...param}});
}