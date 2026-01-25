# UI Reference Directory

## Purpose

This directory contains UI design screenshots and mockups generated using **Aura.build**. These serve as **visual references only** - no Aura-generated code is used in the project.

## Important Note

> **UI screenshots are visual guides only; no Aura-generated code is used.**

All HTML, CSS, and JavaScript are implemented manually based on these visual references.

## File Organization

UI references should be organized by screen/component:

```
docs/ui/
├─ README.md
├─ home-page.png
├─ product-list.png
├─ product-card.png
├─ product-form.png
└─ ...
```

## Design Reference Guidelines

### What to Reference

- **Color palette**: Colors used in designs
- **Typography**: Font families, sizes, weights
- **Spacing**: Margins, padding, gaps between elements
- **Component styles**: Buttons, forms, cards
- **Layout**: Grid, alignment, positioning

### Implementation Process

1. **Review UI screenshots**: Understand visual design
2. **Extract design tokens**: Colors, fonts, spacing values
3. **Define CSS variables**: Add to `frontend/styles/global.css`
4. **Implement components**: Create HTML/CSS following BEM methodology
5. **Match visual design**: Ensure implementation matches reference

### File Naming

Use descriptive names:
- `home-page.png`
- `product-list.png`
- `product-card.png`
- `product-form.png`
- `header.png`
- `footer.png`

## Design Token Extraction

When implementing, extract these from UI screenshots:

### Colors
- Primary color
- Secondary color
- Background colors
- Text colors
- Border colors
- Status colors (success, error, warning)

### Typography
- Font family
- Font sizes (base, headings, small text)
- Font weights
- Line heights

### Spacing
- Unit size (e.g., 8px base unit)
- Margins and padding values
- Gaps between elements

### Components
- Button styles (primary, secondary)
- Form input styles
- Card styles
- Border radius values
- Shadow values

## Current Status

UI reference screenshots are to be added during the design phase. This directory serves as a placeholder for future UI reference files.

## Integration with Other Documents

- **Wireframes** (`docs/ux/`): Define structure
- **Design Brief** (`docs/design-brief.md`): Documents extracted design tokens
- **Implementation**: Follows wireframes and design brief, references UI screenshots
