# Nayax Design System

Brand tokens, type, iconography and now the component kit + product-screen templates
materialized from the Nayax eShop, VPOS Activation Portal and Link-to-Pay Figma files.

Load order for any page: `styles.css` (pulls in `colors_and_type.css` + the generated
`components/fig-tokens.css`, `components/fig-typography.css`, `components/fig-assets.css`),
then `_ds_bundle.js` for the components.

## Components

Kit component families and icons materialized into `components/` (`<Name>.jsx` + `<Name>.d.ts`),
exposed on `window.NayaxDesignSystem_9617e1`:

- **Button** — Breakpoint × Kind (primary / secondary / highlight) × Size × State
- **SecondaryButton** — Size × State
- **Link** — Breakpoint × Size × State
- **TextInput** — Breakpoint × State (text input field)
- **Divider** — Color × Spacing
- **Footer** — Breakpoint × State
- **Arrow** — Direction × State
- **Overlay** — Breakpoint
- **Logo** — size variants (Nayax wordmark)
- **Help24** — help icon (bold variants)
- Icons: **Add**, **ArrowRight**, **ArrowRight2**, **ChevronDown**, **Download16**,
  **Download24**, **Location**, **Phone**, **Loading**, **Loading2**
- Internal base primitives (`Master00.jsx`, `Master002.jsx`) that Button, Link and TextInput compose from — not registered/standalone components, only imported.

## Templates

Copyable starting points in `templates/<slug>/` (shown in the Templates picker):

- **Link to Pay — Mobile flow** (`templates/link-to-pay/`) — pay-by-link mobile payment flow

See `SKILL.md` for the design language and usage recipes.
