// React Theme — extracted from https://aithor.framer.website/
// Compatible with: Chakra UI, Stitches, Vanilla Extract, or any CSS-in-JS

/**
 * TypeScript type definition for this theme:
 *
 * interface Theme {
 *   colors: {
    primary: string;
    secondary: string;
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
    mono: string;
 *   };
 *   fontSizes: {
    '16': string;
    '20': string;
    '24': string;
    '40': string;
    '56': string;
    '64': string;
    '80': string;
    '88': string;
    '35.2': string;
    '22.4': string;
    '18.4': string;
    '17.6': string;
 *   };
 *   space: {
    '1': string;
    '10': string;
    '18': string;
    '24': string;
    '30': string;
    '40': string;
    '50': string;
    '55': string;
    '60': string;
    '80': string;
    '100': string;
    '140': string;
    '150': string;
    '160': string;
    '180': string;
    '200': string;
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
    "secondary": "#ff3700",
    "background": "#f0f0f0",
    "foreground": "#000000",
    "neutral50": "#000000",
    "neutral100": "#4f4f4f",
    "neutral200": "#0a0a0a",
    "neutral300": "#f0f0f0",
    "neutral400": "#e5e5e5",
    "neutral500": "#ffffff",
    "neutral600": "#767676",
    "neutral700": "#151619",
    "neutral800": "#a1a1a1"
  },
  "fonts": {
    "body": "'Inter', sans-serif",
    "mono": "'Fragment Mono', monospace"
  },
  "fontSizes": {
    "16": "16px",
    "20": "20px",
    "24": "24px",
    "40": "40px",
    "56": "56px",
    "64": "64px",
    "80": "80px",
    "88": "88px",
    "35.2": "35.2px",
    "22.4": "22.4px",
    "18.4": "18.4px",
    "17.6": "17.6px"
  },
  "space": {
    "1": "1px",
    "10": "10px",
    "18": "18px",
    "24": "24px",
    "30": "30px",
    "40": "40px",
    "50": "50px",
    "55": "55px",
    "60": "60px",
    "80": "80px",
    "100": "100px",
    "140": "140px",
    "150": "150px",
    "160": "160px",
    "180": "180px",
    "200": "200px"
  },
  "radii": {
    "sm": "3px",
    "md": "10px",
    "lg": "16px",
    "xl": "20px",
    "full": "50px"
  },
  "shadows": {
    "sm": "rgb(0, 0, 0) 0px 0px 0px 1px inset",
    "xs": "rgba(0, 0, 0, 0.17) 0px 0.602187px 1.56569px -1.5px, rgba(0, 0, 0, 0.14) 0px 2.28853px 5.95019px -3px, rgba(0, 0, 0, 0.02) 0px 10px 26px -4.5px"
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
      "main": "#ff3700",
      "light": "hsl(13, 100%, 65%)",
      "dark": "hsl(13, 100%, 35%)"
    },
    "background": {
      "default": "#f0f0f0",
      "paper": "#e5e5e5"
    },
    "text": {
      "primary": "#000000",
      "secondary": "#0000ee"
    }
  },
  "typography": {
    "fontFamily": "'Geist', sans-serif",
    "h1": {
      "fontSize": "35.2px",
      "fontWeight": "600",
      "lineHeight": "38.72px"
    }
  },
  "shape": {
    "borderRadius": 7
  },
  "shadows": [
    "rgb(0, 0, 0) 0px 0px 0px 1px inset",
    "rgba(0, 0, 0, 0.08) 0px 0.602187px 0.602187px -0.916667px, rgba(0, 0, 0, 0.08) 0px 2.28853px 2.28853px -1.83333px, rgba(0, 0, 0, 0.07) 0px 10px 10px -2.75px",
    "rgba(255, 255, 255, 0.03) 0px 2px 0px 0px inset",
    "rgba(255, 255, 255, 0.03) 0px 1.99825px 0px 0px inset",
    "rgba(0, 0, 0, 0.17) 0px 0.602187px 1.56569px -1.5px, rgba(0, 0, 0, 0.14) 0px 2.28853px 5.95019px -3px, rgba(0, 0, 0, 0.02) 0px 10px 26px -4.5px"
  ]
};

export default theme;
