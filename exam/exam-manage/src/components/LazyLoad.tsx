import { lazy } from 'react'
const LazyLoad = (path: string) => {
    return lazy(() => {
        return new Promise(resolve => setTimeout(resolve, 400)).then(() => import(`@/containers/${path}`))
    })
}
export default LazyLoad;

