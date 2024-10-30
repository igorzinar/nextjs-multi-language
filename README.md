# My Next.js Multi-Language Website

This is a simple multi-language website built using **Next.js** with the App Router, providing an intuitive user interface and a language selection feature. The project is designed to demonstrate a scalable and accessible multilingual setup without using external internationalization libraries.

## Features

- **Multi-language Support**: Users can switch between **English** and **Romanian** using the language selector available in the navigation.
- **Client-Side Language Management**: The language is managed using cookies providing persistent language settings for users.
- **Server-Side Rendering (SSR)** and **Static Site Generation (SSG)**: The website uses SSR for personalization based on language and ensures SEO-friendly pages.
- **Clean Navigation**: Navigation links include `Home` and `About` pages, allowing users to easily navigate the website.
- **Dark Mode**: The website adapts to the user's system color scheme (light or dark).


## Live Demo

### Check out the deployed version of the project on Vercel: Next.js Multi-Language Website: 
### https://nextjs-multi-language-seven.vercel.app/home




## Installation

1. Clone the repository:
   ```bash
   git clone git@github.com:igorzinar/nextjs-multi-language.git
   ```
2. Navigate to the project directory:
   ```bash
   cd nextjs-multi-language
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) to view the website in your browser.

## Folder Structure

- **`app/`**: Contains pages and layouts for the website using the App Router.
- **`components/`**: Holds reusable components, such as `TheHeader` for navigation.
- **`public/`**: Contains static files, including the `favicon.ico`.
- **`lib/`**: Utility functions for fetching translations and handling cookies.

## How to Use

- **Language Selection**: Use the dropdown in the header to select a language. The language preference will be saved and remembered across sessions.
- **Page Navigation**: Click on `Home` or `About` in the header to navigate through the site.

## Customization

- **Translations**: To add or modify translations, edit the files in the `translations/` directory.
- **Styling**: The project uses CSS variables for easy theming and adaptation to dark and light modes.

## Favicon

A custom favicon has been added to the project. It is located in the `public/` directory as `favicon.ico`. You can replace it with your own favicon if needed.

## Technologies Used

- **Next.js**: Framework for React applications with SSR and SSG capabilities.
- **React**: Component-based library for building the user interface.
- **CSS**: Styling for the website, including dark mode support using CSS variables.

## License

This project is licensed under the MIT License.


