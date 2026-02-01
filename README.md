# Store Client

Modern web application built with Next.js and React for managing and browsing store items.

## Technologies Used

- **Next.js 16**: The React framework for the web using App Router.
- **React 19**: Component-based UI library.
- **SWR**: Data fetching, caching, and state management.
- **Tailwind CSS 4**: Utility-first CSS framework.
- **TypeScript**: For type-safe development.

## Key Features

- **Global SWR Configuration**: Centralized fetcher and revalidation settings via `SWRProvider`.
- **Hybrid Rendering**: Combines Server Components for SEO and Client Components for dynamic interactivity.
- **Instant Search**: Optimized client-side filtering for immediate user feedback.
- **Cache Synchronization**: Automatic cache invalidation on item updates and deletions.

## Project Structure

```text
client/
├── src/
│   ├── app/                 # Next.js App Router (pages and layouts)
│   │   ├── [id]/            # Item Detail & Edit pages
│   │   ├── new/             # Create Item page
│   │   ├── layout.tsx       # Root layout with SWRProvider
│   │   └── page.tsx         # Home page (Item Listing)
│   ├── components/          # Reusable UI components
│   │   ├── item/            # Detail-specific components (ItemDetailWrapper)
│   │   ├── items/           # List-specific components (ItemsWrapper, SearchBar)
│   │   ├── item form/       # Form-related components (ItemForm, EditFormWrapper)
│   │   ├── SWRProvider.tsx  # Global SWR configuration
│   │   └── Header.tsx       # Global navigation
│   ├── hooks/               # Custom hooks (useItems, useItem)
│   ├── utils/               # API utilities and validation
│   ├── constants.ts         # App-wide constants
│   └── types/               # TypeScript models & types
├── package.json             # Scripts and dependencies
└── next.config.ts           # Next.js configuration
```

## Getting Started

### Installation

Install the project dependencies:

```bash
npm install
```

### Running the Project

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.
