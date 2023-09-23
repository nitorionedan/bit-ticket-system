import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/sheetselecting',
      name: 'sheetselecting',
      component: () => import('../views/SheetSelectingView.vue')
    },
    {
      path: '/reservationresult',
      name: 'reservationresult',
      component: () => import('../views/ReservationResultView.vue')
    },
  ]
})

export default router
