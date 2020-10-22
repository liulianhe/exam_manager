
import { _addIdentity, _addApi, _addView, _setIdentityApi, _setIdentityView } from '@/api/user'

export const layout = [
    {
        list: [
            {
                flag: true
            },
            {
                formList: 'addIdFrom',
                req: _addIdentity
            },
            {
                formList: 'addApiFrom',
                req: _addApi
            }
        ]
    },
    {
        list: [
            {
                formList: 'addViewFrom',
                req: _addView
            },
            {
                formList: 'idSetApiFrom',
                req: _setIdentityApi
            },
            {
                formList: 'idSetViewFrom',
                req: _setIdentityView
            }
        ]
    }
]