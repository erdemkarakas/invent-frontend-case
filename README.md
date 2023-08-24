
# Invent Analytics Front-end Developer Case Question

To Run the project, please follow the steps below:

1. Clone the project
2. Run `npm install` to install the dependencies
3. Run `npm run dev` to start the project
4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

 # Project Flow
 <img src="https://raw.githubusercontent.com/erdemkarakas/invent-frontend-case/main/invent-movies-flow.png" alt="reactnative" />

 # Project structure
```
├── node_modules (.gitignore)
├── public
│   ├── invent.ico
├── src
│   ├── api
│   │   ├── client.ts
│   ├── components
│   │   └── Input
│   │   │   ├── index.css
│   │   │   └── Input.scss
│   │   └── LoadingSpinner
│   │   │   ├── index.css
│   │   │   └── LoadingSpinner.scss
│   │   └── SelectBox
│   │   │   ├── index.css
│   │   │   └── SelectBox.scss
│   ├── icons
│   │   ├── logo.tsx
│   ├── pages
│   │   ├── Home
│   │   │   ├── constants.css
│   │   │   ├── Home.scss
│   │   │   ├── index.tsx
│   │   │   └── types.tsx
│   │   ├── MovieDetails
│   │   │   ├── MovieDetails.scss
│   │   │   ├── index.tsx
│   │   │   └── types.tsx
│   ├── redux
│   │   ├── movie
│   │   │    └──  movieSearchSlice.ts
│   │   ├── hooks.ts
│   │   └── store.ts
│   ├── views
│   │   ├── Header
│   │   │   ├── Header.scss
│   │   │   └── index.tsx
│   │   ├── SearchBar
│   │   │   ├── SearchBar.scss
│   │   │   └── index.tsx
│   ├── App.scss
│   ├── App.tsx
│   ├── index.scss
│   ├── main.tsx
│   └── vite-env.d.ts
├── .gitignore
├── package.json
└── README.md
└── yarn.lock
```


# Project UI Gif

<img src="invent-movies.gif" />
