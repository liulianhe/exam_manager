/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-10-19 11:27:02
 * @LastEditors: 郭雯
 * @LastEditTime: 2020-10-21 21:49:26
 */
import { observable, action, makeObservable } from 'mobx'
class userStore {
    //定义状态
    constructor() {
        makeObservable(this)
    }
    @observable token: string = '';
    @observable userInfo: any = {};

    //事件
    @action setToken = (token: string) => {
        this.token = token
    }
    @action setUserInfo = (userInfo: string) => {
        this.userInfo = userInfo
    }
}

export default { name: 'user', store: new userStore() }