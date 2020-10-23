/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: 刘连合
 * @Date: 2020-10-21 18:23:12
 * @LastEditors: 刘连合
 * @LastEditTime: 2020-10-21 18:34:43
 */
import { _getObjectList, _getExamList, _getQuestionsList } from '../../../../api/questions'

 export async function  _getList() {
    let res_Object = await _getObjectList()
    let res_Questions = await _getQuestionsList()
    let res_Exam = await _getExamList()

    let QuestionsList: any[] = []
    res_Questions.data.data.forEach((item: any) => {
        item.value = item.questions_type_id
        item.label = item.questions_type_text
        QuestionsList.push(item)
    })

    let ExamList: any[] = []
    res_Exam.data.data.forEach((item: any) => {
        item.value = item.exam_id
        item.label = item.exam_name
        ExamList.push(item)
    })

    let subject_list: any[] = []
    res_Object.data.data.forEach((item: any) => {
        item.value = item.subject_id
        item.label = item.subject_text
        subject_list.push(item)
    })
    subject_list.unshift({ subject_text: "All", subject_id: 100 })
    return { QuestionsList:QuestionsList, ExamList:ExamList,subject_list:subject_list}
}
