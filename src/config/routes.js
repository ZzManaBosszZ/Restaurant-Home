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

    // Cart
    cartTab: "/cart",
    checkOut:"/check_out",
    order:"/order",

    // Reservation
    bookTable: "/book_table",
    bookingConfirm: "/booking_confirm/:id",
    bookingList: "/booking_list",

    // orderFood: "/order_food",

    // Authentication routes
    profile: "/profile",
    login: "/login",
    forgot_password: "/forgot-password",
    reset_password: "/reset-password/:resetToken",

};
export default routes;