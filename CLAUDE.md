# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 16.1.0 application called "BDMS UAE Roadshow 2026" - a healthcare excellence platform for Bangkok Dusit Medical Services (BDMS), Thailand's leading private hospital network. The site serves as an information portal for a roadshow event in the UAE offering free consultations with expert medical teams.

## Technology Stack

- **Framework**: Next.js 16.1.0 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 with custom theme, CSS variables
- **UI Components**: Radix UI primitives, shadcn/ui components
- **Icons**: Lucide React
- **Animations**: Swiper.js for carousels, tw-animate-css
- **Analytics**: Vercel Analytics
- **Fonts**: IBM Plex Sans (Google Fonts)

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Main home page
│   └── globals.css      # Global styles and theme
├── components/          # Reusable UI components
│   ├── ui/              # Base UI components (button, input, etc.)
│   └── sections/        # Page sections (hero, about, etc.)
├── data/                # Static data files (faqs, specialities, etc.)
├── lib/                 # Utility functions
├── hooks/               # Custom React hooks
└── public/              # Static assets
```

## Key Features

1. **Responsive Design**: Mobile-first approach with responsive breakpoints
2. **Multi-section Layout**: Hero, About, FAQ, Specialities, Registration sections
3. **Interactive Forms**: Registration form with validation and state management
4. **Data-driven Content**: Structured data for FAQs, specialities, and trust indicators
5. **Dark Mode Support**: Full dark/light theme implementation
6. **Accessibility**: Semantic HTML and ARIA attributes

## Development Commands

- `npm run dev` - Start development server (runs on http://localhost:3000)
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality checks

## Styling System

- Uses Tailwind CSS with a custom theme defined in globals.css
- Implements a comprehensive color palette using OKLCH color space
- Follows BDMS branding with primary colors (#0C73B5 blue, #ED1C24 red)
- Includes custom animations for logo scrolling effect
- Uses IBM Plex Sans as the primary font via Google Fonts

## Component Architecture

The application uses a section-based component architecture:
- **Hero Section**: Prominent call-to-action with BDMS branding
- **Registration Form**: Multi-field form with dropdown selections
- **FAQ Section**: Accordion-based Q&A component using Radix UI
- **Specialities Display**: Grid of medical specialties with icons
- **Trusted Provider Section**: Carousel showing BDMS hospitals/network

## Data Management

The application uses TypeScript interfaces to define data structures for:
- FAQ entries (question/answer pairs)
- Medical specialities (icon, title, description)
- Trusted provider information (number, title, description, image)

## Important Configuration

- TypeScript configured with strict mode and Next.js plugin
- Path aliases set up (@/* maps to ./src/*)
- ESLint integration for code quality
- Component library follows shadcn/ui patterns
- Font optimization with Google Fonts (IBM Plex Sans)
- PostCSS configured with Tailwind CSS plugin

## Development Guidelines

- Maintain consistent use of the OKLCH color system and BDMS branding
- Use Radix UI primitives for accessible components
- Follow the existing section-based component pattern
- Ensure responsive design across all screen sizes
- Preserve accessibility features (ARIA attributes, semantic HTML)
- Use the existing data structure patterns for content management