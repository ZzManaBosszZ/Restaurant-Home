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
    },

    NOTIFICATION: {
        LIST: "notifications",
        MARK_AS_READ: "notifications/markAsRead/{}",
    },

    DASHBOARD: {
        TOTAL_ORDER: "total-orders",
        TOTAL_ORDER_DELIVERED: "delivered-orders",
        TOTAL_ORDER_CANCEL: "cancelled-orders",
        TOTAL_ORDER_REVENUE: "total-revenue",
        DAILY_REVENUE: "daily-revenue",
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
        DETAIL: "menu-food/{}",
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

    USER: {
        LIST: "all-user",
        DETAIL: "user-orders/{}",
    }


};
export default url;