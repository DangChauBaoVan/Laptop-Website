import Cart from "containers/clients/Cart/Cart";
import Home from "containers/clients/Home/Home";
import ProductDetail from "containers/clients/ProductDetail/ProductDetail";


export const clientRoutes = [
    {
        path: '/',
        component: Home,
        exact: true,
        isPrivate: false,
    },
    {
        path: '/product-detail/:productID',
        component: ProductDetail,
        exact: true,
        isPrivate: false,
    },
    {
        path: '/cart',
        component: Cart,
        exact: true,
        isPrivate: false,
    }
]