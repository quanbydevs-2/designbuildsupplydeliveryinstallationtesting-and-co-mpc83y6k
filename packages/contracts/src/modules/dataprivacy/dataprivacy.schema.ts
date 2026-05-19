import { z } from "zod"

export const dataprivacySchema = z.object({
  id: z.number(),
  requestType: z.string(),
  dataSubject: z.string(),
  requestDescription: z.string(),
  filedDate: z.date(),
  status: z.string(),
  resolvedDate: z.date().optional(),
  consentGiven: z.boolean().default(false),
  privacyImpactLevel: z.string(),
  status: z.string().default("active"),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
})

export type DataPrivacy = z.infer<typeof dataprivacySchema>