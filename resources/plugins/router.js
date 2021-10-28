import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		redirect: '/login'
	},
	{
		path: '/login',
		name: 'login',
		component: () => import('../views/auth/Login.vue')
	},
	{
		path: '/admin',
		component: () => import('../views/pages/admin/Index.vue')
	}
]

const router = new VueRouter({
	mode: 'history',
	// base: process.env.MIX_APP_URL,
	routes
})

router.beforeEach((to, from, next) => {
	/* if (to.matched.some((record) => record.meta.requiredAuth)) {
      session
        .getSession()
        .then((res) => {})
        .catch((err) => {
          router.push({ path: '/login' })
        })
    } */

	next()
})

export default router
