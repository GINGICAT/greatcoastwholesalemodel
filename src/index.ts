export const SALES_PHONE_NUMBER = 2315887001;
export const SALES_PHONE_NUMBER_STR = '+1 (231) 588-7001';
export const SALES_PHONE_EMAIL = 'karenc@woodchart.com';
export const SALES_PHONE_EMAIL_MAILTO = 'mailto:karenc@woodchart.com';
export const CUSTOMER_SERVICE_EMAIL = 'laura@woochart.com';
export const CUSTOMER_SERVICE_EMAIL_MAILTO = 'mailto:laura@woochart.com';
export const SUPPORT_EMAIL_MAILTO = 'mailto:support@woochart.com';

export const PALETTE_SVG_COLOR = { dark: '#111b33', light: '#fcfbee' };

export const CUSTOM_PACKS = {
  S: { shortName: 'S', longName: 'Small' },
  M: { shortName: 'M', longName: 'Medium' },
  L: { shortName: 'L', longName: 'Large' },
  XL: { shortName: 'XL', longName: 'X-Large' },
  XXL: { shortName: 'XXL', longName: 'XX-Large' },
  // { shortName: '3XL', longName: '3X-Large' },
  // TODO: revise Pack A - its not 18 pieces
  PACK_A: { shortName: 'PACK A', longName: 'Pack A - (2 S, 4 M, 5 L, 4 XL, 3 XXL)' },
  // { shortName: 'PACK B', longName: 'Pack B - (1S, 3M, 4L, 3XL)' },
};

export type CUSTOM_COLORS_KEY = keyof typeof CUSTOM_COLORS;
export const CUSTOM_COLORS = {
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

export type CUSTOM_GARMENT_TYPE_KEY = keyof typeof CUSTOM_GARMENT_TYPE;
// TODO: Go over this with dave, color page at top of pdf doesnt match all colors in garment sections
export const CUSTOM_GARMENT_TYPE = {
  SHORT_SLEEVE_TSHIRT: {
    title: 'T-Shirts',
    description: 'Short sleeve',
    productId: 'gid://shopify/Product/8556361580777',
    dark: [CUSTOM_COLORS.COASTAL_BLUE, CUSTOM_COLORS.PURPLE_MIST, CUSTOM_COLORS.SANDBAR, CUSTOM_COLORS.GREAT_GREEN],
    light: [CUSTOM_COLORS.GREAT_GREEN, CUSTOM_COLORS.DEEP_WATER, CUSTOM_COLORS.RAIN_CLOUD, CUSTOM_COLORS.NAVY],
  },
  LONG_SLEEVE_TSHIRT: {
    title: 'T-Shirts',
    description: 'Long sleeve',
    productId: 'gid://shopify/Product/8590371750121',
    dark: [CUSTOM_COLORS.COASTAL_BLUE, CUSTOM_COLORS.PURPLE_MIST, CUSTOM_COLORS.SANDBAR, CUSTOM_COLORS.GREAT_GREEN],
    light: [CUSTOM_COLORS.GREAT_GREEN, CUSTOM_COLORS.DEEP_WATER, CUSTOM_COLORS.RAIN_CLOUD, CUSTOM_COLORS.NAVY],
  },
  CREW_NECK: {
    title: 'Crew Neck',
    description: 'Screen printed',
    productId: 'gid://shopify/Product/8592077684969',
    dark: [
      CUSTOM_COLORS.COASTAL_BLUE,
      CUSTOM_COLORS.PURPLE_MIST,
      CUSTOM_COLORS.SUNSET_ROSE,
      CUSTOM_COLORS.SANDBAR,
      CUSTOM_COLORS.GREAT_GREEN,
    ],
    light: [
      CUSTOM_COLORS.GREAT_GREEN,
      CUSTOM_COLORS.DEEP_WATER,
      CUSTOM_COLORS.RAIN_CLOUD,
      CUSTOM_COLORS.BURLAP,
      CUSTOM_COLORS.SUNSET_ROSE,
    ],
  },
  CREW_NECK_CH: {
    title: 'Crew Neck',
    description: 'Chenille lettering',
    productId: 'gid://shopify/Product/8592117563625',
    dark: [],
    light: [
      CUSTOM_COLORS.DEEP_WATER,
      CUSTOM_COLORS.RAIN_CLOUD,
      CUSTOM_COLORS.BURLAP,
      CUSTOM_COLORS.COASTAL_BLUE,
      CUSTOM_COLORS.PURPLE_MIST,
      CUSTOM_COLORS.SUNSET_ROSE,
      CUSTOM_COLORS.GREAT_GREEN,
    ],
  },
  HOODIES: {
    title: 'Hoodies',
    description: 'Screen printed',
    productId: 'gid://shopify/Product/8592110092521',
    dark: [CUSTOM_COLORS.COASTAL_BLUE, CUSTOM_COLORS.PURPLE_MIST, CUSTOM_COLORS.SANDBAR, CUSTOM_COLORS.GREAT_GREEN],
    light: [CUSTOM_COLORS.GREAT_GREEN, CUSTOM_COLORS.DEEP_WATER, CUSTOM_COLORS.RAIN_CLOUD, CUSTOM_COLORS.BURLAP],
  },
  HOODIES_CH: {
    title: 'Hoodies',
    description: 'Chenille lettering',
    productId: 'gid://shopify/Product/8592118546665',
    dark: [],
    light: [
      CUSTOM_COLORS.DEEP_WATER,
      CUSTOM_COLORS.RAIN_CLOUD,
      CUSTOM_COLORS.BURLAP,
      CUSTOM_COLORS.COASTAL_BLUE,
      CUSTOM_COLORS.PURPLE_MIST,
      CUSTOM_COLORS.SUNSET_ROSE,
      CUSTOM_COLORS.GREAT_GREEN,
    ],
  },
  FULL_ZIP_HOODIE: {
    title: 'Full-zip Hoodies',
    description: '',
    productId: 'gid://shopify/Product/8592120774889',
    dark: [CUSTOM_COLORS.COASTAL_BLUE, CUSTOM_COLORS.SUNSET_ROSE, CUSTOM_COLORS.SANDBAR],
    light: [CUSTOM_COLORS.DEEP_WATER, CUSTOM_COLORS.COASTAL_BLUE, CUSTOM_COLORS.SUNSET_ROSE],
  },
  WOMENS_V_NECK: {
    title: 'Womens V-Neck',
    description: '',
    productId: 'gid://shopify/Product/8592124575977',
    dark: [CUSTOM_COLORS.SUNSET_ROSE, CUSTOM_COLORS.GREAT_GREEN],
    light: [CUSTOM_COLORS.SUNSET_ROSE, CUSTOM_COLORS.GREAT_GREEN, CUSTOM_COLORS.LIGHT_DENIM_HEATHER],
  },
  WOMENS_PONCHOS: {
    title: 'Womens Ponchos',
    description: '',
    productId: 'gid://shopify/Product/8556361580777',
    dark: [CUSTOM_COLORS.COASTAL_BLUE, CUSTOM_COLORS.SUNRISE, CUSTOM_COLORS.SANDBAR, CUSTOM_COLORS.GRAPHITE],
    light: [],
  },
  BLANKETS: {
    title: 'Blankets',
    description: '',
    productId: 'gid://shopify/Product/8556361580777',
    dark: [CUSTOM_COLORS.COASTAL_BLUE, CUSTOM_COLORS.SUNSET_ROSE, CUSTOM_COLORS.SANDBAR, CUSTOM_COLORS.ATHLETIC_GREY],
    light: [],
  },
  NAVY_HOOD_SHOW: {
    title: 'Hoodies Show Special',
    description: '',
    productId: 'gid://shopify/Product/8556361580777',
    dark: [],
    light: [CUSTOM_COLORS.WASHED_NAVY, CUSTOM_COLORS.BLACK],
  },
};

export type CustomerSimple = {
  displayName: string;
  emailAddress?: { emailAddress?: string };
  firstName?: string;
  id: string;
  lastName?: string;
  phoneNumber?: { phoneNumber?: string };
  defaultAddress?: {
    address1?: string;
    address2?: string;
    city?: string;
    company?: string;
    // country?: string;
    firstName?: string;
    formatted: string;
    // formattedArea?: string;
    id: string;
    lastName?: string;
    // name?: string;
    phoneNumber?: { phoneNumber?: string };
    // province?: string;
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
    errorCode?: number
  };
};