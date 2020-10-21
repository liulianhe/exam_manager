/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: 刘连合
 * @Date: 2020-10-20 08:12:48
 * @LastEditors: 刘连合
 * @LastEditTime: 2020-10-20 22:18:13
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