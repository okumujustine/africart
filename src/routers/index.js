
import Checkout from "../components/Checkout.vue"
import MainCart from "../MainCart.vue"


const routes = [
    {
        path: '/',
        name: 'maincart',
        component: MainCart
    },
    {
        path: '/checkout',
        name: 'checkout',
        component: Checkout
    }
]


export default routes
