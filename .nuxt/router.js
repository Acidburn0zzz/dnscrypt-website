import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _15aeec42 = () => import('../pages/stamps.vue' /* webpackChunkName: "pages/stamps" */).then(m => m.default || m)
const _2e2bada7 = () => import('../pages/protocol.vue' /* webpackChunkName: "pages/protocol" */).then(m => m.default || m)
const _5f4f0e7c = () => import('../pages/implementations.vue' /* webpackChunkName: "pages/implementations" */).then(m => m.default || m)
const _0878c852 = () => import('../pages/faq.vue' /* webpackChunkName: "pages/faq" */).then(m => m.default || m)
const _e0a6d40a = () => import('../pages/public-servers.vue' /* webpackChunkName: "pages/public-servers" */).then(m => m.default || m)
const _6aa3555a = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash && document.querySelector(to.hash)) {
        // scroll to anchor by returning the selector
        position = { selector: to.hash }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/stamps",
			component: _15aeec42,
			name: "stamps"
		},
		{
			path: "/protocol",
			component: _2e2bada7,
			name: "protocol"
		},
		{
			path: "/implementations",
			component: _5f4f0e7c,
			name: "implementations"
		},
		{
			path: "/faq",
			component: _0878c852,
			name: "faq"
		},
		{
			path: "/public-servers",
			component: _e0a6d40a,
			name: "public-servers"
		},
		{
			path: "/",
			component: _6aa3555a,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}