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
            '50': 'hsl(13, 100%, 97%)',
            '100': 'hsl(13, 100%, 94%)',
            '200': 'hsl(13, 100%, 86%)',
            '300': 'hsl(13, 100%, 76%)',
            '400': 'hsl(13, 100%, 64%)',
            '500': 'hsl(13, 100%, 50%)',
            '600': 'hsl(13, 100%, 40%)',
            '700': 'hsl(13, 100%, 32%)',
            '800': 'hsl(13, 100%, 24%)',
            '900': 'hsl(13, 100%, 16%)',
            '950': 'hsl(13, 100%, 10%)',
            DEFAULT: '#ff3700'
        },
        'neutral-50': '#000000',
        'neutral-100': '#4f4f4f',
        'neutral-200': '#0a0a0a',
        'neutral-300': '#f0f0f0',
        'neutral-400': '#e5e5e5',
        'neutral-500': '#ffffff',
        'neutral-600': '#767676',
        'neutral-700': '#151619',
        'neutral-800': '#a1a1a1',
        background: '#f0f0f0',
        foreground: '#000000'
    },
    fontFamily: {
        body: [
            'Fragment Mono',
            'sans-serif'
        ],
        heading: [
            'Halant',
            'sans-serif'
        ]
    },
    fontSize: {
        '13': [
            '13px',
            {
                lineHeight: '11.7px',
                letterSpacing: '-0.26px'
            }
        ],
        '14': [
            '14px',
            {
                lineHeight: '12.6px',
                letterSpacing: '-0.28px'
            }
        ],
        '16': [
            '16px',
            {
                lineHeight: 'normal'
            }
        ],
        '20': [
            '20px',
            {
                lineHeight: '27px',
                letterSpacing: '-0.8px'
            }
        ],
        '24': [
            '24px',
            {
                lineHeight: '28.8px',
                letterSpacing: '-0.5px'
            }
        ],
        '40': [
            '40px',
            {
                lineHeight: '48px',
                letterSpacing: '-2.4px'
            }
        ],
        '56': [
            '56px',
            {
                lineHeight: '56px',
                letterSpacing: '-2.24px'
            }
        ],
        '64': [
            '64px',
            {
                lineHeight: '67.2px',
                letterSpacing: '-2.56px'
            }
        ],
        '80': [
            '80px',
            {
                lineHeight: '60px',
                letterSpacing: '-3.2px'
            }
        ],
        '88': [
            '88px',
            {
                lineHeight: '92.4px',
                letterSpacing: '-3.52px'
            }
        ],
        '35.2': [
            '35.2px',
            {
                lineHeight: '38.72px',
                letterSpacing: '-1.408px'
            }
        ],
        '22.4': [
            '22.4px',
            {
                lineHeight: '28px',
                letterSpacing: '-0.896px'
            }
        ],
        '18.4': [
            '18.4px',
            {
                lineHeight: '23.92px',
                letterSpacing: '-0.736px'
            }
        ],
        '17.6': [
            '17.6px',
            {
                lineHeight: '25.52px',
                letterSpacing: '-0.352px'
            }
        ],
        '14.4': [
            '14.4px',
            {
                lineHeight: '17.28px'
            }
        ]
    },
    spacing: {
        '5': '10px',
        '9': '18px',
        '12': '24px',
        '15': '30px',
        '20': '40px',
        '25': '50px',
        '30': '60px',
        '40': '80px',
        '50': '100px',
        '70': '140px',
        '75': '150px',
        '80': '160px',
        '90': '180px',
        '100': '200px',
        '1px': '1px',
        '55px': '55px'
    },
    borderRadius: {
        sm: '3px',
        md: '10px',
        lg: '16px',
        xl: '20px',
        full: '50px'
    },
    boxShadow: {
        sm: 'rgb(0, 0, 0) 0px 0px 0px 1px inset',
        xs: 'rgba(0, 0, 0, 0.17) 0px 0.602187px 1.56569px -1.5px, rgba(0, 0, 0, 0.14) 0px 2.28853px 5.95019px -3px, rgba(0, 0, 0, 0.02) 0px 10px 26px -4.5px'
    },
    screens: {
        md: '810px',
        '1200px': '1200px'
    },
    transitionDuration: {
        '1': '0.001s',
        '200': '0.2s',
        '500': '0.5s'
    },
    transitionTimingFunction: {
        custom: 'cubic-bezier(0.44, 0, 0.56, 1)'
    },
    container: {
        center: true,
        padding: '40px'
    },
    maxWidth: {
        container: '1400px'
    }
},
  },
};
