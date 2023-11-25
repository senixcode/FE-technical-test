import { createRouter, createWebHistory } from 'vue-router'
import { RoutesNames } from './enum'
import LocalStorageUser from '../http/auth/LocalStorageUser'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: RoutesNames.SignIn,
      component: () => import('../pages/SignIn.vue')
    },
    {
      path: '/dashboard',
      name: RoutesNames.Dashboard,
      component: () => import('../pages/Dashboard.vue')
    },
    {
      name: "error",
      path: '/:catchAll(.*)',
      component: () => import("../pages/404.vue"),
    },
  ]
})

router.beforeEach(async (to, _) => {
  const isAuthenticated = new LocalStorageUser().getToken()
  if (
    !isAuthenticated && to.name !== RoutesNames.SignIn
  ) {
    // redirect the user to the login page
    return { name: RoutesNames.SignIn }
  }

  if (
    isAuthenticated && to.name === RoutesNames.SignIn
  ) {
    // redirect the user to the login page
    return { name: RoutesNames.Dashboard }
  }
})


export default router