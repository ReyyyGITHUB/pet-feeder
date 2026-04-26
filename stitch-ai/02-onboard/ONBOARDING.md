# Design System Specification: Submerged Serenity

## 1. Overview & Creative North Star
**Creative North Star: "The Fluid Interface"**

This design system moves away from the rigid, grid-locked patterns of traditional pet-tech apps and embraces a high-end editorial experience that feels as fluid and refreshing as water. By prioritizing breathing room, organic shapes, and tonal depth, we create an environment that is both calming for the pet owner and technologically sophisticated.

We reject "default" layouts. Instead, we utilize intentional asymmetry and extreme typographic scale shifts to guide the user's eye. The interface should feel like a series of soft, submerged layers—weightless, clear, and premium.

---

## 2. Color & Surface Philosophy
The palette is a sophisticated journey from the deep ocean to the light-catching surface.

### Tonal Strategy
*   **Deep Ocean (`primary` #004370):** Used for authoritative elements and deep immersion moments, such as header states or primary navigation anchors.
*   **Turquoise (`secondary` #006a6a):** The active "pulse" of the app. Use this for interactive elements that require user focus.
*   **Soft Seafoam (`tertiary` #004b32):** A refreshing accent for health metrics, success states, and organic "living" components.

### The "No-Line" Rule
**Borders are strictly prohibited for sectioning.** To define boundaries, we use background shifts. A card is not a box with a stroke; it is a `surface-container-lowest` (#ffffff) element resting gracefully on a `surface` (#f3fafd) background. 

### Surface Hierarchy & Nesting
Treat the UI as physical layers of frosted glass. 
*   **Base:** `surface` (#f3fafd)
*   **Sections:** `surface-container-low` (#eef5f8)
*   **Interactive Cards:** `surface-container-lowest` (#ffffff)
*   **Inset Metadata:** `surface-container-high` (#e2e9ec)

### The "Glass & Gradient" Rule
To elevate the "tech-forward" vibe, main CTAs should utilize a subtle linear gradient from `primary` (#004370) to `primary_container` (#005b96). For floating navigation or overlays, apply **Glassmorphism**: use `surface_container_lowest` at 70% opacity with a 20px backdrop blur to let the aquatic tones bleed through.

---

## 3. Typography
We use **Manrope** for its geometric yet warm character. The hierarchy is designed to feel like a premium lifestyle magazine.

*   **Display (lg/md):** Reserved for "Hero" numbers (e.g., "Next feeding in 2h") or the pet's name. It should feel massive and confident.
*   **Headline (sm/md):** Used for page titles. We lean into `headline-sm` (1.5rem) to maintain a modern, airy feel.
*   **Body (lg):** The primary reading weight. All pet health descriptions use `body-lg` to ensure a "calm" reading experience with generous line height.
*   **Labels (sm/md):** Used sparingly for technical data points (e.g., "Grams per serving").

---

## 4. Elevation & Depth
Depth is achieved through **Tonal Layering** rather than traditional drop shadows.

*   **The Layering Principle:** Place a `surface-container-lowest` card on a `surface-container-low` section to create a soft, natural lift.
*   **Ambient Shadows:** For elements that must float (like a "Feed Now" FAB), use a highly diffused shadow: `blur: 32px`, `opacity: 6%`, tinted with `primary` (#004370). Never use pure black or grey for shadows.
*   **The "Ghost Border" Fallback:** If accessibility requires a container edge, use `outline-variant` (#c1c7d1) at **15% opacity**. It should be felt, not seen.
*   **Organic Curves:** Follow the rounding scale strictly. Cards use `xl` (3rem) to mimic the smooth erosion of river stones, while smaller interactive elements use `lg` (2rem).

---

## 5. Components

### Buttons
*   **Primary:** `full` rounding. Background: Gradient of `primary` to `primary_container`. Text: `on_primary`. 
*   **Secondary:** `full` rounding. Background: `secondary_container` (#79f6f5). Text: `on_secondary_container` (#007070).
*   **Tertiary:** No background. Text: `primary`. High-end editorial style using `label-md`.

### Cards & Lists
*   **Forbid Dividers:** Do not use lines to separate list items. Use 16px of vertical `spacing` and a subtle shift to `surface-container-low` for every other item if necessary.
*   **Feeding Schedule Card:** Use `surface-container-lowest` with an `xl` corner radius. Use `tertiary_fixed` (#adf1cd) as a small organic pill for "Complete" status.

### Input Fields
*   **Style:** Minimalist. No bottom line or box. Use a `surface-container-high` (#e2e9ec) background with `lg` rounding.
*   **Active State:** The background shifts to `surface_container_lowest` with a "Ghost Border" of `primary` at 20% opacity.

### The "Pulse" Indicator (App-Specific)
*   A custom component for the pet feeder: A circular `secondary_fixed_dim` (#59d9d9) glow that pulses behind the pet's avatar to indicate the device is online, utilizing `surface_tint` for the outer glow.

---

## 6. Do's and Don'ts

### Do
*   **DO** use whitespace as a functional element. If a screen feels "busy," increase the padding to the `xl` scale.
*   **DO** use `display-lg` typography for single, impactful data points.
*   **DO** use organic, non-symmetrical layouts (e.g., a pet photo offset to the right with text flowing to the left).

### Don't
*   **DON'T** use 1px solid borders. It breaks the fluid, aquatic illusion.
*   **DON'T** use high-contrast black text. Stick to `on_surface` (#161d1f) for a softer, premium feel.
*   **DON'T** use sharp corners. Every interaction point must feel "water-worn" and smooth.
*   **DON'T** use standard Material Design drop shadows. Use the tinted Ambient Shadow specified in Section 4.