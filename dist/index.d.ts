export declare const SALES_PHONE_NUMBER = 2315887001;
export declare const SALES_PHONE_NUMBER_STR = "+1 (231) 588-7001";
export declare const SALES_PHONE_EMAIL = "karenc@woodchart.com";
export declare const SALES_PHONE_EMAIL_MAILTO = "mailto:karenc@woodchart.com";
export declare const CUSTOMER_SERVICE_EMAIL = "laura@woochart.com";
export declare const CUSTOMER_SERVICE_EMAIL_MAILTO = "mailto:laura@woochart.com";
export declare const SUPPORT_EMAIL_MAILTO = "mailto:support@woochart.com";
export declare const PALETTE_SVG_COLOR: {
    dark: string;
    light: string;
};
export declare const CUSTOM_PACKS: {
    S: {
        shortName: string;
        longName: string;
    };
    M: {
        shortName: string;
        longName: string;
    };
    L: {
        shortName: string;
        longName: string;
    };
    XL: {
        shortName: string;
        longName: string;
    };
    XXL: {
        shortName: string;
        longName: string;
    };
    PACK_A: {
        shortName: string;
        longName: string;
    };
};
export type CUSTOM_COLORS_KEY = keyof typeof CUSTOM_COLORS;
export declare const CUSTOM_COLORS: {
    COASTAL_BLUE: {
        colorCode: string;
        title: string;
    };
    PURPLE_MIST: {
        colorCode: string;
        title: string;
    };
    SANDBAR: {
        colorCode: string;
        title: string;
    };
    GREAT_GREEN: {
        colorCode: string;
        title: string;
    };
    DEEP_WATER: {
        colorCode: string;
        title: string;
    };
    RAIN_CLOUD: {
        colorCode: string;
        title: string;
    };
    NAVY: {
        colorCode: string;
        title: string;
    };
    BURLAP: {
        colorCode: string;
        title: string;
    };
    SUNSET_ROSE: {
        colorCode: string;
        title: string;
    };
    LIGHT_DENIM_HEATHER: {
        colorCode: string;
        title: string;
    };
    SUNRISE: {
        colorCode: string;
        title: string;
    };
    GRAPHITE: {
        colorCode: string;
        title: string;
    };
    ATHLETIC_GREY: {
        colorCode: string;
        title: string;
    };
    WASHED_NAVY: {
        colorCode: string;
        title: string;
    };
    BLACK: {
        colorCode: string;
        title: string;
    };
};
export type CUSTOM_GARMENT_TYPE_KEY = keyof typeof CUSTOM_GARMENT_TYPE;
export declare const CUSTOM_GARMENT_TYPE: {
    SHORT_SLEEVE_TSHIRT: {
        title: string;
        description: string;
        productId: string;
        dark: {
            colorCode: string;
            title: string;
        }[];
        light: {
            colorCode: string;
            title: string;
        }[];
    };
    LONG_SLEEVE_TSHIRT: {
        title: string;
        description: string;
        productId: string;
        dark: {
            colorCode: string;
            title: string;
        }[];
        light: {
            colorCode: string;
            title: string;
        }[];
    };
    CREW_NECK: {
        title: string;
        description: string;
        productId: string;
        dark: {
            colorCode: string;
            title: string;
        }[];
        light: {
            colorCode: string;
            title: string;
        }[];
    };
    CREW_NECK_CH: {
        title: string;
        description: string;
        productId: string;
        dark: never[];
        light: {
            colorCode: string;
            title: string;
        }[];
    };
    HOODIES: {
        title: string;
        description: string;
        productId: string;
        dark: {
            colorCode: string;
            title: string;
        }[];
        light: {
            colorCode: string;
            title: string;
        }[];
    };
    HOODIES_CH: {
        title: string;
        description: string;
        productId: string;
        dark: never[];
        light: {
            colorCode: string;
            title: string;
        }[];
    };
    FULL_ZIP_HOODIE: {
        title: string;
        description: string;
        productId: string;
        dark: {
            colorCode: string;
            title: string;
        }[];
        light: {
            colorCode: string;
            title: string;
        }[];
    };
    WOMENS_V_NECK: {
        title: string;
        description: string;
        productId: string;
        dark: {
            colorCode: string;
            title: string;
        }[];
        light: {
            colorCode: string;
            title: string;
        }[];
    };
    WOMENS_PONCHOS: {
        title: string;
        description: string;
        productId: string;
        dark: {
            colorCode: string;
            title: string;
        }[];
        light: never[];
    };
    BLANKETS: {
        title: string;
        description: string;
        productId: string;
        dark: {
            colorCode: string;
            title: string;
        }[];
        light: never[];
    };
    NAVY_HOOD_SHOW: {
        title: string;
        description: string;
        productId: string;
        dark: never[];
        light: {
            colorCode: string;
            title: string;
        }[];
    };
};
export type CustomerSimple = {
    displayName: string;
    emailAddress?: {
        emailAddress?: string;
    };
    firstName?: string;
    id: string;
    lastName?: string;
    phoneNumber?: {
        phoneNumber?: string;
    };
    defaultAddress?: {
        address1?: string;
        address2?: string;
        city?: string;
        company?: string;
        firstName?: string;
        formatted: string;
        id: string;
        lastName?: string;
        phoneNumber?: {
            phoneNumber?: string;
        };
        territoryCode?: string;
        zip?: string;
        zoneCode?: string;
    };
};
export type PackSelection = {
    variantId: string;
    color: string;
    pack: string;
    palette: 'dark' | 'light';
    count: string;
    price: string;
};
export type ProcessSVGInput = {
    customer: CustomerSimple;
    garmentType: typeof CUSTOM_GARMENT_TYPE.SHORT_SLEEVE_TSHIRT;
    packSelections: PackSelection[];
    svgBase64: string;
    productImage: string;
};
export type ProcessSVGResponse = {
    success?: {
        svgId: string;
        svgUrl: string;
        pdfUrl: string;
    };
    debug?: {
        outputStr: string;
        errorStr: string;
        errorCode?: number;
    };
};
