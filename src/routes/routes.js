import config from "../config/index";

import Home from "../components/pages/Home";
import AboutUs from "../components/pages/AboutUs";
import ContactUs from "../components/pages/ContactUs";

const publicRoutes = [
    // Home routes
    { path: config.routes.home, component: Home },
    { path: config.routes.aboutus, component: AboutUs },
    { path: config.routes.contactus, component: ContactUs },
];

const privateRoutes = [
    
];

const authenticationRoutes = [
    // { path: config.routes.login, component: Login },
    // { path: config.routes.register, component: Register },
    // { path: config.routes.forgot_password, component: ForgotPassword },
    // { path: config.routes.reset_password, component: ResetPassword },
];

export { publicRoutes, privateRoutes, authenticationRoutes };