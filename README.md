# NaxoAI Landing Page

A premium, conversion-focused landing page for NaxoAI - AI consulting services for real estate agents.

## 🚀 Built With

- **Next.js 14** with App Router
- **TypeScript** for type safety  
- **Tailwind CSS** for styling
- **Heroicons** for icons
- **Mobile-first responsive design**
- **Advanced animations & interactions**

## ✨ Features

### 🎨 Design & UX
- **Premium, trustworthy design** that feels modern yet approachable
- **Professional blue/gray color scheme** with strategic accent colors
- **Responsive typography** that scales beautifully across devices
- **Smooth scroll animations** with fade-in effects
- **Sticky CTA button** that follows scroll for maximum conversions
- **Glassmorphism effects** and subtle gradients throughout

### 📱 Mobile Excellence  
- **Mobile-first responsive design** 
- **Optimized touch targets** and spacing
- **Collapsible mobile navigation**
- **Responsive image placeholders**
- **Perfect typography scaling** on all screen sizes

### ♿ Accessibility & SEO
- **WCAG compliant** with proper focus states
- **Skip to content** link for screen readers
- **Semantic HTML** structure throughout
- **Comprehensive meta tags** and Open Graph data
- **Structured data** for local business
- **Optimized heading hierarchy** (H1 → H2 → H3)

### 🎯 Conversion Optimization
- **Multiple conversion opportunities** throughout the page
- **Sticky CTA** that appears after hero scroll
- **Smooth scrolling** to booking section
- **Free consultation prominently featured**
- **Social proof** and trust indicators
- **Clear value proposition** and benefit statements

## 📋 Page Sections

1. **🏠 Hero Section** - Compelling headline with embedded booking widget
2. **😤 Pain Points** - Relatable problems with engaging card design  
3. **🤖 AI Solutions** - Feature showcase with colorful icons
4. **👨‍💼 About Greg** - Personal introduction building trust
5. **💰 Pricing** - Transparent pricing with highlighted free consultation
6. **❓ FAQ** - Interactive expandable Q&A section
7. **📅 Calendly Integration** - Full booking section with strong closing
8. **🔗 Sticky CTA** - Floating action button for continuous conversions

## 🛠️ Technical Features

### Performance
- **Font preloading** for faster initial render
- **Optimized animations** with GPU acceleration
- **Lazy loading** with Intersection Observer
- **Minimal bundle size** with tree shaking

### Interactions
- **Scroll-triggered animations** using custom hooks
- **Hover effects** with smooth transitions  
- **Loading states** for async components
- **Interactive FAQ** with smooth expand/collapse
- **Sticky elements** with scroll detection

### Code Quality
- **TypeScript** throughout for type safety
- **Custom hooks** for reusable logic
- **Component composition** for maintainability
- **Consistent styling** with Tailwind utilities
- **Accessible components** with proper ARIA labels

## 🚦 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   Visit [http://localhost:3000](http://localhost:3000)

## 📞 Calendly Integration

Replace the placeholder Calendly embeds with your actual booking links:

**Hero Section (Compact):**
```tsx
<iframe 
  src="https://calendly.com/your-username/consultation" 
  width="100%" 
  height="200px"
  frameBorder="0"
/>
```

**Main Section (Full):**
```tsx
<iframe 
  src="https://calendly.com/your-username/consultation" 
  width="100%" 
  height="600px"
  frameBorder="0"
/>
```

## 🎨 Design System

### Colors
- **Primary:** Blue (#2563eb) - Trust and professionalism  
- **Gray Scale:** Professional grays (#64748b)
- **Accent Blue:** #0ea5e9 - Action and energy
- **Accent Purple:** #8b5cf6 - Innovation and creativity
- **Accent Teal:** #14b8a6 - Growth and success

### Typography
- **Font:** Inter (clean, modern, professional)
- **Responsive scales:** Mobile → Tablet → Desktop
- **Hierarchy:** Clear distinction between headings and body text

### Spacing
- **Section spacing:** Responsive vertical rhythm
- **Container padding:** Optimized for all screen sizes
- **Component spacing:** Consistent internal spacing

## 🔧 Customization

### Content Updates
- All text content is easily editable in individual components
- FAQ items can be modified in `components/FAQSection.tsx`
- Pain points and solutions in respective section files

### Styling Changes
- Global styles in `app/globals.css`
- Component-specific styles use Tailwind classes
- Custom animations and utilities defined in CSS

### Adding Sections
- Create new component in `components/`
- Import and add to `app/page.tsx`
- Follow existing patterns for consistency

## 🚀 Deployment

This is a standard Next.js application. Deploy to:
- **Vercel** (recommended for Next.js)
- **Netlify**  
- **AWS Amplify**
- Any platform supporting Node.js

## 📊 Performance

- **Core Web Vitals optimized**
- **Mobile-first design**
- **Semantic HTML** for SEO
- **Structured data** for rich snippets
- **Meta tags** for social sharing

## 🤝 Support

For customizations or questions about the landing page:
- Email: contact@naxoai.com
- Built with ❤️ for real estate professionals

---

**Note:** This landing page is designed to convert visitors into consultations by building trust, addressing pain points, and providing clear value propositions throughout the user journey.