import Home from './assets/components/Home.vue';
import Contact from './assets/components/Contact.vue';
import About from './assets/components/About.vue';

export const routes = [
    {path: '/portfolio', component: Home},
    {path: '/portfolio/contact', component: Contact},
    {path: '/portfolio/about', component: About}
]