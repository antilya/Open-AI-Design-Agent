# Design Agent appearance boundary

The hosted Studio mounts Design Agent inside `.design-agent-studio` with
`data-og-theme-scope="design-agent"` and the resolved `data-og-mode`. This is
the package boundary for the Open Generative appearance contract.

## Contract

- Hosted product chrome maps the package's semantic variables to the host
  `--og-*` RGB roles. Adding another host preset does not require a Design Agent
  component edit.
- Standalone light and dark defaults remain available when the host variables
  are absent.
- The package Tailwind build consumes the shared font-size and line-height
  registry. Its complete `src/` tree is guarded against forced UI fonts,
  arbitrary font sizes, and arbitrary line heights.
- Font-rendered symbols that act as icons use fixed glyph tokens, so changing
  the user's text scale cannot resize them.
- The adapter changes color channels only. Layout, spacing, radii, border
  widths, blur, shadow geometry, motion, transforms, SVG geometry, and behavior
  remain package-owned.

## Alpha parity

The component-owned alpha values are retained exactly. In particular, dark
status surfaces remain at `0.1`, glass remains at `0.4`/`0.6`, and the existing
shadow alphas and geometry are unchanged. Opaque standalone borders remain
opaque; their hosted RGB is derived with `color-mix` rather than by introducing
transparency.

## Fixed visual content

Konva canvas objects, artwork, user media, selection/transform handles, drawing
colors, and content-authored colors are not product chrome. They intentionally
remain outside the host theme and continue to use the package's functional
palette.
