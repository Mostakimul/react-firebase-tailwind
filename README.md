# Getting Started with Create React App, Firebase and Tailwind

## Technology used:

- React js
- React router 6
- React Hook Form
- React Loader Spinner
- Tailwind CSS
- Firebase 9
- Yarn

### `yarn pre-dev`

It will install following packages

> axios, react-router-dom, react-hook-form, react-loader-spinner

### `yarn set-tail`

It will install necessary packages for tailwind.

1. After Installing swap the scripts:

```diff
-"start": "react-scripts start",
-"build": "react-scripts build",
-"test": "react-scripts test",

+"start": "craco start",
+"build": "craco build",
+"test": "craco test",
```

2. Create a `craco.config.js` in the project root and paste the below code.

```
module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
}
```

3. Configure `tailwind.config.js` file

```diff
module.exports = {
- purge: [],
+purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
darkMode: false, // or 'media' or 'class'
theme: {
  extend: {},
},
variants: {
  extend: {},
},
plugins: [],
  }
```

4. Insert the following code into `index.js` file.

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### `Insert your firebase config by creating .env.local in the root project folder`

- Follow this link to know more https://create-react-app.dev/docs/adding-custom-environment-variables/#adding-development-environment-variables-in-env
