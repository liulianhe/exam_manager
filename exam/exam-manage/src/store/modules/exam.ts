/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-10-20 13:29:15
 * @LastEditors: 郭雯
 * @LastEditTime: 2020-10-20 18:33:17
 */
import { observable, action, makeObservable } from 'mobx'
class examStore {
    //定义状态
    constructor() {
        makeObservable(this)
    }
    @observable eaxmAddInfo: {} = {};  //创建页面的信息

    @action seteaxmAddInfo = (eaxmAddInfo: string) => {
        this.eaxmAddInfo = eaxmAddInfo
        console.log(this.eaxmAddInfo)
    }
}

export default { name: 'exam', store: new examStore() }