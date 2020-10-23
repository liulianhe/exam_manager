import request from '../utils/request';

//获取学生列表
export function _getStudentlist() {
  return request.get('/manger/student')
}

// 获取班级列表
export function _getClassesList() {
  return request.get('/manger/grade')
}

// 获取教室列表
export function _getClassRoomList() {
  return request.get('/manger/room')
}