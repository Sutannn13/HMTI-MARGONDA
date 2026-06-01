# Design System Direction

## 1. Design Intent and Product Personality
HMTI UBSI Margonda must read as an official student association website: institutional, direct, organized, and credible. The homepage should feel closer to a faculty association page than a generic youth-community landing page.

## 2. Audience and Use-Context Signals
Primary users are students, prospective members, campus stakeholders, and external collaborators. The first viewport must answer identity, campus context, and next action quickly.

## 3. Visual Direction and Distinctive Moves
Use a photo-led academic composition: the 4K campus building image as the first visual proof, HMTI group activity as the second proof. Borrow only the institutional hierarchy from the ITB reference: strong blue navigation, large editorial title, breadcrumb, and formal content rhythm. Do not copy ITB branding, assets, or exact layout.

## 4. Color, Typography, Spacing, and Density Decisions
Use deep UBSI blue, navy overlay, white content bands, slate text, and restrained orange accents derived from the campus photo. Use a serif display style for the hero title and strong sans-serif UI labels. Keep spacing generous, section edges sharp, and surfaces low-radius or square.

## 5. Token Architecture and Alias Strategy
Semantic roles: `institutional-blue`, `campus-navy`, `campus-orange`, `surface-white`, `text-strong`, and `text-muted`. Component styling should consume semantic roles instead of one-off decorative colors.

## 6. Responsive Strategy and Cross-Viewport Adaptation Matrix
Desktop: show one decisive horizontal menu, official HMTI logo, large image-led hero, and three-column info strip. Tablet: preserve hero impact and reduce nav density. Mobile: prioritize logo, menu trigger, title, primary CTA, breadcrumb, and stacked info items; avoid horizontal overflow.

## 7. Motion and Interaction Rules
Use restrained 150-400ms reveal motion for content blocks and hover states only. Avoid decorative animation, neon glow, parallax overload, and motion that hides primary content before hydration.

## 8. Component Language and Morphology
Prefer bands, rails, editorial blocks, image frames, and sharp dividers over rounded SaaS cards. Buttons may have small radius for tap clarity but should not look playful.

## 9. Context Hygiene and Source Boundaries
Valid sources are the user-provided ITB screenshots, the 4K UBSI campus image in `public/images/gallery`, the provided HMTI group photo, and current repo content. External references may influence quality bar only, not copied visual identity.

## 10. Accessibility Non-Negotiables
Maintain WCAG 2.2 AA contrast, visible focus states, keyboard-accessible navigation, safe tap targets, readable mobile line lengths, and reduced-motion compatibility.

## 11. Anti-Patterns to Avoid
Avoid purple gradients, neon cyberpunk, over-rounded cards, generic SaaS hero sections, fake metrics, placeholder campus art, and decorative grids as wallpaper.

## 12. Implementation Notes for Future UI Tasks
Keep homepage changes narrow. Do not redesign every page unless requested. Reuse real HMTI photos where possible and keep organization content factual.
