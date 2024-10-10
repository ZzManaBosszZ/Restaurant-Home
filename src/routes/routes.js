import config from "../config/index";
import Home from "../components/pages/Home";
import AboutUs from "../components/pages/AboutUs";
import ContactUs from "../components/pages/ContactUs";
import NotFound from "../components/pages/Other/NotFound";
import Menu from "../components/pages/Menu";
import ChefDetail from "../components/pages/Chefs/ChefDetail";
import Chefs from "../components/pages/Chefs";
import Blogs from "../components/pages/Blog";
import BlogDetail from "../components/pages/Blog/BlogDetail";
import FoodShop from "../components/pages/FoodShop/Shop";
import FoodShopDetail from "../components/pages/FoodShop/FoodShopDetail";
import Login from "../components/pages/Auth/Login";
import ForgotPassWord from "../components/pages/Auth/ForgotPassWord";
import ResetPassword from "../components/pages/Auth/ResetPassword";
import CartTab from "../components/pages/Cart/CartTab";
import CheckOut from "../components/pages/Cart/CheckOut";
import Order from "../components/pages/Cart/Order";
import BookTable from "../components/pages/Reservation/BookTable";
import OrderFood from "../components/pages/Reservation/OrderFood";


const publicRoutes = [
    { path: config.routes.login, component: Login },

    // Home routes
    { path: config.routes.home, component: Home },
    //About Us and Contact Us
    { path: config.routes.aboutus, component: AboutUs },
    { path: config.routes.contactus, component: ContactUs },
    
    //Menu
    { path: config.routes.menu, component: Menu },
    //Chef
    { path: config.routes.chef, component: Chefs },
    { path: config.routes.chefDetail, component: ChefDetail },
    //Blog
    { path: config.routes.blog, component: Blogs },
    { path: config.routes.blogDetail, component: BlogDetail },
    //Shop
    { path: config.routes.shop, component: FoodShop },
    { path: config.routes.foodShopDetail, component: FoodShopDetail },
    { path: config.routes.review, component: FoodShopDetail},
    



    //404
    { path: config.routes.error, component: NotFound },
    
];

const privateRoutes = [
    // Cart
    { path: config.routes.cartTab, component: CartTab },
    { path: config.routes.checkOut, component: CheckOut },
    { path: config.routes.order, component: Order },
    // 
    { path: config.routes.bookTable, component: BookTable},
    { path: config.routes.orderFood, component: OrderFood},


];

const authenticationRoutes = [
    { path: config.routes.login, component: Login },
    // { path: config.routes.register, component: Register },
    { path: config.routes.forgot_password, component: ForgotPassWord },
    { path: config.routes.reset_password, component: ResetPassword },

    // Reservation
    // { path: config.routes.bookTable, component: BookTable},
];

export { publicRoutes, privateRoutes, authenticationRoutes };