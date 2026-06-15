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
            '50': 'hsl(84, 100%, 97%)',
            '100': 'hsl(84, 100%, 94%)',
            '200': 'hsl(84, 100%, 86%)',
            '300': 'hsl(84, 100%, 76%)',
            '400': 'hsl(84, 100%, 64%)',
            '500': 'hsl(84, 100%, 50%)',
            '600': 'hsl(84, 100%, 40%)',
            '700': 'hsl(84, 100%, 32%)',
            '800': 'hsl(84, 100%, 24%)',
            '900': 'hsl(84, 100%, 16%)',
            '950': 'hsl(84, 100%, 10%)',
            DEFAULT: '#98fe00'
        },
        accent: {
            '50': 'hsl(35, 100%, 97%)',
            '100': 'hsl(35, 100%, 94%)',
            '200': 'hsl(35, 100%, 86%)',
            '300': 'hsl(35, 100%, 76%)',
            '400': 'hsl(35, 100%, 64%)',
            '500': 'hsl(35, 100%, 50%)',
            '600': 'hsl(35, 100%, 40%)',
            '700': 'hsl(35, 100%, 32%)',
            '800': 'hsl(35, 100%, 24%)',
            '900': 'hsl(35, 100%, 16%)',
            '950': 'hsl(35, 100%, 10%)',
            DEFAULT: '#ff9500'
        },
        'neutral-50': '#000000',
        'neutral-100': '#131313',
        'neutral-200': '#f3f3f3',
        'neutral-300': '#ffffff',
        'neutral-400': '#797979',
        'neutral-500': '#d3d3d3',
        'neutral-600': '#e5e5e5',
        'neutral-700': '#3a3a3a',
        'neutral-800': '#b4b4b4',
        'neutral-900': '#999999',
        background: '#ffffff',
        foreground: '#000000'
    },
    fontFamily: {
        sans: [
            'Satoshi',
            'sans-serif'
        ],
        body: [
            'Inter',
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
                lineHeight: '19.5px',
                letterSpacing: '-0.26px'
            }
        ],
        '14': [
            '14px',
            {
                lineHeight: '14px'
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
                lineHeight: '25.2px',
                letterSpacing: '-0.36px'
            }
        ],
        '20': [
            '20px',
            {
                lineHeight: '24px',
                letterSpacing: '-0.4px'
            }
        ],
        '24': [
            '24px',
            {
                lineHeight: '36px',
                letterSpacing: '-0.24px'
            }
        ],
        '32': [
            '32px',
            {
                lineHeight: '35.2px',
                letterSpacing: '-1.28px'
            }
        ],
        '40': [
            '40px',
            {
                lineHeight: '48px',
                letterSpacing: '-1.8px'
            }
        ],
        '48': [
            '48px',
            {
                lineHeight: '48px',
                letterSpacing: '-1.44px'
            }
        ],
        '64': [
            '64px',
            {
                lineHeight: '64px',
                letterSpacing: '-2.56px'
            }
        ],
        '80': [
            '80px',
            {
                lineHeight: '72px',
                letterSpacing: '-3.2px'
            }
        ]
    },
    spacing: {
        '15': '30px',
        '20': '40px',
        '24': '48px',
        '28': '56px',
        '32': '64px',
        '35': '70px',
        '40': '80px',
        '50': '100px',
        '55': '110px',
        '65': '130px',
        '70': '140px',
        '75': '150px',
        '80': '160px',
        '85': '170px',
        '1px': '1px'
    },
    borderRadius: {
        xs: '1px',
        sm: '4px',
        md: '10px',
        lg: '14px',
        full: '1000px'
    },
    boxShadow: {
        sm: 'rgb(0, 0, 0) 0px 0px 0px 1px inset',
        xs: 'rgba(0, 0, 0, 0.17) 0px 0.602187px 1.56569px -1.5px, rgba(0, 0, 0, 0.14) 0px 2.28853px 5.95019px -3px, rgba(0, 0, 0, 0.02) 0px 10px 26px -4.5px',
        md: 'rgba(0, 0, 0, 0.23) 0px 3px 6px 0px, rgba(0, 0, 0, 0.16) 0px 3px 6px 0px'
    },
    screens: {
        md: '810px'
    },
    transitionDuration: {
        '200': '0.2s',
        '400': '0.4s',
        '1000': '1s',
        '1900': '1.9s'
    },
    transitionTimingFunction: {
        custom: 'cubic-bezier(0.44, 0, 0.56, 1)'
    },
    container: {
        center: true,
        padding: '0px'
    },
    maxWidth: {
        container: '1240px'
    }
},
  },
};
