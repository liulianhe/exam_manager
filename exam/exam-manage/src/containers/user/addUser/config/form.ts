
/**
 * form数据介绍
 * @param name string form.item的命名空间
 * @param placeholder string 提示信息
 * @param rules Array 规则
 * @param pwd boolean 是否为密码框
 * @param select boolean 是否为下拉框
 * @param key string select.option的key值
 * @param text string select.option的text值
 * @param list string select.option数据
 */


export const addUserForm = [
    {
        name: 'user_name',
        placeholder: '请输入用户名',
        rules: [{
            pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/g,
            message: '用户名字母、数字,长度6-12'
        }],
    },
    {
        name: 'user_pwd',
        placeholder: '请输入密码',
        rules: [{
            pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?!.*([~!@&%$^\\(\\)#_]).*\\1.*\\1)[A-Z0-9a-z~!@&%$^\\(\\)#_]{8,16}$/g,
            message: '密码包含特殊符号、数字、字母、大写字母,长度8-16'
        }],
        pwd: true,
    },
    {
        name: 'identity_id',
        placeholder: '请选择身份',
        select: true,
        key: 'identity_id',
        text: 'identity_text',
        list: []
    }
]
export const editUserForm = [
    {
        name: 'user_id',
        placeholder: '请选择用户',
        select: true,
        key: 'user_id',
        text: 'user_name',
        list: []
    },
    {
        name: 'user_name',
        placeholder: '请输入用户名',
        rules: [{
            pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/g,
            message: '用户名字母、数字,长度6-12'
        }],
    },
    {
        name: 'user_pwd',
        placeholder: '请输入密码',
        rules: [{
            pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?!.*([~!@&%$^\\(\\)#_]).*\\1.*\\1)[A-Z0-9a-z~!@&%$^\\(\\)#_]{8,16}$/g,
            message: '密码包含特殊符号、数字、字母、大写字母,长度8-16'
        }],
        pwd: true,
    },
    {
        name: 'identity_id',
        placeholder: '请选择身份',
        select: true,
        key: 'identity_id',
        text: 'identity_text',
        list: []
    }
]
export const addIdFrom = [
    {
        name: 'identity_text',
        placeholder: '请输入身份名称',
    }
]

export const addApiFrom = [
    {
        name: 'api_authority_text',
        placeholder: '请输入api接口权限名称',
    },
    {
        name: 'api_authority_url',
        placeholder: '请输入api接口权限url',
    },
    {
        name: 'api_authority_method',
        placeholder: '请输入api接口权限方法',
    }
]
export const addViewFrom = [
    {
        name: 'view_authority_text',
        placeholder: '请输入视图权限描述',
    },
    {
        name: 'view_id',
        placeholder: '请输入视图id',
    }
]
export const idSetApiFrom = [
    {
        name: 'identity_id',
        placeholder: '请选择身份',
        select: true,
        key: 'identity_id',
        text: 'identity_text',
        list: []
    },
    {
        name: 'api_authority_id',
        placeholder: '请选择api权限',
        select: true,
        key: 'api_authority_id',
        text: 'api_authority_text',
        list: []
    }
]
export const idSetViewFrom = [
    {
        name: 'identity_id',
        placeholder: '请选择身份',
        select: true,
        key: 'identity_id',
        text: 'identity_text',
        list: []
    },
    {
        name: 'view_authority_id',
        placeholder: '请选择视图权限',
        select: true,
        key: 'view_authority_id',
        text: 'view_authority_text',
        list: []
    }
]