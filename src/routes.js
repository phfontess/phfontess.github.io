import Home from './assets/components/Home.vue';
import Contact from './assets/components/Contact.vue';
import About from './assets/components/About.vue';

export const routes = [
    {path: '/', component: Home},
    {path: '/contact', component: Contact},
    {path: '/about', component: About}
]