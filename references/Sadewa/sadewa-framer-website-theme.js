// React Theme — extracted from https://sadewa.framer.website/
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
    mono: string;
 *   };
 *   fontSizes: {
    '12': string;
    '13': string;
    '14': string;
    '16': string;
    '18': string;
    '20': string;
    '24': string;
    '32': string;
    '40': string;
    '48': string;
    '64': string;
    '80': string;
 *   };
 *   space: {
    '1': string;
    '30': string;
    '40': string;
    '48': string;
    '56': string;
    '64': string;
    '70': string;
    '80': string;
    '100': string;
    '110': string;
    '130': string;
    '140': string;
    '150': string;
    '160': string;
    '170': string;
 *   };
 *   radii: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
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
    "secondary": "#98fe00",
    "accent": "#ff9500",
    "background": "#ffffff",
    "foreground": "#000000",
    "neutral50": "#000000",
    "neutral100": "#131313",
    "neutral200": "#f3f3f3",
    "neutral300": "#ffffff",
    "neutral400": "#797979",
    "neutral500": "#d3d3d3",
    "neutral600": "#e5e5e5",
    "neutral700": "#3a3a3a",
    "neutral800": "#b4b4b4",
    "neutral900": "#999999"
  },
  "fonts": {
    "body": "'Inter', sans-serif",
    "mono": "'Roboto Mono', monospace"
  },
  "fontSizes": {
    "12": "12px",
    "13": "13px",
    "14": "14px",
    "16": "16px",
    "18": "18px",
    "20": "20px",
    "24": "24px",
    "32": "32px",
    "40": "40px",
    "48": "48px",
    "64": "64px",
    "80": "80px"
  },
  "space": {
    "1": "1px",
    "30": "30px",
    "40": "40px",
    "48": "48px",
    "56": "56px",
    "64": "64px",
    "70": "70px",
    "80": "80px",
    "100": "100px",
    "110": "110px",
    "130": "130px",
    "140": "140px",
    "150": "150px",
    "160": "160px",
    "170": "170px"
  },
  "radii": {
    "xs": "1px",
    "sm": "4px",
    "md": "10px",
    "lg": "14px",
    "full": "1000px"
  },
  "shadows": {
    "sm": "rgb(0, 0, 0) 0px 0px 0px 1px inset",
    "xs": "rgba(0, 0, 0, 0.17) 0px 0.602187px 1.56569px -1.5px, rgba(0, 0, 0, 0.14) 0px 2.28853px 5.95019px -3px, rgba(0, 0, 0, 0.02) 0px 10px 26px -4.5px",
    "md": "rgba(0, 0, 0, 0.23) 0px 3px 6px 0px, rgba(0, 0, 0, 0.16) 0px 3px 6px 0px"
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
      "main": "#98fe00",
      "light": "hsl(84, 100%, 65%)",
      "dark": "hsl(84, 100%, 35%)"
    },
    "background": {
      "default": "#ffffff",
      "paper": "#f3f3f3"
    },
    "text": {
      "primary": "#000000",
      "secondary": "#131313"
    }
  },
  "typography": {
    "fontFamily": "'Roboto Mono', sans-serif",
    "h1": {
      "fontSize": "32px",
      "fontWeight": "700",
      "lineHeight": "35.2px"
    },
    "h2": {
      "fontSize": "24px",
      "fontWeight": "500",
      "lineHeight": "36px"
    }
  },
  "shape": {
    "borderRadius": 10
  },
  "shadows": [
    "rgb(0, 0, 0) 0px 0px 0px 1px inset",
    "rgba(0, 0, 0, 0.11) 0px 0.361312px 0.505837px -0.75px, rgba(0, 0, 0, 0.12) 0px 1.37312px 1.92237px -1.5px, rgba(0, 0, 0, 0.14) 0px 6px 8.4px -2.25px",
    "rgba(0, 0, 0, 0.17) -0.120437px 0.602187px 0.859758px -1.16667px, rgba(0, 0, 0, 0.15) -0.457707px 2.28853px 3.2674px -2.33333px, rgba(0, 0, 0, 0.08) -2px 10px 14.2773px -3.5px",
    "rgba(0, 0, 0, 0.17) 0px 0.602187px 1.56569px -1.5px, rgba(0, 0, 0, 0.14) 0px 2.28853px 5.95019px -3px, rgba(0, 0, 0, 0.02) 0px 10px 26px -4.5px",
    "rgba(0, 0, 0, 0.23) 0px 3px 6px 0px, rgba(0, 0, 0, 0.16) 0px 3px 6px 0px"
  ]
};

export default theme;
