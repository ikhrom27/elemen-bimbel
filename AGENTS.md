<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Coding Rules & Guidelines (Strictly Enforced)

Agent MUST read and strictly adhere to the following coding rules for all code generation and modifications:

1. **No `any` Types (Explicit or Implicit)**:
   - Do NOT use `any` anywhere in TypeScript code (neither `any` as an explicit annotation nor implicit `any`).
   - Always define explicit, strict TypeScript interfaces, types, unions, or generics.
   - If dynamic data is handled, use `unknown` accompanied by proper type guards / schema validation.

2. **Adhere to SOLID Principles**:
   - **Single Responsibility Principle (SRP)**: Keep components, functions, and modules focused on a single responsibility.
   - **Open/Closed Principle (OCP)**: Design components and utilities to be extensible without modifying existing tested logic.
   - **Liskov Substitution Principle (LSP)**: Ensure components and subtypes are interchangeable and honor shared interfaces/props.
   - **Interface Segregation Principle (ISP)**: Create small, focused interfaces and prop types rather than monolithic contracts.
   - **Dependency Inversion Principle (DIP)**: Depend upon abstractions and composable hooks/services rather than hardcoded concrete implementations.

3. **Descriptive Variable Names in Iterations / Mappings**:
   - NEVER use abstract, single-letter, or generic variable names (e.g. `a`, `p`, `x`, `i`, `el`, `item`) during `.map()`, `.filter()`, `.forEach()`, `.reduce()`, or loops.
   - Variable names in loops MUST explicitly describe the entity being iterated (e.g., `pricingPlan`, `testimonialItem`, `navigationMenu`, `featureCard`, `studentReview`).
