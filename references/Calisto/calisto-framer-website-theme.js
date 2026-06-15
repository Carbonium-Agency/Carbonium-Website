// React Theme — extracted from https://calisto.framer.website/
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
 *   };
 *   fonts: {
    body: string;
 *   };
 *   fontSizes: {
    '12': string;
    '13': string;
    '14': string;
    '16': string;
    '18': string;
    '20': string;
    '24': string;
    '48': string;
    '80': string;
    '96': string;
 *   };
 *   space: {
    '1': string;
    '24': string;
    '30': string;
    '40': string;
    '48': string;
    '52': string;
    '80': string;
    '100': string;
    '120': string;
    '160': string;
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
    "primary": "#0000ee",
    "secondary": "#308dff",
    "accent": "#59afff",
    "background": "#f5f5f5",
    "foreground": "#000000",
    "neutral50": "#000000",
    "neutral100": "#666666",
    "neutral200": "#0d0d0d",
    "neutral300": "#ffffff",
    "neutral400": "#f5f5f5",
    "neutral500": "#1c1c1c",
    "neutral600": "#525252",
    "neutral700": "#767676",
    "neutral800": "#d9d9d9"
  },
  "fonts": {
    "body": "'Inter Tight', sans-serif"
  },
  "fontSizes": {
    "12": "12px",
    "13": "13px",
    "14": "14px",
    "16": "16px",
    "18": "18px",
    "20": "20px",
    "24": "24px",
    "48": "48px",
    "80": "80px",
    "96": "96px"
  },
  "space": {
    "1": "1px",
    "24": "24px",
    "30": "30px",
    "40": "40px",
    "48": "48px",
    "52": "52px",
    "80": "80px",
    "100": "100px",
    "120": "120px",
    "160": "160px"
  },
  "radii": {
    "sm": "4px",
    "md": "8px",
    "lg": "14px",
    "xl": "23px",
    "full": "100px"
  },
  "shadows": {
    "sm": "rgb(0, 0, 0) 0px 0px 0px 1px inset",
    "xs": "rgba(0, 0, 0, 0.07) 0px 0.602187px 2.28831px -0.75px, rgba(0, 0, 0, 0.07) 0px 2.28853px 8.69643px -1.5px, rgba(0, 0, 0, 0.08) 0px 10px 38px -2.25px",
    "md": "rgba(89, 175, 255, 0.4) 0px 0px 15px 3px"
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
      "main": "#0000ee",
      "light": "hsl(240, 100%, 62%)",
      "dark": "hsl(240, 100%, 32%)"
    },
    "secondary": {
      "main": "#308dff",
      "light": "hsl(213, 100%, 74%)",
      "dark": "hsl(213, 100%, 44%)"
    },
    "background": {
      "default": "#f5f5f5",
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
      "fontSize": "48px",
      "fontWeight": "500",
      "lineHeight": "57.6px"
    },
    "h2": {
      "fontSize": "24px",
      "fontWeight": "500",
      "lineHeight": "28.8px"
    },
    "h3": {
      "fontSize": "20px",
      "fontWeight": "500",
      "lineHeight": "28px"
    },
    "body1": {
      "fontSize": "18px",
      "fontWeight": "600",
      "lineHeight": "21.6px"
    }
  },
  "shape": {
    "borderRadius": 8
  },
  "shadows": [
    "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px",
    "rgb(0, 0, 0) 0px 0px 0px 1px inset",
    "rgba(0, 0, 0, 0.01) 0px 0.301094px 0.210766px -0.166667px, rgba(0, 0, 0, 0.02) 0px 1.14427px 0.800987px -0.333333px, rgba(0, 0, 0, 0.05) 0px 5px 3.5px -0.5px",
    "rgba(0, 0, 0, 0.09) 0px 0.301094px 0.301094px -0.583333px, rgba(0, 0, 0, 0.1) 0px 1.14427px 1.14427px -1.16667px, rgba(0, 0, 0, 0.16) 0px 5px 5px -1.75px",
    "rgba(0, 0, 0, 0.04) 0px 0.301094px 0.903281px -0.583333px, rgba(0, 0, 0, 0.04) 0px 1.14427px 3.4328px -1.16667px, rgba(0, 0, 0, 0.07) 0px 5px 15px -1.75px"
  ]
};

export default theme;
