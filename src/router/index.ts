import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('../views/MainView.vue'),
      meta: { title: '学習スペース提供サイト' }
    },
    {
      path: '/sheet-reservation',
      name: 'sheet-reservation',
      component: () => import('../views/SheetReservationView.vue'),
      meta: { title: '座席を予約する' }
    },
    {
      path: '/time-reservation:id',
      name: 'time-reservation',
      component: () => import('../views/TimeReservationView.vue'),
      meta: { title: '時間予約' }
    },
    {
      path: '/reserve:id',
      name: 'reserve',
      component: () => import('../views/ReserveView.vue'),
      meta: { title: '予約完了' }
    },
    {
      path: '/choosing-leaving-sheet',
      name: 'choosing-leaving-sheet',
      component: () => import('../views/ChoosingLeavingSheetView.vue'),
      meta: { title: '退席する席を選ぶ' }
    },
    {
      path: '/leaving-confirmation:id',
      name: 'leaving-confirmation',
      component: () => import('../views/LeavingConfirmationView.vue'),
      meta: { title: '退席確認' }
    },
    {
      path: '/complete-leaving',
      name: 'complete-leaving',
      component: () => import('../views/CompleteLeavingView.vue'),
      meta: { title: '退席完了' }
    },
  ]
})

export default router
