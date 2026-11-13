---
name: perf-audit
description: Superpower skill for auditing bundle size, image optimization, LCP metrics, and animation frame rates.
---

# Superpower: Performance Audit

Use this skill to audit frontend performance, image optimization, and bundle footprints.

## Audit Checklist:

1. **Next.js Image Optimization**:
   - Check that all static images under `public/images/` are optimized into WebP format.
   - Verify every `<Image fill>` has an explicit responsive `sizes` attribute.
   - Run `pnpm build` to verify production assets and static routes compile cleanly.

2. **DOM & Layout Shifts**:
   - Verify that CSS `transition-[width]` is used instead of Framer Motion `layout` prop on responsive width containers.
   - Check that heavy backgrounds do not cause layout reflow on route mount.

3. **Production Build**:
   - Verify production build compiles cleanly: `pnpm build`.
