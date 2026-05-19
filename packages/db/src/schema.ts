import { defineRelations } from "drizzle-orm"
import { createTable } from "./utils/table.js"

// ═══════════════ AUTH TABLES ═══════════════

export const users = createTable("users", t => ({
  id: t.text("id").primaryKey(),
  name: t.text("name").notNull(),
  email: t.text("email").notNull().unique(),
  emailVerified: t.boolean("email_verified").default(false).notNull(),
  image: t.text("image"),
  createdAt: t.timestamp("created_at").notNull().defaultNow(),
  updatedAt: t.timestamp("updated_at").notNull().defaultNow(),
}))

export const sessions = createTable("sessions", t => ({
  id: t.text("id").primaryKey(),
  token: t.text("token").notNull().unique(),
  userId: t.text("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
  expiresAt: t.timestamp("expires_at").notNull(),
  ipAddress: t.text("ip_address"),
  userAgent: t.text("user_agent"),
  createdAt: t.timestamp("created_at").notNull().defaultNow(),
  updatedAt: t.timestamp("updated_at").notNull().defaultNow(),
}))

export const accounts = createTable("accounts", t => ({
  id: t.text("id").primaryKey(),
  accountId: t.text("account_id").notNull(),
  providerId: t.text("provider_id").notNull(),
  userId: t.text("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
  accessToken: t.text("access_token"),
  refreshToken: t.text("refresh_token"),
  password: t.text("password"),
  createdAt: t.timestamp("created_at").notNull().defaultNow(),
  updatedAt: t.timestamp("updated_at").notNull().defaultNow(),
}))

export const verifications = createTable("verifications", t => ({
  id: t.text("id").primaryKey(),
  identifier: t.text("identifier").notNull(),
  value: t.text("value").notNull(),
  expiresAt: t.timestamp("expires_at").notNull(),
  createdAt: t.timestamp("created_at").notNull().defaultNow(),
  updatedAt: t.timestamp("updated_at").notNull().defaultNow(),
}))

// ═══════════════ MODULE TABLES ═══════════════

export const farmers = createTable("farmers", t => ({
  id: t.serial("id").primaryKey(),
  farmerName: t.text("farmer_name").notNull(),
  barangay: t.text("barangay").notNull(),
  contactNumber: t.text("contact_number").notNull(),
  farmSize: t.doublePrecision("farm_size").notNull(),
  primaryCrop: t.text("primary_crop").notNull(),
  registrationDate: t.timestamp("registration_date").notNull(),
  status: t.text("status").notNull(),
  rsbaNumber: t.text("rsba_number"),
  status: t.text("status").notNull().default("active"),
  authorId: t.text("author_id").references(() => users.id, { onDelete: "set null" }),
  createdAt: t.timestamp("created_at").notNull().defaultNow(),
  updatedAt: t.timestamp("updated_at").notNull().defaultNow(),
}))

export const farms = createTable("farms", t => ({
  id: t.serial("id").primaryKey(),
  farmName: t.text("farm_name").notNull(),
  location: t.text("location").notNull(),
  coordinates: t.text("coordinates"),
  totalArea: t.doublePrecision("total_area").notNull(),
  soilType: t.text("soil_type").notNull(),
  irrigationType: t.text("irrigation_type").notNull(),
  ownership: t.text("ownership").notNull(),
  status: t.text("status").notNull().default("active"),
  authorId: t.text("author_id").references(() => users.id, { onDelete: "set null" }),
  createdAt: t.timestamp("created_at").notNull().defaultNow(),
  updatedAt: t.timestamp("updated_at").notNull().defaultNow(),
}))

export const crops = createTable("crops", t => ({
  id: t.serial("id").primaryKey(),
  cropName: t.text("crop_name").notNull(),
  variety: t.text("variety").notNull(),
  plantingDate: t.timestamp("planting_date").notNull(),
  harvestDate: t.timestamp("harvest_date"),
  areaPlanted: t.doublePrecision("area_planted").notNull(),
  expectedYield: t.doublePrecision("expected_yield"),
  actualYield: t.doublePrecision("actual_yield"),
  season: t.text("season").notNull(),
  status: t.text("status").notNull().default("active"),
  authorId: t.text("author_id").references(() => users.id, { onDelete: "set null" }),
  createdAt: t.timestamp("created_at").notNull().defaultNow(),
  updatedAt: t.timestamp("updated_at").notNull().defaultNow(),
}))

export const extensions = createTable("extensions", t => ({
  id: t.serial("id").primaryKey(),
  serviceName: t.text("service_name").notNull(),
  serviceType: t.text("service_type").notNull(),
  targetBeneficiaries: t.integer("target_beneficiaries").notNull(),
  serviceDate: t.timestamp("service_date").notNull(),
  facilitator: t.text("facilitator").notNull(),
  venue: t.text("venue").notNull(),
  status: t.text("status").notNull(),
  feedback: t.text("feedback"),
  status: t.text("status").notNull().default("active"),
  authorId: t.text("author_id").references(() => users.id, { onDelete: "set null" }),
  createdAt: t.timestamp("created_at").notNull().defaultNow(),
  updatedAt: t.timestamp("updated_at").notNull().defaultNow(),
}))

export const subsidys = createTable("subsidys", t => ({
  id: t.serial("id").primaryKey(),
  programName: t.text("program_name").notNull(),
  beneficiaryName: t.text("beneficiary_name").notNull(),
  subsidyType: t.text("subsidy_type").notNull(),
  amount: t.doublePrecision("amount").notNull(),
  releaseDate: t.timestamp("release_date").notNull(),
  purpose: t.text("purpose").notNull(),
  status: t.text("status").notNull(),
  status: t.text("status").notNull().default("active"),
  authorId: t.text("author_id").references(() => users.id, { onDelete: "set null" }),
  createdAt: t.timestamp("created_at").notNull().defaultNow(),
  updatedAt: t.timestamp("updated_at").notNull().defaultNow(),
}))

export const dataprivacys = createTable("dataprivacys", t => ({
  id: t.serial("id").primaryKey(),
  requestType: t.text("request_type").notNull(),
  dataSubject: t.text("data_subject").notNull(),
  requestDescription: t.text("request_description").notNull(),
  filedDate: t.timestamp("filed_date").notNull(),
  status: t.text("status").notNull(),
  resolvedDate: t.timestamp("resolved_date"),
  consentGiven: t.boolean("consent_given").default(false).notNull(),
  privacyImpactLevel: t.text("privacy_impact_level").notNull(),
  status: t.text("status").notNull().default("active"),
  authorId: t.text("author_id").references(() => users.id, { onDelete: "set null" }),
  createdAt: t.timestamp("created_at").notNull().defaultNow(),
  updatedAt: t.timestamp("updated_at").notNull().defaultNow(),
}))

// ═══════════════ RELATIONS ═══════════════

export const relations = defineRelations({ users, sessions, accounts, farmers, farms, crops, extensions, subsidys, dataprivacys }, r => ({
  users: {
    sessions: r.many.sessions(),
    accounts: r.many.accounts(),
  },
  sessions: {
    user: r.one.users({ from: r.sessions.userId, to: r.users.id }),
  },
  accounts: {
    user: r.one.users({ from: r.accounts.userId, to: r.users.id }),
  },
  farmers: {
    author: r.one.users({ from: r.farmers.authorId, to: r.users.id }),
  },
  farms: {
    author: r.one.users({ from: r.farms.authorId, to: r.users.id }),
  },
  crops: {
    author: r.one.users({ from: r.crops.authorId, to: r.users.id }),
  },
  extensions: {
    author: r.one.users({ from: r.extensions.authorId, to: r.users.id }),
  },
  subsidys: {
    author: r.one.users({ from: r.subsidys.authorId, to: r.users.id }),
  },
  dataprivacys: {
    author: r.one.users({ from: r.dataprivacys.authorId, to: r.users.id }),
  },
}))

export const schema = Object.assign({ users, sessions, accounts, verifications, farmers, farms, crops, extensions, subsidys, dataprivacys }, relations)
