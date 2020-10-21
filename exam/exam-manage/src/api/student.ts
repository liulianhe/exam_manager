import require from '../utils/require';

//获取学生列表
export function _getStudentlist() {
  return require.get('/manger/student')
}

// 获取班级列表
export function _getClassesList() {
  return require.get('/manger/grade')
}

// 获取教室列表
export function _getClassRoomList() {
  return require.get('/manger/room')
}