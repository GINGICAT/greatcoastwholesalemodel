"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CUSTOM_GARMENT_TYPE = exports.CUSTOM_COLORS = exports.CUSTOM_PACKS = exports.SUPPORT_EMAIL_MAILTO = exports.CUSTOMER_SERVICE_EMAIL_MAILTO = exports.CUSTOMER_SERVICE_EMAIL = exports.SALES_PHONE_EMAIL_MAILTO = exports.SALES_PHONE_EMAIL = exports.SALES_PHONE_NUMBER_STR = exports.SALES_PHONE_NUMBER = void 0;
exports.SALES_PHONE_NUMBER = 2315887001;
exports.SALES_PHONE_NUMBER_STR = '+1 (231) 588-7001';
exports.SALES_PHONE_EMAIL = 'karenc@woodchart.com';
exports.SALES_PHONE_EMAIL_MAILTO = 'mailto:karenc@woodchart.com';
exports.CUSTOMER_SERVICE_EMAIL = 'laura@woochart.com';
exports.CUSTOMER_SERVICE_EMAIL_MAILTO = 'mailto:laura@woochart.com';
exports.SUPPORT_EMAIL_MAILTO = 'mailto:support@woochart.com';
exports.CUSTOM_PACKS = {
    S: { shortName: 'S', longName: 'Small' },
    M: { shortName: 'M', longName: 'Medium' },
    L: { shortName: 'L', longName: 'Large' },
    XL: { shortName: 'XL', longName: 'X-Large' },
    XXL: { shortName: 'XXL', longName: 'XX-Large' },
    // { shortName: '3XL', longName: '3X-Large' },
    PACK_A: { shortName: 'PACK A', longName: 'Pack A - (1 S, 3 M, 4 L, 3 XL)' },
    // { shortName: 'PACK B', longName: 'Pack B - (1S, 3M, 4L, 3XL)' },
};
exports.CUSTOM_COLORS = {
    COASTAL_BLUE: { colorCode: '#c7ddf1', title: 'Coastal Blue' },
    PURPLE_MIST: { colorCode: '#b4a4c2', title: 'Purple Mist' },
    SANDBAR: { colorCode: '#ece5da', title: 'Sandbar' },
    GREAT_GREEN: { colorCode: '#89a197', title: 'Great Green' },
    DEEP_WATER: { colorCode: '#465861', title: 'Deep Water' },
    RAIN_CLOUD: { colorCode: '#656c68', title: 'Rain Cloud' },
    NAVY: { colorCode: '#111b33', title: 'Navy' },
    BURLAP: { colorCode: '#e7ca87', title: 'Burlap' },
    SUNSET_ROSE: { colorCode: '#cd6a79', title: 'Sunset Rose' },
    LIGHT_DENIM_HEATHER: { colorCode: '#65829f', title: 'Light Denum Heather' },
    SUNRISE: { colorCode: '#f6e385', title: 'Sunrise' },
    GRAPHITE: { colorCode: '#adaeae', title: 'Graphite' },
    ATHLETIC_GREY: { colorCode: '#a7a5a9', title: 'Athletic Grey' },
    WASHED_NAVY: { colorCode: '#111b33', title: 'Washed Navy' },
    BLACK: { colorCode: '#060706', title: 'Black' },
};
// TODO: Go over this with dave, color page at top of pdf doesnt match all colors in garment sections
exports.CUSTOM_GARMENT_TYPE = {
    SHORT_SLEEVE_TSHIRT: {
        title: 'T-Shirts',
        description: 'Short sleeve',
        productId: 'gid://shopify/Product/8556361580777',
        dark: [exports.CUSTOM_COLORS.COASTAL_BLUE, exports.CUSTOM_COLORS.PURPLE_MIST, exports.CUSTOM_COLORS.SANDBAR, exports.CUSTOM_COLORS.GREAT_GREEN],
        light: [exports.CUSTOM_COLORS.GREAT_GREEN, exports.CUSTOM_COLORS.DEEP_WATER, exports.CUSTOM_COLORS.RAIN_CLOUD, exports.CUSTOM_COLORS.NAVY],
    },
    LONG_SLEEVE_TSHIRT: {
        title: 'T-Shirts',
        description: 'Long sleeve',
        dark: [exports.CUSTOM_COLORS.COASTAL_BLUE, exports.CUSTOM_COLORS.PURPLE_MIST, exports.CUSTOM_COLORS.SANDBAR, exports.CUSTOM_COLORS.GREAT_GREEN],
        light: [exports.CUSTOM_COLORS.GREAT_GREEN, exports.CUSTOM_COLORS.DEEP_WATER, exports.CUSTOM_COLORS.RAIN_CLOUD, exports.CUSTOM_COLORS.NAVY],
    },
    CREW_NECK: {
        title: 'Crew Neck',
        description: 'Screen printed',
        dark: [
            exports.CUSTOM_COLORS.COASTAL_BLUE,
            exports.CUSTOM_COLORS.PURPLE_MIST,
            exports.CUSTOM_COLORS.SUNSET_ROSE,
            exports.CUSTOM_COLORS.SANDBAR,
            exports.CUSTOM_COLORS.GREAT_GREEN,
        ],
        light: [
            exports.CUSTOM_COLORS.GREAT_GREEN,
            exports.CUSTOM_COLORS.DEEP_WATER,
            exports.CUSTOM_COLORS.RAIN_CLOUD,
            exports.CUSTOM_COLORS.BURLAP,
            exports.CUSTOM_COLORS.SUNSET_ROSE,
        ],
    },
    CREW_NECK_CH: {
        title: 'Crew Neck',
        description: 'Chenille lettering',
        dark: [],
        light: [
            exports.CUSTOM_COLORS.DEEP_WATER,
            exports.CUSTOM_COLORS.RAIN_CLOUD,
            exports.CUSTOM_COLORS.BURLAP,
            exports.CUSTOM_COLORS.COASTAL_BLUE,
            exports.CUSTOM_COLORS.PURPLE_MIST,
            exports.CUSTOM_COLORS.SUNSET_ROSE,
            exports.CUSTOM_COLORS.GREAT_GREEN,
        ],
    },
    HOODIES: {
        title: 'Hoodies',
        description: 'Screen printed',
        dark: [exports.CUSTOM_COLORS.COASTAL_BLUE, exports.CUSTOM_COLORS.PURPLE_MIST, exports.CUSTOM_COLORS.SANDBAR, exports.CUSTOM_COLORS.GREAT_GREEN],
        light: [exports.CUSTOM_COLORS.GREAT_GREEN, exports.CUSTOM_COLORS.DEEP_WATER, exports.CUSTOM_COLORS.RAIN_CLOUD, exports.CUSTOM_COLORS.BURLAP],
    },
    HOODIES_CH: {
        title: 'Hoodies',
        description: 'Chenille lettering',
        dark: [],
        light: [
            exports.CUSTOM_COLORS.DEEP_WATER,
            exports.CUSTOM_COLORS.RAIN_CLOUD,
            exports.CUSTOM_COLORS.BURLAP,
            exports.CUSTOM_COLORS.COASTAL_BLUE,
            exports.CUSTOM_COLORS.PURPLE_MIST,
            exports.CUSTOM_COLORS.SUNSET_ROSE,
            exports.CUSTOM_COLORS.GREAT_GREEN,
        ],
    },
    FULL_ZIP_HOODIE: {
        title: 'Full-zip Hoodies',
        description: '',
        dark: [exports.CUSTOM_COLORS.COASTAL_BLUE, exports.CUSTOM_COLORS.SUNSET_ROSE, exports.CUSTOM_COLORS.SANDBAR],
        light: [exports.CUSTOM_COLORS.DEEP_WATER, exports.CUSTOM_COLORS.COASTAL_BLUE, exports.CUSTOM_COLORS.SUNSET_ROSE],
    },
    WOMENS_V_NECK: {
        title: 'Womens V-Neck',
        description: '',
        dark: [exports.CUSTOM_COLORS.SUNSET_ROSE, exports.CUSTOM_COLORS.GREAT_GREEN],
        light: [exports.CUSTOM_COLORS.SUNSET_ROSE, exports.CUSTOM_COLORS.GREAT_GREEN, exports.CUSTOM_COLORS.LIGHT_DENIM_HEATHER],
    },
    WOMENS_PONCHOS: {
        title: 'Womens Ponchos',
        description: '',
        dark: [exports.CUSTOM_COLORS.COASTAL_BLUE, exports.CUSTOM_COLORS.SUNRISE, exports.CUSTOM_COLORS.SANDBAR, exports.CUSTOM_COLORS.GRAPHITE],
        light: [],
    },
    BLANKETS: {
        title: 'Blankets',
        description: '',
        dark: [exports.CUSTOM_COLORS.COASTAL_BLUE, exports.CUSTOM_COLORS.SUNSET_ROSE, exports.CUSTOM_COLORS.SANDBAR, exports.CUSTOM_COLORS.ATHLETIC_GREY],
        light: [],
    },
    NAVY_HOOD_SHOW: {
        title: 'Hoodies Show Special',
        description: '',
        dark: [],
        light: [exports.CUSTOM_COLORS.WASHED_NAVY, exports.CUSTOM_COLORS.BLACK],
    },
};
