# Saheer Hawa — Personal Portfolio Website

A clean, responsive, editorial personal portfolio website for **Saheer Hawa**, Final-year BSc Computer Science student and Frontend Developer at ICS College, Khed.

Built with Next.js (App Router), TypeScript, and Tailwind CSS. The design follows a restrained, text-led editorial aesthetic inspired by warm off-white tones (`#F7F6F0`), high-contrast dark typography (`#24271F`), muted olive accents (`#777F59`), and generous whitespace.

---

## Technologies Used

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict type checking)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with centralized CSS custom properties
- **Icons**: [Lucide React](https://lucide.dev/)
- **Linting**: [ESLint](https://eslint.org/) (`eslint-config-next`)

---

## Prerequisites

- [Node.js](https://nodejs.org/) (v18.17.0 or newer; tested on Node.js v26)
- [npm](https://www.npmjs.com/) or another package manager (pnpm / yarn)

---

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the live site.

### 3. Production Build

To build the static optimized production application:

```bash
npm run build
```

To run the built production server locally:

```bash
npm run start
```

### 4. Code Quality & Linting

```bash
npm run lint
npx tsc --noEmit
```

---

## Project Structure

```text
saheer-portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css         # Design tokens, CSS variables, typography, accessibility resets
│   │   ├── icon.svg            # Typographic editorial SVG favicon (SH monogram)
│   │   ├── layout.tsx          # Root HTML layout, SEO metadata, Open Graph tags
│   │   └── page.tsx            # Single-page assembled portfolio sections
│   ├── components/
│   │   ├── Header.tsx           # Desktop navbar, wordmark, skip-to-content link, hamburger trigger
│   │   ├── MobileNavigation.tsx # Accessible modal overlay with keyboard & Escape key handlers
│   │   ├── Hero.tsx             # Typographic headline, intro badge, primary & secondary CTAs
│   │   ├── About.tsx            # Profile narrative and background description
│   │   ├── Education.tsx        # Degree, institution, academic level
│   │   ├── Skills.tsx           # Grouped technical skills, tools, and interests
│   │   ├── EducationAndSkills.tsx # Consolidated section container
│   │   ├── ProjectItem.tsx      # Individual project card with metadata, tech labels, status
│   │   ├── Projects.tsx         # Selected projects section
│   │   ├── Experience.tsx       # Internship & hackathon achievement cards
│   │   ├── Contact.tsx          # Connect heading, verified GitHub & LinkedIn links, optional email
│   │   └── Footer.tsx           # Minimal copyright line, dynamic year, back to top
│   └── data/
│       └── portfolio.ts         # Centralized configuration file for all portfolio content
├── tailwind.config.ts           # Tailwind theme configuration mapped to CSS variables
├── tsconfig.json                # TypeScript strict configuration
└── package.json                 # Project scripts and dependencies
```

---

## How to Edit Portfolio Content

All personal details, project descriptions, skills, and links are strictly centralized in:

📂 `src/data/portfolio.ts`

### 1. Adding an Email Address
By default, no email address is displayed for privacy. To show an email contact button:
1. Open `src/data/portfolio.ts`.
2. Locate `portfolioData.personal`.
3. Uncomment or set the `email` property:
   ```typescript
   personal: {
     name: "Saheer Hawa",
     // ...
     email: "your.name@example.com",
   }
   ```
The website will automatically render an accessible mailto button in the Contact section.

### 2. Updating Social Profiles
Social links are configured in `portfolioData.contact.socialLinks`. Update the `url` property with your new profile link:
```typescript
socialLinks: [
  {
    name: "GitHub",
    url: "https://github.com/saheerhawa",
    label: "saheerhawa on GitHub",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/saheer-hawa-b077173bb/",
    label: "Saheer Hawa on LinkedIn",
  },
]
```

### 3. Updating Project Details
Each project in `portfolioData.projects.items` has typed fields:
- `contribution`: Update your specific individual or team contribution when confirmed.
- `repositoryUrl`: Add or update a GitHub link (if omitted, the card automatically displays an internal/proprietary asset badge).
- `technologies`: Array of strings for tech stack badges.
- `plannedIntegration`: Future roadmap technologies (e.g. backend/database).

### 4. Updating Internship Year
In `portfolioData.experience.internship`, set the optional `year` field:
```typescript
internship: {
  role: "Frontend & Research Intern",
  organization: "ZenCro Digital",
  period: "September – November",
  year: "2024", // Set confirmed year here
  // ...
}
```

---

## Documentation of Unconfirmed / Missing Information

To ensure technical and ethical integrity, the following information was intentionally not fabricated on the public website:

1. **Graduation Date & Scores**: Omitted until official dates and scores are confirmed; fields in `portfolio.ts` are optional and will display cleanly once populated.
2. **Internship Year**: Displayed as "September – November" without an invented calendar year. An optional `year` field is provided in `src/data/portfolio.ts`.
3. **StudyFlow Individual Contribution**: Described neutrally as an academic task manager without attributing unverified solo architecture or team breakdown.
4. **GYMCORE Public Repository / Live Demo**: No public code repository or live deployment link is provided since this was a proprietary internship asset at ZenCro Digital.
5. **Email Address**: Omitted from the UI until explicitly provided in `src/data/portfolio.ts`.
6. **Résumé**: No fake download link or button is included until an actual PDF résumé is added to `public/`.

---

## Deployment to Vercel

This portfolio is fully configured and ready for 1-click deployment on [Vercel](https://vercel.com/):

1. Push your repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Saheer Hawa portfolio"
   git remote add origin https://github.com/saheerhawa/saheer-portfolio.git
   git push -u origin main
   ```
2. Log in to [Vercel](https://vercel.com/) and click **"Add New..." > "Project"**.
3. Import your `saheer-portfolio` repository.
4. Keep all default build settings:
   - **Framework Preset**: Next.js
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
   - **Install Command**: `npm install`
5. Click **Deploy**.

No backend databases, paid APIs, or environment variables are required.
