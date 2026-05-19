# AGENTS.md — Tubod Municipality Agriculture Information System

## Overview
Comprehensive agriculture information management system for Tubod Municipality, Surigao del Norte, designed to streamline agricultural data management, farmer registration, crop monitoring, and agricultural extension services. The system ensures full compliance with RA 9184 (Government Procurement Reform Act), RA 10173 (Data Privacy Act), and National Privacy Commission guidelines for secure handling of agricultural and personal data.

## Stack
- **Monorepo**: Turborepo + pnpm
- **Frontend**: Next.js 16 + Tailwind v4 + shadcn/ui
- **Backend**: NestJS 11 + Drizzle ORM
- **Auth**: Better Auth
- **Contracts**: oRPC + Zod
- **DB**: PostgreSQL 17

## Modules
- **Farmers** (`farmer`): Farmer Name, Barangay, Contact Number, Farm Size (hectares), Primary Crop, Registration Date, Status, RSBA Number
- **Farms** (`farm`): Farm Name, Location, GPS Coordinates, Total Area (hectares), Soil Type, Irrigation Type, Ownership Type
- **Crops** (`crop`): Crop Name, Variety, Planting Date, Expected Harvest Date, Area Planted (hectares), Expected Yield (MT), Actual Yield (MT), Cropping Season
- **Extension Services** (`extension`): Service Name, Service Type, Target Beneficiaries, Service Date, Facilitator, Venue, Status, Feedback
- **Subsidies** (`subsidy`): Program Name, Beneficiary Name, Subsidy Type, Amount, Release Date, Purpose, Status
- **Data Privacy** (`dataprivacy`): Request Type, Data Subject, Request Description, Filed Date, Status, Resolved Date, Consent Given, Privacy Impact Level

## Commands
- `pnpm dev` — Start all apps
- `pnpm build` — Build everything
- `pnpm db:push` — Push DB schema
- `pnpm db:seed` — Seed data
- `pnpm test` — Run tests
- `pnpm lint` — Lint all

## Structure
```
├── apps/web/         # Next.js frontend
├── apps/backend/     # NestJS API
├── packages/db/      # Drizzle ORM
├── packages/auth/    # Better Auth
├── packages/contracts/ # oRPC + Zod
└── tooling/          # Shared configs
```

Always use `pnpm` (never npm/yarn).