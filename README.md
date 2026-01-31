# Store Client

Modern web application built with Next.js and React for managing and browsing store items.

## Technologies Used

- **Next.js 16**: The React framework for the web.
- **React 19**: Component-based UI library.
- **Tailwind CSS 4**: Utility-first CSS framework.
- **TypeScript**: For type-safe development.
- **use-debounce**: Hook for debouncing search input.

## Project Structure

```text
client/
├── src/
│   ├── app/                 # Next.js App Router (pages and layouts)
│   │   ├── [id]/            # Item Details page
│   │   │   ├── edit/        # Edit Item page
│   │   ├── new/             # Add New Item page
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx       # Main app layout
│   │   └── page.tsx         # Home page (Item Listing)
│   ├── components/          # Reusable UI components
│   │   ├── layout/          # Global layout components (Header)
│   │   ├── FilteredItemList # Logic for searching/filtering items
│   │   ├── ItemButton       # Unified Add/Edit action button
│   │   ├── ItemCard         # Individual item display card
│   │   ├── ItemDetail       # Detailed item view
│   │   ├── ItemForm         # Form for creating/editing items
│   │   └── SearchBar        # Search and filter interface
│   ├── constants.ts         # App-wide constants (e.g., API URL)
│   └── types/               # TypeScript models
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
