import { z } from "zod"

export const farmSchema = z.object({
  id: z.number(),
  farmName: z.string(),
  location: z.string(),
  coordinates: z.string().optional(),
  totalArea: z.number(),
  soilType: z.string(),
  irrigationType: z.string(),
  ownership: z.string(),
  status: z.string().default("active"),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
})

export type Farm = z.infer<typeof farmSchema>