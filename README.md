# Project Chronicle

A small gothic-themed project planner built as a React and TypeScript learning exercise. It lets you create projects, browse project cards, open a project, and add or clear its tasks.

> This is a deliberately simple practice project, not a production-ready task management application. The goal was to learn and practice React components, props, state, forms, and styling without adding unnecessary complexity.

## Screenshot

![Project Chronicle home page](docs/screenshots/home.png)

## Features

- Create projects with a title, description, and due date.
- View projects as cards and open a project's details.
- Add tasks to a project and clear tasks from its list.
- Delete a project.
- Show a small message dialog after project and task actions.
- Responsive dark interface with gothic artwork, glass-like cards, and rose accents.

## How it works

The app has three views: the project list, the add-project form, and project details. A small `currentPage` state in the main React component selects which view to render. Navigation is handled with callbacks and conditional rendering.

This project intentionally does **not** use a routing library such as React Router. The view state is enough for this small exercise; a router would be a reasonable next step if the app grew to need URLs, browser history, or deep links.

Projects and tasks are held in React state in memory. There is no backend or browser storage, so the data resets when the page is refreshed. This is expected for the current practice version.

## Tech stack

- React
- TypeScript
- Vite
- Tailwind CSS
- React Icons
- Oxlint

## Run locally

Requirements: Node.js and npm.

```bash
npm install
npm run dev
```

Vite prints a local URL in the terminal. Open that URL in a browser to use the app.

Useful scripts:

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server. |
| `npm run build` | Type-check and create a production build in `dist/`. |
| `npm run preview` | Preview the production build locally. |
| `npm run lint` | Run Oxlint. |

## Font credits and licenses

The interface uses these fonts from Google Fonts:

- [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond/license?query=Cormorant+Garamond)
- [EB Garamond](https://fonts.google.com/specimen/EB+Garamond/license?query=EB+Garamond)

The font files are included in `src/assets/font/`. See the linked Google Fonts license pages for their license terms.

## Artwork credits

Artwork files are included under `src/assets/`. Add the original creator/source and license for each image here before publishing if the artwork is not yours or does not already include attribution. Check that the licenses allow redistribution in a public repository.

## Current limitations

- Projects and tasks are not saved after a page refresh.
- Navigation is view-state based; there are no separate routes or shareable project URLs.
- The Cancel button on the project form is presentational and is not wired to navigation yet.
- Action dialogs show result messages; project deletion is not currently guarded by a confirmation dialog.
- This is a learning project and has not been built out with a backend, automated test suite, or production deployment setup.
