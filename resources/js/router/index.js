import { createRouter, createWebHistory } from "vue-router";
import invoiceIndex from '../components/invoices/index.vue';
import notFound from '../components/NotFound.vue';
import newInvoice from '../components/invoices/new.vue';
import showInvoice from '../components/invoices/showInvoice.vue';
import edit from '../components/invoices/edit.vue';
const routes = [
    {
        path:'/',
        component: invoiceIndex
    },
    {
        path:'/invoices/showInvoice/:id',
        component: showInvoice,
        props:true
    },

    {
        path:'/invoice/new',
        component: newInvoice
    },

    {
        path:'/invoices/edit/:id',
        component: edit,
        props:true
    },

    {
        path: '/:pathMatch(.*)*',
        component: notFound
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router