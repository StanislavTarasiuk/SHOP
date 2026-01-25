# Design Brief

## Design Philosophy

The Internet Shop application follows a **clean, modern, and minimalist** design approach. The interface prioritizes usability and clarity, ensuring users can efficiently manage their product inventory.

## Color Palette

All colors are defined as CSS variables in `frontend/styles/global.css`:

### Core Colors
```css
--color-black: #000000;              /* Primary text and key UI */
--color-text: #1e1e1e;               /* Body text */
--color-text-muted: #5e5e5e;         /* Secondary text */
--color-text-light: #8a8a8a;         /* Tertiary text */
--color-accent: #000e8a;             /* Accent count/links */
```

### Neutral Colors
```css
--color-white: #ffffff;              /* Main background */
--color-surface: #f5f5f5;            /* Footer/sections */
--color-input: #d9d9d9;              /* Search/input backgrounds */
--color-border: #d7d7d7;             /* Card borders */
--color-border-strong: #a3a3a3;      /* Dividers, outlines */
```

### Product Swatches
```css
--color-chip-sand: #ebe7db;
--color-chip-olive: #dbdcce;
--color-chip-sand-light: #eae8d9;
--color-chip-black: #1d2122;
```

## Typography

### Font Families
```css
--font-family-base: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-family-display: 'Beatrice', 'Playfair Display', 'Times New Roman', serif;
```

**Primary Font**: Inter  
**Display Font**: Beatrice (fallback to Playfair Display)

### Font Sizes
```css
--font-size-xxs: 10px;               /* Micro labels */
--font-size-xs: 12px;                /* Small text */
--font-size-sm: 14px;                /* Body */
--font-size-md: 16px;                /* Body large */
--font-size-lg: 20px;                /* Section headings */
--font-size-xl: 48px;                /* Page headings */
--font-size-2xl: 80px;               /* Footer display */
```

### Font Weights
```css
--font-weight-normal: 400;           /* Body text */
--font-weight-medium: 500;           /* Emphasized text */
--font-weight-semibold: 600;         /* Subheadings */
--font-weight-bold: 700;              /* Headings */
```

### Typography Usage
- **Headings (h1, h2)**: `font-size-xl`, `font-family-display`, `letter-spacing-wide`
- **Body text**: `font-size-md`, `font-family-base`
- **Small text**: `font-size-xs`, `color-text-muted`
- **Product names**: `font-size-sm`, `color-black`
- **Prices**: `font-size-sm`, `color-black`

## Spacing System

Based on 8px unit system:

```css
--spacing-2xs: 4px;
--spacing-xs: 8px;
--spacing-sm: 12px;
--spacing-md: 16px;
--spacing-lg: 24px;
--spacing-xl: 32px;
--spacing-2xl: 40px;
--spacing-3xl: 48px;
--spacing-4xl: 64px;
```

### Spacing Usage
- **Card padding**: `spacing-md` (16px)
- **Element gaps**: `spacing-sm` to `spacing-md` (8px - 16px)
- **Section margins**: `spacing-lg` to `spacing-xl` (24px - 32px)
- **Container padding**: `spacing-md` (16px)

## Border Radius

```css
--radius-xs: 2px;                     /* Search field */
--radius-sm: 4px;                     /* Inputs */
--radius-md: 8px;                     /* Cards */
--radius-lg: 22px;                    /* Cart pill */
--radius-pill: 999px;                 /* Fully rounded */
```

## Shadows

```css
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);      /* Subtle elevation */
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);       /* Cards, elevated elements */
--shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);     /* Modals, popovers */
```

## Transitions

```css
--transition-fast: 150ms ease;       /* Quick interactions */
--transition-base: 250ms ease;       /* Standard transitions */
--transition-slow: 350ms ease;       /* Smooth animations */
```

## Component Styles

### Buttons

#### Ghost Button
```css
.button--ghost {
  background-color: var(--color-input);
  color: var(--color-black);
  border-radius: var(--radius-xs);
  padding: var(--spacing-xs) var(--spacing-lg);
  letter-spacing: var(--letter-spacing-wide);
  text-transform: uppercase;
}
```

### Product Card

```css
.product-card {
  background: var(--color-white);
  border: 1px solid var(--color-border);
}

.product-card__title {
  font-size: var(--font-size-sm);
  color: var(--color-black);
}

.product-card__price {
  font-size: var(--font-size-sm);
  color: var(--color-black);
}
```

### Form Inputs

```css
.product-form__input {
  width: 100%;
  padding: var(--spacing-sm) var(--spacing-md);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  font-size: var(--font-size-md);
  font-family: var(--font-family-base);
}
```

## Layout Principles

### Grid System
- Products displayed in responsive grid
- Desktop: 3-4 columns
- Tablet: 2 columns
- Mobile: 1 column

### Container
- Max width: 1200px
- Centered with auto margins
- Horizontal padding: `spacing-md` (16px)

### Header
- Fixed or sticky positioning (optional)
- Height: 64px (8 spacing units)
- Background: `color-background` with border-bottom

### Footer
- Minimal design
- Text color: `color-text-muted`
- Padding: `spacing-lg` (24px)

## Responsive Design

### Breakpoints (if needed)
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

### Responsive Behavior
- Grid adjusts column count based on screen size
- Font sizes scale appropriately
- Spacing remains consistent
- Touch-friendly button sizes on mobile

## Accessibility

### Color Contrast
- Text meets WCAG AA standards (4.5:1 ratio minimum)
- Primary text on white: `#212529` on `#ffffff` ✓
- Muted text: `#6c757d` on `#ffffff` ✓

### Interactive Elements
- Buttons have clear hover states
- Focus states visible for keyboard navigation
- Minimum touch target: 44x44px

## BEM Class Naming Examples

### Product Card
- Block: `.product-card`
- Elements: `.product-card__title`, `.product-card__price`, `.product-card__description`, `.product-card__actions`
- Modifiers: `.product-card--featured`

### Header
- Block: `.header`
- Elements: `.header__logo`, `.header__nav`, `.header__title`
- Modifiers: `.header--sticky`

### Button
- Block: `.button`
- Elements: `.button__icon` (if needed)
- Modifiers: `.button--primary`, `.button--secondary`, `.button--large`

### Form
- Block: `.product-form`
- Elements: `.product-form__field`, `.product-form__label`, `.product-form__input`, `.product-form__button`
- Modifiers: `.product-form--inline`

## Visual Hierarchy

1. **Primary Actions**: Primary buttons, important information
2. **Secondary Actions**: Secondary buttons, supporting information
3. **Tertiary Information**: Muted text, descriptions

## Design References

- UI screenshots from Aura.build stored in `docs/ui/`
- Wireframes in `docs/ux/`
- These references guide implementation but code is written manually

## Implementation Notes

1. **CSS Variables**: All design tokens must be defined in `global.css`
2. **No Hardcoded Values**: Always use CSS variables, never hardcode colors, spacing, etc.
3. **BEM Consistency**: All class names must follow BEM methodology
4. **Component Files**: Each component has its own CSS file in `styles/components/`
5. **Responsive**: Design should work on all screen sizes
