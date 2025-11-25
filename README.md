# Wizarding Realms - Dark Fantasy Waitlist Landing Page

A stunning, cinematic dark fantasy landing page for "Wizarding Realms" - a Harry Potter themed Web3 game.

## Features

- 🌑 **Extremely Dark, Cinematic Design** - Forbidden magic vibe with misty Scottish highlands atmosphere
- ✨ **Animated Header** - Massive glowing golden letters with fire particles
- ⏰ **Countdown Timer** - Until Phase 0 (December 1, 2025)
- 📧 **Waitlist Form** - Ready for ConvertKit/Mailchimp integration
- 🏠 **House Counters** - Animated Gryffindor, Slytherin, Ravenclaw, Hufflepuff counters
- 🎴 **Enchanted Plot Cards** - Floating trading card style previews
- 🎨 **Background Effects** - Fire particles, lightning, mist, Thestrals, Giant Squid, floating ruins
- 🪄 **Custom Wand Cursor** - Glowing wand cursor on hover
- 📱 **Fully Responsive** - Mobile-first design
- ⚡ **Performance Optimized** - Fast loading with Next.js Image optimization

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Google Fonts** - Cinzel & Harry P fonts

**Font Note:** "Harry P" is not available on Google Fonts. The project currently uses Cinzel as a fallback. To use the actual "Harry P" font:

1. Download the "Harry P" font file (`.woff2` format recommended)
2. Place it in `public/fonts/HarryP.woff2`
3. Uncomment the `localFont` code in `app/layout.tsx` and comment out the Cinzel fallback
4. Uncomment the `@font-face` declaration in `app/globals.css`

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Form Integration

The waitlist form is ready for integration with ConvertKit or Mailchimp. Update the `handleSubmit` function in `components/WaitlistForm.tsx`:

```typescript
// ConvertKit example
const response = await fetch('YOUR_CONVERTKIT_API_ENDPOINT', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email, api_key: 'YOUR_API_KEY' })
});

// Mailchimp example
const response = await fetch('YOUR_MAILCHIMP_API_ENDPOINT', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email_address: email, status: 'subscribed' })
});
```

## OG Image

Replace `public/og-image.jpg` with a 1200x630px dark fantasy banner featuring:
- Floating castle on fire
- Dark emerald and gold color scheme
- "Wizarding Realms" branding

## Color Palette

- Background: `#000000`, `#0a0a0a`
- Emerald: `#0d1a0f`
- Blood Red: `#8b1a1a`
- Gold: `#ffd700`, `#ffed4e`

## Build for Production

```bash
npm run build
npm start
```

## License

Private project - All rights reserved.

