import config from "../config/index";

import Home from "../components/pages/Dashboard";
import NotFound from "../components/pages/Other/NotFound";
import OrderList from "../components/pages/Order";
import OrderDetail from "../components/pages/Order/OrderDetail";
import MenuList from "../components/pages/Menu";
import AddMenu from "../components/pages/Menu/AddMenu";
import MenuCategory from "../components/pages/Menu/MenuCategories";
import FoodList from "../components/pages/Food/FoodList";
import FoodDetail from "../components/pages/Food/FoodDetail/FoodDetail";
import Login from "../components/pages/Auth/Login";
import ForgotPassword from "../components/pages/Auth/ForgotPassWord";
import FoodCreate from "../components/pages/Food/FoodCreate";
import FoodEdit from "../components/pages/Food/FoodEdit";
import MenuDetail from "../components/pages/Menu/MenuDetail";
import ResetPassword from "../components/pages/Auth/ResetPassword";
import CategoryList from "../components/pages/Category";
import CategoryCreate from "../components/pages/Category/CategoryCreate";
import MenuEdit from "../components/pages/Menu/MenuEdit";
import MenuFoodCreate from "../components/pages/Menu/MenuFood/MenuFoodCreate";
import OrderTable from "../components/pages/Order/OrderTable";
import OrderTableDetail from "../components/pages/Order/OrderTableDetail";
import UserManagement from "../components/pages/UserManagement/UserManagement";
import UserManagementDetail from "../components/pages/UserManagement/UserManageDetail";

const privateRoutes = [
     // Dashboard routes
     { path: config.routes.home, component: Home, allowedRoles: ["ADMIN"] },

     //Blog routes

     
     { path: config.routes.error, component: NotFound },
 
     //Category routes
     { path: config.routes.category_list, component: CategoryList },
     { path: config.routes.category_create, component: CategoryCreate },
 
     //Other pages
     { path: config.routes.error, component: NotFound },
 
     //Profile routes
 
 
     //Order routes
     { path: config.routes.order_list, component: OrderList },
     { path: config.routes.order_detail, component: OrderDetail },

     //Order Table routes
     { path: config.routes.order_table_list, component: OrderTable },
     { path: config.routes.order_table_detail, component: OrderTableDetail },
 
     //Menu routes
     { path: config.routes.menu, component: MenuList },
     { path: config.routes.menu_create, component: AddMenu },
     {path: config.routes.menu_edit, component: MenuEdit},
     { path: config.routes.menu_detail, component: MenuDetail },
     { path: config.routes.menu_category, component: MenuCategory },
     { path: config.routes.menu_food_create, component: MenuFoodCreate },
 
     //Food routes
     { path: config.routes.food_list, component: FoodList },
     { path: config.routes.food_detail, component: FoodDetail },
     { path: config.routes.food_create, component: FoodCreate, allowedRoles: ["ADMIN"]},
     { path: config.routes.food_edit, component: FoodEdit },

     //User routes
     { path: config.routes.user_management, component: UserManagement },
     { path: config.routes.user_detail, component: UserManagementDetail },
];

const authenticationRoutes = [
    { path: config.routes.login, component: Login },
    { path: config.routes.forgot_password, component: ForgotPassword },
    { path: config.routes.reset_password, component: ResetPassword },
    // { path: config.routes.profile, component: Profile },
];

export { privateRoutes, authenticationRoutes };