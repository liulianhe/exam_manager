export default function setColunmns(type: string) {
    let action: any = {
        columns: [],
        title: ''
    }
    switch (type) {
        case 'user':
            action.columns = [
                {
                    title: '用户名',
                    dataIndex: 'user_name',
                    key: 'user_name',
                    align: 'center'
                },
                {
                    title: '密码',
                    dataIndex: 'user_pwd',
                    key: 'user_pwd',
                    align: 'center'
                },
                {
                    title: '身份',
                    dataIndex: 'identity_text',
                    key: 'identity_text',
                    align: 'center'
                }
            ]
            action.title = '用户数据'
            break;
        case 'apiAuth':
            action.columns = [
                {
                    title: '请求描述',
                    dataIndex: 'api_authority_text',
                    key: 'api_authority_text',
                },
                {
                    title: '请求地址',
                    dataIndex: 'api_authority_url',
                    key: 'api_authority_url',
                },
                {
                    title: '请求方式',
                    dataIndex: 'api_authority_method',
                    key: 'api_authority_method',
                }
            ]
            action.title = 'api接口数据';
            break;
        case 'identityApi':
            action.columns = [
                {
                    title: '身份',
                    dataIndex: 'identity_text',
                    key: 'identity_text',
                },
                {
                    title: '请求描述',
                    dataIndex: 'api_authority_text',
                    key: 'api_authority_text',
                },
                {
                    title: '请求地址',
                    dataIndex: 'api_authority_url',
                    key: 'api_authority_url',
                },
                {
                    title: '请求方式',
                    dataIndex: 'api_authority_method',
                    key: 'api_authority_method',
                }
            ]
            action.title = '身份和api接口关系'
            break;
        case 'identityView':
            action.columns = [
                {
                    title: '身份',
                    dataIndex: 'identity_text',
                    key: 'identity_text',
                },
                {
                    title: '视图描述',
                    dataIndex: 'view_authority_text',
                    key: 'view_authority_text',
                },
                {
                    title: '视图id',
                    dataIndex: 'view_id',
                    key: 'view_id',
                }
            ]
            action.title = '身份和视图权限的关系'
            break;
        case 'identity':
            action.columns = [
                {
                    title: '身份',
                    dataIndex: 'identity_text',
                    key: 'identity_text',
                }
            ]
            action.title = '身份数据'
            break;
        case 'viewAuth':
            action.columns = [
                {
                    title: '视图描述',
                    dataIndex: 'view_authority_text',
                    key: 'view_authority_text',
                },
                {
                    title: '视图id',
                    dataIndex: 'view_id',
                    key: 'view_id',
                }
            ]
            action.title = '视图接口权限'
            break;
        default:
            break;
    }
    return action;
}