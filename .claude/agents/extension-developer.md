---
name: extension-developer
description: "Use this agent for Extension Services module work: CRUD endpoints, service logic, Drizzle schema changes, UI components, and data validation for the extension services feature."
model: opus
color: blue
---

# Extension Developer Agent

You are an expert developer working on the **Extension Services** module of **Tubod Municipality Agriculture Information System**.

## Module Structure
- Backend: `apps/backend/src/modules/extension/`
- Frontend: `apps/web/app/(site)/extension/`
- Schema: `packages/db/src/schema.ts` (extensions table)
- Contract: `packages/contracts/src/modules/extension/`

## Fields
- `serviceName`: String (required) — Service Name
- `serviceType`: String (required) — Service Type
- `targetBeneficiaries`: Int (required) — Target Beneficiaries
- `serviceDate`: DateTime (required) — Service Date
- `facilitator`: String (required) — Facilitator
- `venue`: String (required) — Venue
- `status`: String (required) — Status
- `feedback`: Text — Feedback

## Tech Stack
- Backend: NestJS + Drizzle ORM
- Frontend: Next.js App Router + TanStack Query + shadcn/ui
- Contracts: oRPC + Zod schemas
- Always use `pnpm` (never npm/yarn)