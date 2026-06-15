/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
    colors: {
        primary: {
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
        secondary: {
            '50': 'hsl(213, 100%, 97%)',
            '100': 'hsl(213, 100%, 94%)',
            '200': 'hsl(213, 100%, 86%)',
            '300': 'hsl(213, 100%, 76%)',
            '400': 'hsl(213, 100%, 64%)',
            '500': 'hsl(213, 100%, 50%)',
            '600': 'hsl(213, 100%, 40%)',
            '700': 'hsl(213, 100%, 32%)',
            '800': 'hsl(213, 100%, 24%)',
            '900': 'hsl(213, 100%, 16%)',
            '950': 'hsl(213, 100%, 10%)',
            DEFAULT: '#308dff'
        },
        accent: {
            '50': 'hsl(209, 100%, 97%)',
            '100': 'hsl(209, 100%, 94%)',
            '200': 'hsl(209, 100%, 86%)',
            '300': 'hsl(209, 100%, 76%)',
            '400': 'hsl(209, 100%, 64%)',
            '500': 'hsl(209, 100%, 50%)',
            '600': 'hsl(209, 100%, 40%)',
            '700': 'hsl(209, 100%, 32%)',
            '800': 'hsl(209, 100%, 24%)',
            '900': 'hsl(209, 100%, 16%)',
            '950': 'hsl(209, 100%, 10%)',
            DEFAULT: '#59afff'
        },
        'neutral-50': '#000000',
        'neutral-100': '#666666',
        'neutral-200': '#0d0d0d',
        'neutral-300': '#ffffff',
        'neutral-400': '#f5f5f5',
        'neutral-500': '#1c1c1c',
        'neutral-600': '#525252',
        'neutral-700': '#767676',
        'neutral-800': '#d9d9d9',
        background: '#f5f5f5',
        foreground: '#000000'
    },
    fontFamily: {
        sans: [
            'Manrope',
            'sans-serif'
        ],
        body: [
            'Inter Tight',
            'sans-serif'
        ]
    },
    fontSize: {
        '12': [
            '12px',
            {
                lineHeight: 'normal'
            }
        ],
        '13': [
            '13px',
            {
                lineHeight: '15.6px'
            }
        ],
        '14': [
            '14px',
            {
                lineHeight: '16.8px',
                letterSpacing: '-0.42px'
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
                lineHeight: '21.6px',
                letterSpacing: '-0.36px'
            }
        ],
        '20': [
            '20px',
            {
                lineHeight: '28px',
                letterSpacing: '-0.6px'
            }
        ],
        '24': [
            '24px',
            {
                lineHeight: '28.8px',
                letterSpacing: '-0.72px'
            }
        ],
        '48': [
            '48px',
            {
                lineHeight: '57.6px',
                letterSpacing: '-1.44px'
            }
        ],
        '80': [
            '80px',
            {
                lineHeight: '88px',
                letterSpacing: '-4px'
            }
        ],
        '96': [
            '96px',
            {
                lineHeight: '105.6px',
                letterSpacing: '-4.8px'
            }
        ]
    },
    spacing: {
        '12': '24px',
        '15': '30px',
        '20': '40px',
        '24': '48px',
        '26': '52px',
        '40': '80px',
        '50': '100px',
        '60': '120px',
        '80': '160px',
        '1px': '1px'
    },
    borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '14px',
        xl: '23px',
        full: '100px'
    },
    boxShadow: {
        sm: 'rgb(0, 0, 0) 0px 0px 0px 1px inset',
        xs: 'rgba(0, 0, 0, 0.07) 0px 0.602187px 2.28831px -0.75px, rgba(0, 0, 0, 0.07) 0px 2.28853px 8.69643px -1.5px, rgba(0, 0, 0, 0.08) 0px 10px 38px -2.25px',
        md: 'rgba(89, 175, 255, 0.4) 0px 0px 15px 3px'
    },
    screens: {
        md: '810px'
    },
    transitionDuration: {
        '200': '0.2s'
    },
    transitionTimingFunction: {
        custom: 'cubic-bezier(0.44, 0, 0.56, 1)'
    },
    container: {
        center: true,
        padding: '80px'
    },
    maxWidth: {
        container: '1440px'
    }
},
  },
};
