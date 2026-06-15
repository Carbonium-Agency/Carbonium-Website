// React Theme — extracted from https://orbai-template.framer.website/
// Compatible with: Chakra UI, Stitches, Vanilla Extract, or any CSS-in-JS

/**
 * TypeScript type definition for this theme:
 *
 * interface Theme {
 *   colors: {
    primary: string;
    background: string;
    foreground: string;
    neutral50: string;
    neutral100: string;
    neutral200: string;
 *   };
 *   fonts: {
    body: string;
 *   };
 *   fontSizes: {
    '12': string;
    '14': string;
    '16': string;
    '20': string;
    '24': string;
    '28': string;
    '32': string;
    '36': string;
    '44': string;
    '56': string;
    '100': string;
 *   };
 *   space: {
    '4': string;
    '20': string;
    '24': string;
    '30': string;
    '40': string;
    '44': string;
    '60': string;
    '80': string;
    '100': string;
    '160': string;
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
    md: string;
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
    "primary": "#0000ee",
    "background": "#f5f5f5",
    "foreground": "#000000",
    "neutral50": "#000000",
    "neutral100": "#f5f5f5",
    "neutral200": "#ffffff"
  },
  "fonts": {
    "body": "'Times New Roman', sans-serif"
  },
  "fontSizes": {
    "12": "12px",
    "14": "14px",
    "16": "16px",
    "20": "20px",
    "24": "24px",
    "28": "28px",
    "32": "32px",
    "36": "36px",
    "44": "44px",
    "56": "56px",
    "100": "100px"
  },
  "space": {
    "4": "4px",
    "20": "20px",
    "24": "24px",
    "30": "30px",
    "40": "40px",
    "44": "44px",
    "60": "60px",
    "80": "80px",
    "100": "100px",
    "160": "160px",
    "200": "200px"
  },
  "radii": {
    "sm": "5px",
    "md": "8px",
    "lg": "14px",
    "xl": "23px",
    "full": "1000px"
  },
  "shadows": {
    "sm": "rgba(255, 255, 255, 0.4) 0px 3px 1px 0px inset, rgba(255, 255, 255, 0.4) 0px -3px 1px 0px inset",
    "xs": "rgba(0, 0, 0, 0) 0px 1px 2px 0px inset",
    "md": "rgba(255, 255, 255, 0.5) 0px 0px 9px 0px inset",
    "xl": "rgba(0, 0, 0, 0.2) 1px 20px 30px -12px"
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
      "fontSize": "32px",
      "fontWeight": "400",
      "lineHeight": "32px"
    },
    "h2": {
      "fontSize": "28px",
      "fontWeight": "400",
      "lineHeight": "28px"
    }
  },
  "shape": {
    "borderRadius": 8
  },
  "shadows": [
    "rgb(0, 0, 0) 0px 0px 0px 1px inset",
    "rgba(0, 0, 0, 0.16) 0px 0.636953px 0.636953px -1px, rgba(0, 0, 0, 0.15) 0px 1.9316px 1.9316px -2px, rgba(0, 0, 0, 0.13) 0px 5.10612px 5.10612px -3px, rgba(0, 0, 0, 0.04) 0px 16px 16px -4px, rgba(227, 227, 227, 0.46) 0px -3px 1px 0px inset",
    "rgba(0, 0, 0, 0.1) 0px 0.706592px 0.706592px -0.541667px, rgba(0, 0, 0, 0.09) 0px 1.80656px 1.80656px -1.08333px, rgba(0, 0, 0, 0.09) 0px 3.62176px 3.62176px -1.625px, rgba(0, 0, 0, 0.09) 0px 6.8656px 6.8656px -2.16667px, rgba(0, 0, 0, 0.08) 0px 13.6468px 13.6468px -2.70833px, rgba(0, 0, 0, 0.05) 0px 30px 30px -3.25px, rgb(255, 255, 255) 0px 3px 1px 0px inset",
    "rgba(16, 49, 77, 0.24) 0px 0.706592px 0.706592px -0.666667px, rgba(16, 49, 77, 0.23) 0px 1.80656px 1.80656px -1.33333px, rgba(16, 49, 77, 0.22) 0px 3.62176px 3.62176px -2px, rgba(16, 49, 77, 0.2) 0px 6.8656px 6.8656px -2.66667px, rgba(16, 49, 77, 0.16) 0px 13.6468px 13.6468px -3.33333px, rgba(16, 49, 77, 0.06) 0px 30px 30px -4px",
    "rgba(158, 158, 158, 0.69) 0px 0.706592px 0.706592px -0.583333px, rgba(158, 158, 158, 0.68) 0px 1.80656px 1.80656px -1.16667px, rgba(158, 158, 158, 0.65) 0px 3.62176px 3.62176px -1.75px, rgba(158, 158, 158, 0.61) 0px 6.8656px 6.8656px -2.33333px, rgba(158, 158, 158, 0.52) 0px 13.6468px 13.6468px -2.91667px, rgba(158, 158, 158, 0.3) 0px 30px 30px -3.5px, rgb(255, 255, 255) 0px 3px 1px 0px inset"
  ]
};

export default theme;
