import config from "../config/index";

const url = {
    BASE_URL: config.key.BASE_API_URL,

    // Authentication
    AUTH: {
        LOGIN: "auth/user/signin",
        CHANGE_PASSWORD: "user/change-password",
        FORGOT_PASSWORD: "auth/user/forgot-password",
        RESET_PASSWORD: "auth/user/reset-password",
        PROFILE: "user/profile",
        UPDATE_PROFILE: "user/update-profile",
    },

    FOOD: {
        LIST: "any/food",
        DETAIL: "food/{}",
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
        CREATE: "menu-food",
    },
};
export default url;