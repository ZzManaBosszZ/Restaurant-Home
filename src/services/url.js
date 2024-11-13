import config from "../config/index";

const url = {
    BASE_URL: config.key.BASE_API_URL,

    // Authentication
    AUTH: {
        LOGIN: "auth/user/signin",
        SIGNUP: "auth/user/signup",
        CHANGE_PASSWORD: "user/change-password",
        FORGOT_PASSWORD: "auth/user/forgot-password",
        RESET_PASSWORD: "auth/user/reset-password",
        PROFILE: "user/profile",
        UPDATE_PROFILE: "user/update-profile",
    },

    FOOD: {
        LIST: "any/food",
        DETAIL: "any/food/{}",
        CREATE: "food",
        EDIT: "food",
        DELETE: "food",
    },

    CATEGORY: {
        LIST: "any/category",
        DETAIL: "category",
        CREATE: "category",
        EDIT: "category",
        DELETE: "category",
    },

    MENU: {
        LIST: "menus",
        DETAIL: "menus/{}",
        CREATE: "menus",
        EDIT: "menus",
        DELETE: "menus",
    },

    MENU_FOOD: {
        LIST: "any/menu-food",
        DETAIL: "menu-food/{}",
        CREATE: "menu-food",
    },
    
    ORDER: {
        LIST: "orders",
        DETAIL: "order-details/{}",
        CREATE: "orders",
    },

    ORDER_TABLE: {
        LIST: "any/ordertables",
        DETAIL: "any/ordertables/{}",
        EDIT: "any/ordertables/{}",
    },

    REVIEW: {
        LIST: 'any/review/food/{}',
        CREATE: "review",
    },

};
export default url;