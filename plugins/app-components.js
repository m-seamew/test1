import Vue from 'vue';


import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Burger from '@/components/interface/components/burgerMenu';
import Blok from '@/components/Blok.vue';
import Contacts from '@/components/interface/contactsComponent';
import insidePitchMenu from '@/components/interface/insidePitchMenu';


Vue.component('Header', Header);
Vue.component('Footer', Footer);
Vue.component('Blok', Blok);
Vue.component('Burger', Burger);
Vue.component('Contacts', Contacts);
Vue.component('InsidePitchMenu', insidePitchMenu);
Vue.component('Prefetch', Prefetch);



