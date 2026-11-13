# AGENTS.md — Verzional's Portfolio Guide

Welcome to **Verzional's Portfolio**. This file provides a brief overview of the codebase and serves as the entry point to the repository's rules and specialized skills.

---

## 1. Project Overview & Tech Stack

A Yakuza & Persona 5 inspired interactive developer portfolio showcasing projects, career experience, technical skills, and socials.

- **Framework:** Next.js 16 (App Router, `reactCompiler: true`)
- **UI & Motion:** React 19, Tailwind CSS v4, Motion (`motion/react`), `lucide-react`
- **Tooling:** TypeScript, ESLint, Prettier, Husky, Commitlint, `pnpm`

---

## 2. Directory Architecture

```
Portfolio/
├── .agents/
│   ├── rules/
│   │   ├── 00-general-engineering.md    # Safety, VCS discipline, strict typing, pure core
│   │   ├── 01-verification-loop.md      # Autonomous verification protocol (pnpm verify)
│   │   ├── 02-web-architecture.md       # Next.js 16, React 19 compiler, Motion, portals
│   │   ├── 03-ui-ux-design-standards.md # Spacing, WCAG contrast, game HUD & mobile framing
│   │   └── 04-learned-patterns.md       # Empirical patterns (LP-001 through LP-005)
│   └── skills/
│       ├── code-review/SKILL.md         # Adversarial diff & PR checklist
│       └── perf-audit/SKILL.md          # Bundle, image sizing, LCP & animation audit
├── app/                                 # App Router pages & route-local _components/
├── components/                          # Shared shell, Sidebar, SubMenu, SidebarPortal
├── data/                                # Static TS datasets (projects, experience, skills, socials, navigation)
├── hooks/                               # Custom hooks (use-menu, use-categories, use-idle-preload)
├── lib/                                 # Shared utilities
├── public/                              # Static assets (fonts, images, canonical resume PDF)
└── scripts/
    └── optimize-image.ts                # WebP asset conversion utility (pnpm optimize-image)
```

---

## 3. Engineering Operating Standards

- **Verification:** Run `pnpm verify` (`tsc --noEmit && eslint .`) after behavioral or type changes, and `pnpm build` when validating production compilation.
- **No `// eslint-disable`:** Code must natively satisfy ESLint.
- **React 19 Compiler:** Do not write manual `React.memo`, `useMemo`, or `useCallback` unless required by an ESLint warning.
- **Portals & Motion:** Import `motion` from `"motion/react"`, avoid Motion's `layout` prop on responsive widths, and portal subpage sidebars via `<SidebarPortal>`.
- **External Links:** Always include `"noopener,noreferrer"` on `window.open(..., "_blank")` and `target="_blank"` links.

---

## 4. Conventional Commit Standards

| Type | Description |
| :--- | :--- |
| `feat` | New functionality, layout additions, or major responsive CSS changes |
| `fix` | Bug fixes, layout fixes, or asset resolution fixes |
| `refactor` | Code restructuring without functional change |
| `style` | Code formatting only (whitespace, semicolons) — never CSS/UI changes |
| `perf` | Performance optimizations |
| `docs` | Documentation changes |
| `chore` | Build scripts, tooling, or configuration |

---

## 5. Domain Rules & Specialized Skills

Consult `.agents/rules/` for domain invariants and `.agents/skills/` for focused audits:
- **Code Review** (`.agents/skills/code-review/SKILL.md`): Adversarial diff review before presenting changes.
- **Performance Audit** (`.agents/skills/perf-audit/SKILL.md`): Image sizing, bundle weight, LCP, and animation frame rate checks.
