// React Theme — extracted from https://agent.framer.wiki/
// Compatible with: Chakra UI, Stitches, Vanilla Extract, or any CSS-in-JS

/**
 * TypeScript type definition for this theme:
 *
 * interface Theme {
 *   colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    foreground: string;
    neutral50: string;
    neutral100: string;
    neutral200: string;
    neutral300: string;
    neutral400: string;
    neutral500: string;
    neutral600: string;
    neutral700: string;
    neutral800: string;
    neutral900: string;
 *   };
 *   fonts: {
    body: string;
 *   };
 *   fontSizes: {
    '8': string;
    '12': string;
    '14': string;
    '16': string;
    '18': string;
    '24': string;
    '36': string;
    '38': string;
    '48': string;
    '64': string;
 *   };
 *   space: {
    '1': string;
    '20': string;
    '24': string;
    '30': string;
    '36': string;
    '40': string;
    '48': string;
    '64': string;
    '80': string;
    '88': string;
    '96': string;
 *   };
 *   radii: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    full: string;
 *   };
 *   shadows: {
    sm: string;
    xs: string;
    md: string;
    lg: string;
    xl: string;
 *   };
 *   states: {
 *     hover: { opacity: number };
 *     focus: { opacity: number };
 *     active: { opacity: number };
 *     disabled: { opacity: number };
 *   };
 * }
 */

export const theme = {
  "colors": {
    "primary": "#37ea9e",
    "secondary": "#0000ee",
    "accent": "#82dbf7",
    "background": "#f8f9fa",
    "foreground": "#000000",
    "neutral50": "#000000",
    "neutral100": "#ffffff",
    "neutral200": "#9ba5b5",
    "neutral300": "#4e5b6d",
    "neutral400": "#273241",
    "neutral500": "#e9ebef",
    "neutral600": "#d1d5dd",
    "neutral700": "#1a1d21",
    "neutral800": "#9b9c9e",
    "neutral900": "#686b6e"
  },
  "fonts": {
    "body": "'Plus Jakarta Sans', sans-serif"
  },
  "fontSizes": {
    "8": "8px",
    "12": "12px",
    "14": "14px",
    "16": "16px",
    "18": "18px",
    "24": "24px",
    "36": "36px",
    "38": "38px",
    "48": "48px",
    "64": "64px"
  },
  "space": {
    "1": "1px",
    "20": "20px",
    "24": "24px",
    "30": "30px",
    "36": "36px",
    "40": "40px",
    "48": "48px",
    "64": "64px",
    "80": "80px",
    "88": "88px",
    "96": "96px"
  },
  "radii": {
    "sm": "3px",
    "md": "10px",
    "lg": "16px",
    "xl": "24px",
    "full": "1000px"
  },
  "shadows": {
    "sm": "rgba(0, 0, 0, 0.05) 0px 2px 2px 0px",
    "xs": "rgba(0, 0, 0, 0.26) 0px 0.636953px 1.14652px -1.125px, rgba(0, 0, 0, 0.24) 0px 1.9316px 3.47689px -2.25px, rgba(0, 0, 0, 0.192) 0px 5.10612px 9.19102px -3.375px, rgba(0, 0, 0, 0.03) 0px 16px 28.8px -4.5px",
    "md": "rgba(74, 201, 126, 0.48) 0px 0px 12px 0px",
    "lg": "rgba(119, 126, 150, 0.1) 0px 10px 20px -5px",
    "xl": "rgba(107, 110, 148, 0.12) 0px 120px 164px -25px, rgba(0, 0, 0, 0.25) 0px 2px 4px 0px"
  },
  "states": {
    "hover": {
      "opacity": 0.08
    },
    "focus": {
      "opacity": 0.12
    },
    "active": {
      "opacity": 0.16
    },
    "disabled": {
      "opacity": 0.38
    }
  }
};

// MUI v5 theme
export const muiTheme = {
  "palette": {
    "primary": {
      "main": "#37ea9e",
      "light": "hsl(155, 81%, 72%)",
      "dark": "hsl(155, 81%, 42%)"
    },
    "secondary": {
      "main": "#0000ee",
      "light": "hsl(240, 100%, 62%)",
      "dark": "hsl(240, 100%, 32%)"
    },
    "background": {
      "default": "#f8f9fa",
      "paper": "#ffffff"
    },
    "text": {
      "primary": "#000000",
      "secondary": "#0000ee"
    }
  },
  "typography": {
    "fontFamily": "'Times New Roman', sans-serif",
    "h1": {
      "fontSize": "36px",
      "fontWeight": "600",
      "lineHeight": "39.6px"
    },
    "h2": {
      "fontSize": "24px",
      "fontWeight": "600",
      "lineHeight": "24px"
    },
    "body1": {
      "fontSize": "18px",
      "fontWeight": "500",
      "lineHeight": "27px"
    }
  },
  "shape": {
    "borderRadius": 6
  },
  "shadows": [
    "rgb(28, 211, 163) 0px 0px 0px 5px inset",
    "rgb(39, 50, 65) 0px 1px 0px 0px inset, rgba(0, 0, 0, 0.53) 0px -1px 0px 0px inset, rgba(0, 0, 0, 0.1) 0px 0.80621px 0.564347px -0.625px, rgba(0, 0, 0, 0.1) 0px 1.91086px 1.3376px -1.25px, rgba(0, 0, 0, 0.09) 0px 3.48561px 2.43992px -1.875px, rgba(0, 0, 0, 0.09) 0px 5.79481px 4.05637px -2.5px, rgba(0, 0, 0, 0.08) 0px 9.35815px 6.55071px -3.125px, rgba(0, 0, 0, 0.07) 0px 15.3184px 10.7229px -3.75px, rgba(0, 0, 0, 0.05) 0px 26.3772px 18.464px -4.375px, rgba(0, 0, 0, 0) 0px 48px 33.6px -5px",
    "rgba(0, 0, 0, 0.26) 0px 0.636953px 1.14652px -1.125px, rgba(0, 0, 0, 0.24) 0px 1.9316px 3.47689px -2.25px, rgba(0, 0, 0, 0.192) 0px 5.10612px 9.19102px -3.375px, rgba(0, 0, 0, 0.03) 0px 16px 28.8px -4.5px",
    "rgba(0, 0, 0, 0.05) 0px 2px 2px 0px",
    "rgba(104, 107, 110, 0.16) 0px 4px 6px -4px, rgba(104, 107, 110, 0.16) 0px 10px 15px -3px"
  ]
};

export default theme;
