
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Enterprises/ViewAllEnterprises.vue') },
      { path: 'register', component: () => import('pages/Enterprises/RegisterEnterprise.vue') },
      { path: 'allEnterprises', component: () => import('pages/Enterprises/ViewAllEnterprises.vue') },
      { path: 'edit', component: () => import('pages/Enterprises/UpdateEnterprise.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
