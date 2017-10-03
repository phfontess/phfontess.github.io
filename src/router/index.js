import Vue from 'vue'
import Router from 'vue-router'
import Home from './../assets/components/Home.vue';
import Contact from './../assets/components/Contact.vue';
import About from './../assets/components/About.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path: '/portfolio', component: Home},
    {path: '/portfolio/contact', component: Contact},
    {path: '/portfolio/about', component: About}
  ]
})
