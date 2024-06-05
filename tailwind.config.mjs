/** @type {import('tailwindcss').Config} */
import starlightPlugin from '@astrojs/starlight-tailwind';
import colors from 'tailwindcss/colors';

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        accent: colors.zinc,
        gray: colors.zinc,
        mywhite: '#fcfcfc',
        myoffwhite: '#e3e3e3',
        myallwhite: '#ffffff',
        mylightgrey: '#a7b1b7',
        myblue: '#293f58',
        mygreen: '#c8df8c',
        myorange: '#f58333',
        mydarkgrey: '#393d34',
        myblack: '#10120d',
        myallblack: '#000000',
      },
      fontFamily: {
        sans: ['"Font-Main"'],
      },
    },
  },
  plugins: [starlightPlugin(
    )],
};
