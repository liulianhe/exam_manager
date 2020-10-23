/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: 刘连合
 * @Date: 2020-10-23 07:07:08
 * @LastEditors: 刘连合
 * @LastEditTime: 2020-10-23 14:40:19
 */
export interface IProps {
  props: any,
}
export interface IState {
  list: any[],
  classList: any[],
  classRoom: any[],
  studentUser: any,
  classRoomname: any,
  className: any,
  columns: any[],
  id: number,
  visible: boolean,
  text: string,
  pagination:{},
  pageSize:number,
}
