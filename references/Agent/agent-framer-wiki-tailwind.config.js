/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
    colors: {
        primary: {
            '50': 'hsl(155, 81%, 97%)',
            '100': 'hsl(155, 81%, 94%)',
            '200': 'hsl(155, 81%, 86%)',
            '300': 'hsl(155, 81%, 76%)',
            '400': 'hsl(155, 81%, 64%)',
            '500': 'hsl(155, 81%, 50%)',
            '600': 'hsl(155, 81%, 40%)',
            '700': 'hsl(155, 81%, 32%)',
            '800': 'hsl(155, 81%, 24%)',
            '900': 'hsl(155, 81%, 16%)',
            '950': 'hsl(155, 81%, 10%)',
            DEFAULT: '#37ea9e'
        },
        secondary: {
            '50': 'hsl(240, 100%, 97%)',
            '100': 'hsl(240, 100%, 94%)',
            '200': 'hsl(240, 100%, 86%)',
            '300': 'hsl(240, 100%, 76%)',
            '400': 'hsl(240, 100%, 64%)',
            '500': 'hsl(240, 100%, 50%)',
            '600': 'hsl(240, 100%, 40%)',
            '700': 'hsl(240, 100%, 32%)',
            '800': 'hsl(240, 100%, 24%)',
            '900': 'hsl(240, 100%, 16%)',
            '950': 'hsl(240, 100%, 10%)',
            DEFAULT: '#0000ee'
        },
        accent: {
            '50': 'hsl(194, 88%, 97%)',
            '100': 'hsl(194, 88%, 94%)',
            '200': 'hsl(194, 88%, 86%)',
            '300': 'hsl(194, 88%, 76%)',
            '400': 'hsl(194, 88%, 64%)',
            '500': 'hsl(194, 88%, 50%)',
            '600': 'hsl(194, 88%, 40%)',
            '700': 'hsl(194, 88%, 32%)',
            '800': 'hsl(194, 88%, 24%)',
            '900': 'hsl(194, 88%, 16%)',
            '950': 'hsl(194, 88%, 10%)',
            DEFAULT: '#82dbf7'
        },
        'neutral-50': '#000000',
        'neutral-100': '#ffffff',
        'neutral-200': '#9ba5b5',
        'neutral-300': '#4e5b6d',
        'neutral-400': '#273241',
        'neutral-500': '#e9ebef',
        'neutral-600': '#d1d5dd',
        'neutral-700': '#1a1d21',
        'neutral-800': '#9b9c9e',
        'neutral-900': '#686b6e',
        background: '#f8f9fa',
        foreground: '#000000'
    },
    fontFamily: {
        sans: [
            'Geist',
            'sans-serif'
        ],
        body: [
            'Plus Jakarta Sans',
            'sans-serif'
        ]
    },
    fontSize: {
        '8': [
            '8px',
            {
                lineHeight: '8px'
            }
        ],
        '12': [
            '12px',
            {
                lineHeight: 'normal'
            }
        ],
        '14': [
            '14px',
            {
                lineHeight: '21px',
                letterSpacing: '-0.28px'
            }
        ],
        '16': [
            '16px',
            {
                lineHeight: 'normal'
            }
        ],
        '18': [
            '18px',
            {
                lineHeight: '27px',
                letterSpacing: '-0.36px'
            }
        ],
        '24': [
            '24px',
            {
                lineHeight: '24px'
            }
        ],
        '36': [
            '36px',
            {
                lineHeight: '39.6px',
                letterSpacing: '-1.08px'
            }
        ],
        '38': [
            '38px',
            {
                lineHeight: '38px'
            }
        ],
        '48': [
            '48px',
            {
                lineHeight: '48px',
                letterSpacing: '-3px'
            }
        ],
        '64': [
            '64px',
            {
                lineHeight: '64px',
                letterSpacing: '-4px'
            }
        ]
    },
    spacing: {
        '10': '20px',
        '12': '24px',
        '15': '30px',
        '18': '36px',
        '20': '40px',
        '24': '48px',
        '32': '64px',
        '40': '80px',
        '44': '88px',
        '48': '96px',
        '1px': '1px'
    },
    borderRadius: {
        sm: '3px',
        md: '10px',
        lg: '16px',
        xl: '24px',
        full: '1000px'
    },
    boxShadow: {
        sm: 'rgba(0, 0, 0, 0.05) 0px 2px 2px 0px',
        xs: 'rgba(0, 0, 0, 0.26) 0px 0.636953px 1.14652px -1.125px, rgba(0, 0, 0, 0.24) 0px 1.9316px 3.47689px -2.25px, rgba(0, 0, 0, 0.192) 0px 5.10612px 9.19102px -3.375px, rgba(0, 0, 0, 0.03) 0px 16px 28.8px -4.5px',
        md: 'rgba(74, 201, 126, 0.48) 0px 0px 12px 0px',
        lg: 'rgba(119, 126, 150, 0.1) 0px 10px 20px -5px',
        xl: 'rgba(107, 110, 148, 0.12) 0px 120px 164px -25px, rgba(0, 0, 0, 0.25) 0px 2px 4px 0px'
    },
    screens: {
        '0px': '0px',
        md: '810px'
    },
    transitionDuration: {
        '100': '0.1s'
    },
    transitionTimingFunction: {
        custom: 'cubic-bezier(0.4, 0, 1, 1)'
    },
    container: {
        center: true,
        padding: '96px'
    },
    maxWidth: {
        container: '1200px'
    }
},
  },
};
