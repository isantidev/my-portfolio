# My Portfolio

## Portfolio Project Structure (goal)

```
src/
├── assets/              # Static assets (images, fonts, icons, etc.)
│   ├── images/
│   ├── icons/
│   └── fonts/
│
├── components/          # Reusable, presentational components
│   ├── ui/              # Primitive components (Button, Card, Modal, Badge, etc.)
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Modal.jsx
│   │   ├── Badge.jsx
│   │   └── index.js     # Export all UI components
│   │
│   ├── project/         # Project-specific components
│   │   ├── ProjectCard.jsx
│   │   ├── ProjectGallery.jsx
│   │   ├── CaseStudyLayout.jsx
│   │   ├── TechStack.jsx
│   │   └── index.js
│   │
│   └── layout/          # Layout components
│       ├── Header.jsx
│       ├── Footer.jsx
│       ├── Navigation.jsx
│       ├── MainLayout.jsx
│       └── index.js
│
├── pages/               # Top-level page components
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Projects.jsx
│   ├── ProjectDetail.jsx
│   ├── Contact.jsx
│   └── index.js
│
├── hooks/               # Custom React hooks
│   ├── useProjects.js
│   ├── useScrollAnimation.js
│   ├── useTheme.js
│   ├── useLocalStorage.js
│   └── index.js
│
├── utils/               # Pure JavaScript utility functions
│   ├── constants.js     # Application constants (NAV_LINKS, SOCIAL_LINKS, THEMES)
│   ├── helpers.js       # Helper functions (formatDate, debounce, slugify)
│   ├── animations.js    # Animation configurations and utilities
│   ├── validators.js    # Form validation functions
│   └── index.js
│
├── data/                # Static data (substitute for backend)
│   ├── portfolioData.js # Main portfolio content and projects
│   ├── skills.js        # Technical skills and proficiencies
│   ├── experience.js    # Work experience and education
│   └── index.js
│
├── styles/              # Global styles (if needed beyond Tailwind)
│   ├── globals.css      # Global CSS and Tailwind imports
│   └── components.css   # Custom component styles
│
└── main.jsx             # Vite entry point

# Root files
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── eslint.config.js
├── .gitignore
├── package.json
└── README.md
```

## Key Features of This Structure:

### 📁 **Component Organization**

-   **`ui/`** - Atomic, reusable components that can be used anywhere
-   **`project/`** - Domain-specific components related to showcasing projects
-   **`layout/`** - Structural components that define page layouts

### 🎣 **Custom Hooks**

-   Centralized business logic and stateful operations
-   Reusable across components
-   Easy to test and maintain

### 🛠️ **Utilities**

-   Pure functions for common operations
-   Constants for maintainable configuration
-   Animation and validation helpers

### 📊 **Data Layer**

-   Centralized data management
-   Easy to switch to a CMS or API later
-   Type-safe data structures

### 🎨 **Styling**

-   Tailwind CSS for utility-first styling
-   Custom CSS only when necessary
-   Global styles for consistent theming

## Benefits:

-   ✅ **Clear separation of concerns**
-   ✅ **Scalable but not over-engineered**
-   ✅ **Easy to navigate and understand**
-   ✅ **Perfect for portfolio projects**
-   ✅ **Shows good React practices**
-   ✅ **Employer-friendly structure**
