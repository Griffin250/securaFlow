Hei
Hello , this is a test!

npm create vite@latest my-app -- --template react
cd my-app


npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p


module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


@tailwind base;
@tailwind components;
@tailwind utilities;


import './index.css';
