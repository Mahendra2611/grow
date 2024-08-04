/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        'inner-custom': 'inset 0 0 0 8% rgba(255, 255, 255, 0.15)', // Customize the shadow as needed
        // You can add more custom inner shadows here
      },
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(120px, 1fr))',
      },

    },
    fontSize: {
      xs: '13px',
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    screens: {
      pn: "0px",
      vs: "200px",
      ss: "360px",
      pp: "500px",
      sm: "821px",
      md: "1180px",
      lg: "1440px",
      xl: "1536px",
    },
  },
 
  plugins: [],
};
