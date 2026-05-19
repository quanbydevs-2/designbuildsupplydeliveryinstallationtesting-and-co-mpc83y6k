import { z } from "zod"

export const extensionSchema = z.object({
  id: z.number(),
  serviceName: z.string(),
  serviceType: z.string(),
  targetBeneficiaries: z.number(),
  serviceDate: z.date(),
  facilitator: z.string(),
  venue: z.string(),
  status: z.string(),
  feedback: z.string().optional(),
  status: z.string().default("active"),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
})

export type Extension = z.infer<typeof extensionSchema>