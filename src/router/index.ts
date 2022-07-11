import { createRouter, createWebHistory, HistoryState, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        meta: { requiresAuth: false },
        redirect: { name: 'Home' }
    },
    {
        path: '/Login',
        name: 'Login',
        meta: { requiresAuth: false },
        component: () => import('../views/LoginView.vue')
    },
    {
        path: '/404',
        name: '404',
        meta: { requiresAuth: false },
        component: () => import('../views/NotFound.vue')
    }
]

export const keys = []
const history = createWebHistory(process.env.BASE_URL)

const _push = history.push
const _replace = history.replace
//const setKey = (to: string, data: HistoryState | undefined) => {
//    if (!data) data = {}
//    data['key'] = `[${to}] ${nanoid()}`
//    keys.push(data['key'])
//    return data
//}
//history.push = (to, data) => {
//    data = setKey(to, data)
//    _push(to, data)
//}
//history.replace = (to, data) => {
//    data = setKey(to, data)
//    _replace(to, data)
//}

const router = createRouter({
    history: history,
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0 }
        }
    }
})

//router.beforeEach(async function (to) {
//    if (to.params.authRedirect) {
//        Notify.create({
//            type: 'negative',
//            timeout: 1500,
//            position: 'bottom',
//            message: '此操作必须登录，正在前往登录页面'
//        })
//    }

export default router
