# 2023 TUI Objectives Tracker

Welcome to the my TUI Objective Tracker! This project is built using [11ty](https://www.11ty.dev/) as the static site generator (SSG) and [Nunjucks](https://mozilla.github.io/nunjucks/) as the templating engine.

This README.md will guide you through the project, and denotes my understanding of SSGs, 11ty, and Nunjucks.


## Table of Contents
- [What is a Static Site Generator (SSG)?](#what-is-a-static-site-generator-ssg)
- [Introduction to 11ty](#introduction-to-11ty)
- [Understanding Nunjucks](#understanding-nunjucks)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Themes](#themes)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## What is a Static Site Generator (SSG)?

A Static Site Generator is a tool that generates static HTML pages from dynamic content. SSGs pre-build the entire site before deployment, resulting in faster loading times and improved security when compared to Server Side Rendering (SSR) and Client Side Rendering (CSR) solutions.

## Introduction to 11ty

[11ty](https://www.11ty.dev/) is a simple tool for SSG and can use multiple templating engines. It is open source, free to use and comparitvaly fast compared to other SSG solutions.

## Understanding Nunjucks
Nunjucks is a templating engine developed by Mozilla, used to build dynamic templates for SSG sites.
It has simple syntax and has powerful features such as looping, block inheritance, and filters.
Once again this is open source, free to use and comparitvaly fast compared to other SSG solutions.


## Getting Started

To get started with this project, follow these steps:

1. Clone the repository

2. Install the dependencies

```bash
cd ObjectivesApp
npm install
```
3. Run the Server

```bash
npm run dev
```
4. Visit `http://localhost:8080` in your browser to view.

## Project Structure

```
ObjectivesApp
├─ .gitignore
├─ eleventy.config.js
├─ package.json
└─ src
   ├─ _data
   │  ├─ objectives.json
   │  └─ site.js
   ├─ _includes
   │  ├─ components
   │  │  ├─ footer.njk
   │  │  ├─ header.njk
   │  │  └─ searchBar.njk
   │  └─ layouts
   │     ├─ allObjectives.njk
   │     └─ base.njk
   ├─ _utils
   │  └─ autoStyle.js
   ├─ assets
   │  ├─ CSS
   │  │  ├─ blueClassic
   │  │  │  ├─ base.css
   │  │  │  ├─ footer.css
   │  │  │  ├─ header.css
   │  │  │  └─ searchBar.css
   │  │  └─ purpleModern
   │  │     ├─ about.css
   │  │     ├─ allObjectives.css
   │  │     ├─ base.css
   │  │     ├─ footer.css
   │  │     ├─ header.css
   │  │     ├─ searchBar.css
   │  │     └─ singleObjective.css
   │  └─ fonts
   │     └─ Roboto-Bold.woff2
   └─ pages
      ├─ 404.njk
      ├─ about.njk
      ├─ index.njk
      ├─ objectivePages.njk
      ├─ pages.json
      └─ search.njk
```

## Themes

Currently, there are two themes blueClassic and purpleModern.

purpleModern is the default, and fully complete theme.

If /src/_data/site.js is updated with a new theme, that theme from src/assets/css will be automatically applied.

This functionality is found within /src/_utils/autoStyle.js and was implimented to practice modular building.

It is functional, however the secondary theme (blueClassic) is not fully fleshed out as current realease.


## Usage

Feel free to customize the proeject to track your objectives

Update the ObjectivesApp/src/_data/objectives.json file to add or update the objectives.

The home page cards and objective pages are dynamically generated based on this json file.


## Contributing

If you would like to contribute to this project, please follow the steps below:


## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

Happy coding!

