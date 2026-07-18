const routes = {
    // Home routes
    home: "/",
    error: "/error",

    // Authentication routes
    profile: "/profile",
    login: "/login",
    forgot_password: "/forgot-password",
    reset_password: "/reset-password/:resetToken",

    //Order routes
    order_list: "/order-list",
    order_detail: "/order-detail/:orderId",

    //Order Table routes
    order_table_list: "/ordertable-list",
    order_table_detail: "/ordertable-detail/:id",

    //Menu routes
    menu: "/menu",
    menu_create: "/add-menu",
    menu_edit: "/menu-edit/:id",
    menu_category: "/menu-category",
    menu_detail: "/menu-detail/:id",

    //Menu_Food routes
    menu_food_create: "/menu-food",

    //Food routes
    food_list: "/food-list",
    food_detail: "/food-detail/:id",
    food_create: "/food-create",
    food_edit: "/food-edit/:id",

    //Category routes
    category_list: "/category-list",
    category_create: "/category-create",

    //Blog routes

    //User routes
    user_management: "/user-management",
    user_detail: "/user-detail/:userId",
};
export default routes;