const routes = {
    // Home routes
    home: "/",
    // AboutUs and ContactUs routes
    aboutus: "/about",
    contactus: "/contact",
    //404
    error: "/error",
    //Menu
    menu: "/menu",
    //Chef
    chef: "/chef",
    chefDetail: "/chef-detail",

    //Blog
    blog: "/blog",
    blogDetail: "/blog-detail",

    //Shop Food
    shop: "/shop",
    foodShopDetail: "/shop-detail/:id",
    wishlistPage: "/wishlist",
    review: "/review/food/:id",

    // Cart
    cartTab: "/cart",
    checkOut:"/check_out",
    order:"/order",
    orderConfirm: "/order_confirm/:id",
    orderList: "/orderList",

    // Order history
    orderHistory: "/order-history", 

    // Reservation
    bookTable: "/book_table",
    bookingConfirm: "/booking_confirm/:id",
    bookingList: "/booking_list",

    // orderFood: "/order_food",

    // Authentication routes
    profile: "/profile",
    login: "/login",
    register:"/register",
    forgot_password: "/forgot-password",
    reset_password: "/reset-password/:resetToken",

};
export default routes;