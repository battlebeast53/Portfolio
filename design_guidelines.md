# Design Guidelines: Harshit Pandhare - Developer Portfolio

## Design Approach

**Reference-Based Approach**: Drawing inspiration from Linear's clean tech aesthetic, GitHub's code-focused UI, and Vercel's modern developer portfolios. This creates a professional, engineering-focused identity that demonstrates technical excellence.

**Core Design Principles:**
- Technical sophistication with approachable personality
- Code-as-design-element philosophy
- Performance-focused minimalism with strategic visual impact
- Dark-first design with seamless light mode

---

## Typography System

**Font Families:**
- Headings: **Inter** (600-700 weight) - clean, modern, technical
- Body: **Inter** (400-500 weight) - excellent readability
- Code/Monospace: **JetBrains Mono** or **Fira Code** - for code snippets and terminal elements
- Accent/Numbers: **Poppins** (500-600 weight) - for stats and metrics

**Hierarchy:**
- H1 (Hero): 3xl to 6xl, gradient text treatment
- H2 (Section Headers): 2xl to 4xl, semibold
- H3 (Subsections): xl to 2xl, medium
- Body: base to lg
- Code snippets: sm to base in monospace
- Captions/Labels: xs to sm

---

## Layout System

**Spacing Primitives:** Tailwind units of **2, 4, 8, 12, 16, 20, 24, 32**

**Container Structure:**
- Max-width: 7xl for full sections
- Max-width: 6xl for content-heavy areas
- Max-width: 4xl for focused content (About Me text)

**Section Padding:**
- Desktop: py-24 to py-32
- Tablet: py-16 to py-20
- Mobile: py-12 to py-16

**Grid Systems:**
- Skills: 4-column grid (lg), 2-column (md), 1-column (mobile)
- Projects: 2-column grid (lg), 1-column (mobile)
- Certifications: 3-column grid (lg), 2-column (md), 1-column (mobile)

---

## Component Library

### Hero Section
- **Layout:** Full viewport height (min-h-screen), centered content
- **Background:** Animated gradient mesh or particle system (subtle, tech-themed)
- **Elements:** 
  - Name in large display font (5xl-6xl)
  - Typing animation for role: "Full Stack Web Engineer" → "AI Integration Specialist" → "Competitive Programmer"
  - Two CTAs side-by-side: "Hire Me" (primary) + "Download Resume" (secondary outline)
  - Scroll indicator at bottom
- **Buttons on gradient:** Use backdrop-blur-md with bg-opacity-20 for glass effect

### About Me Section
- **Layout:** Two-column (lg), single-column (mobile)
- **Left Column:** Professional headshot or abstract geometric representation
- **Right Column:** Bio text (max-w-prose), achievement highlights in card format
- **Cards:** CGPA highlight, years of experience, projects completed
- **Visual Treatment:** Subtle glassmorphism cards with border accents

### Skills Section
- **Layout:** Interactive card grid with hover lift effects
- **Cards:** Icon + skill name + proficiency indicator (bar or circular progress)
- **Categories:** Frontend, Backend, Databases, APIs, Tools
- **Icons:** Lucide-react technical icons
- **Animation:** Staggered fade-in on scroll, subtle hover scale (1.02)

### Projects Showcase
- **Layout:** Large cards in 2-column grid (lg), full-width on mobile
- **Card Structure:**
  - Project thumbnail/mockup image (16:9 ratio)
  - Title + description
  - Tech stack badges (pill-shaped, minimal)
  - "AI tools used" badge if applicable
  - Dual CTAs: "View Code" + "Live Demo"
- **Visual Treatment:** Cards with subtle shadow, border on hover, gradient overlay on image

### Code Showcase Gallery
- **Layout:** Terminal-style code blocks with syntax highlighting
- **Presentation:** Tabbed interface showing different languages (JS, Python, C++, Node.js)
- **Elements:** Terminal header with colored dots, line numbers, copy button
- **Background:** Dark code editor aesthetic even in light mode for authenticity

### Certifications & Achievements
- **Layout:** Logo grid with competitive programming stats
- **Cards:** Platform logo + rating + ranking badge
- **Featured:** CodeChef (1652 rating, 3-star), LeetCode (1493 rating, 300+ problems), Codeforces (1102 rating)
- **Visual Treatment:** Hover reveals additional stats, subtle glow effect

### Contact Section
- **Layout:** Two-column - form (left) + info/social (right)
- **Form:** Name, email, message fields with floating labels
- **Validation:** Real-time validation with error states
- **Submit:** Primary button with loading state
- **Social Links:** GitHub, LinkedIn, email with hover effects
- **Background:** Subtle gradient or terminal-style ASCII art

### Navigation
- **Type:** Fixed header with glass effect (backdrop-blur)
- **Elements:** Logo/name (left), nav links (center), theme toggle + CTA (right)
- **Active State:** Underline or highlight for current section
- **Mobile:** Hamburger menu with smooth slide-in drawer

---

## Visual Treatments

**Glassmorphism:**
- Use backdrop-blur-md with bg-opacity-10 to 20
- Border with subtle opacity (border-opacity-20)
- Apply to cards, navigation, floating elements

**Gradients:**
- Hero background: Diagonal gradient (purple-600 → blue-600 → cyan-500)
- Accent elements: Linear gradients for buttons and highlights
- Text gradients: For headings and emphasis

**Shadows:**
- Cards: shadow-lg on hover, shadow-md at rest
- Floating elements: shadow-2xl
- Depth hierarchy through shadow intensity

**Borders:**
- Subtle borders: border-opacity-10 in dark mode, border-opacity-20 in light
- Accent borders: 1-2px with gradient or brand color

---

## Dark & Light Mode

**Dark Mode (Default):**
- Background: slate-950 or gray-950
- Cards: slate-900/800 with transparency
- Text: slate-100 for primary, slate-400 for secondary
- Accents: Vibrant colors (blue-500, purple-500, cyan-400)

**Light Mode:**
- Background: slate-50 or gray-50
- Cards: white with subtle shadow
- Text: slate-900 for primary, slate-600 for secondary
- Accents: Slightly muted versions of dark mode colors

**Toggle:** Moon/sun icon in header with smooth transition-all duration-300

---

## Animations & Interactions

**Page Load:**
- Staggered fade-in for sections (delay-100, delay-200, delay-300)
- Hero typing animation for role

**Scroll Animations:**
- Fade-in-up on section entry (use Intersection Observer)
- Progress indicator showing scroll depth

**Hover States:**
- Cards: Lift (translateY-2) + shadow increase
- Buttons: Slight scale (1.02) + shadow
- Links: Underline animation from center
- Project images: Subtle zoom (1.05) on card hover

**Click Interactions:**
- Button press: Scale down (0.98) briefly
- Form submission: Loading spinner in button

**Minimize Distractions:**
- No auto-playing animations
- Subtle particle effects if used
- Focus on purposeful micro-interactions

---

## Images

**Hero Section:**
- No large hero image - use animated gradient background with particle system or geometric shapes
- Focus on typography and CTA prominence

**About Me:**
- Professional headshot (400x400px, rounded or circular crop)
- Or abstract geometric visualization representing coding/AI

**Projects:**
- Project mockup screenshots (16:9 ratio, 800x450px minimum)
- Travel Planner: Map interface or itinerary view
- Ecommerce: Product grid or checkout interface

**Code Showcase:**
- No images needed - actual code blocks with syntax highlighting

**Certifications:**
- Platform logos: CodeChef, LeetCode, Codeforces (SVG preferred, 80x80px)

---

## Responsive Behavior

**Breakpoints:**
- Mobile: < 768px (single column, stacked navigation)
- Tablet: 768px - 1024px (2-column grids, simplified spacing)
- Desktop: > 1024px (full layout with all columns)

**Mobile Optimizations:**
- Hamburger menu for navigation
- Single-column layouts throughout
- Reduced typography scale (h1: 3xl instead of 6xl)
- Touch-friendly button sizes (min-h-12)
- Simplified animations

---

## Technical Implementation Notes

**Icons:** Lucide-react exclusively for consistency
**Syntax Highlighting:** Use Prism.js or Highlight.js for code blocks
**Form Handling:** Client-side validation + fetch API to backend endpoint
**Theme Persistence:** localStorage for dark/light mode preference
**Smooth Scroll:** CSS scroll-behavior: smooth + scroll offset for fixed nav