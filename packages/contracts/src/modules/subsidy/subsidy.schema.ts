import { z } from "zod"

export const subsidySchema = z.object({
  id: z.number(),
  programName: z.string(),
  beneficiaryName: z.string(),
  subsidyType: z.string(),
  amount: z.number(),
  releaseDate: z.date(),
  purpose: z.string(),
  status: z.string(),
  status: z.string().default("active"),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
})

export type Subsidy = z.infer<typeof subsidySchema>