# Minimalist Portfolio Website

Welcome to the Minimalist Portfolio Website repository! This project is a custom-built React TypeScript portfolio website template designed to showcase your skills, projects, and accomplishments in a clean and minimalist style.

## Features

- Clean and minimalist design to highlight your work effectively.
- Built with React and TypeScript for a modern and type-safe development experience.
- Easily customizable sections for personal information, skills, projects, and contact details.
- Responsive layout for optimal viewing on various devices and screen sizes.
- Integration with GitHub API to dynamically display your GitHub repositories.
- SEO-friendly metadata to improve search engine visibility.
- Simple deployment process for getting your portfolio online quickly.

## Getting Started

1. Clone this repository to your local machine:
```
git clone https://github.com/caarlosdamian/minimalist-portfolio-website.git
```
2. Install the required dependencies using your preferred package manager (npm or yarn):
```
cd minimalist-portfolio-website
npm install
# or
yarn install
```
3. Run the development server to preview your portfolio locally:
```
npm run dev
# or
yarn dev
```


## Customizing Routes

The portfolio website template comes with a predefined set of routes. You can customize these routes to suit your needs. The routes are defined in the `src/routes/routes.tsx` file.

Here's an example of how the routes are configured:

```tsx
import { lazy } from 'react';

const Home = lazy(() => import('../pages/home/Home'));
const Portafolio = lazy(() => import('../pages/portafolio/Portafolio'));
const Detail = lazy(() => import('../pages/details/Details'));
const Contact = lazy(() => import('../pages/contact/Contact'));

export const routes = [
  {
    id: 'home',
    component: <Home />,
    path: '/',
  },
  {
    id: 'portafolio',
    component: <Portafolio />,
    path: '/portafolio',
  },
  {
    id: 'contact',
    component: <Contact />,
    path: '/contact',
  },
  {
    id: 'detail',
    component: <Detail />,
    path: '/details/:id',
  },
];
```


## Customizing Portfolio Content

You can customize the content of your portfolio pages by modifying the `src/utils/portfolio.ts` file. This file contains an array called `portafolioInfo`, where each item represents a project in your portfolio.

Here's an example of how a project is defined in the `portafolioInfo` array:

```tsx
import * as images from '../assets/index';
import { PortafolioItem } from '../interfaces';

export const portafolioInfo: PortafolioItem[] = [
  {
    id: 'manage',
    title: 'Manage',
    desc: 'This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.',
    portafolioImages: {
      desktop: images.portafolioManageDesktop,
      mobile: images.portafolioManageMobile,
      tablet: images.portafolioManageTablet,
    },
    habilities: 'Interaction Design / Front End Development',
    languages: ['HTML', 'CSS', 'JS'],
    background: '...',
    detailsImages: {
      hero: [...],
      preview: [...],
      previewTwo: [...],
    },
  },
  // ... other projects
];

```

## Components Overview

The `src/components` directory contains a variety of React components that make up different sections of your portfolio website. These components are designed to be modular, allowing you to easily customize and build your portfolio's layout and content.

Here's a brief overview of the components included in this directory:

- **Loader**: The `Loader` component provides a loading indicator that can be used to show progress or wait states in your portfolio.

- **Footer**: The `Footer` component represents the bottom section of your portfolio, typically containing copyright information and links to social media profiles.

- **Navbar**: The `Navbar` component is the top navigation bar of your portfolio, providing links to different pages or sections of your website.

- **Picture**: The `Picture` component can be used to display images with optional captions or descriptions.

- **Interest**: The `Interest` component can display interest section shared across several pages.

- **Slider**: The `Slider` component allows you to create interactive navigation across projects see /details/manage.

- **Button**: The `Button` component creates styled buttons that you can use for various calls to action.

- **Separator**: The `Separator` component creates visual dividers or separators between sections.

- **Card**: The `Card` component represents a styled card that can be used to display project information or other content.

- **Input**: The `Input` component can be used to create input fields, such as text fields or text areas, often used in forms.

These components serve as building blocks for your portfolio's pages and sections. You can customize, combine, and reuse them to create a unique and engaging portfolio website.

To use a component, simply import it from the `src/components` directory and integrate it into your pages or sections. You can find examples of how these components are used in the various pages under the `src/pages` directory.

Feel free to explore, modify, and combine these components to tailor your portfolio website to your preferences and showcase your skills and projects effectively.

