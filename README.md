## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000]

## If in docker run different port then

1. need to chagne port number on package.json file :

 "scripts": {
    "dev": "next dev -p 3002",
    "build": "next build",
    "start": "next start -p 3002",
    "lint": "next lint",
    "test": "jest",
    "coverage": "jest --coverage"
  },

## and then build and run 

sudo docker build -t simple-calculator .

sudo docker run -dp 3001:3001 simple-calculator

You can start editing the page by modifying `app/page.tsx`.

## some docker command:

docker ps 

docker ps -a

docker stop containerId

docker start image name

# simple-calculator

# for rawjs-with-jest-test
npm init -y

npm i --save-dev jest

# for react-with-ts-jest

npm install --save-dev jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom

create jest.config.js file

create jest.setup.js file

add in package.json file:

    "test": "jest",
    "coverage": "jest --coverage"


create __tests__ folder




