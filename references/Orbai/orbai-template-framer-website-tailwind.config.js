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
        'neutral-50': '#000000',
        'neutral-100': '#f5f5f5',
        'neutral-200': '#ffffff',
        background: '#f5f5f5',
        foreground: '#000000'
    },
    fontFamily: {
        sans: [
            'Inter',
            'sans-serif'
        ],
        heading: [
            'Satoshi',
            'sans-serif'
        ],
        body: [
            'Times New Roman',
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
        '14': [
            '14px',
            {
                lineHeight: '22.4px'
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
                lineHeight: '24px',
                letterSpacing: '-0.2px'
            }
        ],
        '24': [
            '24px',
            {
                lineHeight: '36px'
            }
        ],
        '28': [
            '28px',
            {
                lineHeight: '28px'
            }
        ],
        '32': [
            '32px',
            {
                lineHeight: '32px',
                letterSpacing: '-0.8px'
            }
        ],
        '36': [
            '36px',
            {
                lineHeight: '50.4px'
            }
        ],
        '44': [
            '44px',
            {
                lineHeight: '52.8px',
                letterSpacing: '-0.44px'
            }
        ],
        '56': [
            '56px',
            {
                lineHeight: '67.2px',
                letterSpacing: '-0.56px'
            }
        ],
        '100': [
            '100px',
            {
                lineHeight: '120px',
                letterSpacing: '-6px'
            }
        ]
    },
    spacing: {
        '2': '4px',
        '10': '20px',
        '12': '24px',
        '15': '30px',
        '20': '40px',
        '22': '44px',
        '30': '60px',
        '40': '80px',
        '50': '100px',
        '80': '160px',
        '100': '200px'
    },
    borderRadius: {
        sm: '5px',
        md: '8px',
        lg: '14px',
        xl: '23px',
        full: '1000px'
    },
    boxShadow: {
        sm: 'rgba(255, 255, 255, 0.4) 0px 3px 1px 0px inset, rgba(255, 255, 255, 0.4) 0px -3px 1px 0px inset',
        xs: 'rgba(0, 0, 0, 0) 0px 1px 2px 0px inset',
        md: 'rgba(255, 255, 255, 0.5) 0px 0px 9px 0px inset',
        xl: 'rgba(0, 0, 0, 0.2) 1px 20px 30px -12px'
    },
    container: {
        center: true,
        padding: '0px'
    },
    maxWidth: {
        container: '1200px'
    }
},
  },
};
