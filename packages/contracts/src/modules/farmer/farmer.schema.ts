import { z } from "zod"

export const farmerSchema = z.object({
  id: z.number(),
  farmerName: z.string(),
  barangay: z.string(),
  contactNumber: z.string(),
  farmSize: z.number(),
  primaryCrop: z.string(),
  registrationDate: z.date(),
  status: z.string(),
  rsbaNumber: z.string().optional(),
  status: z.string().default("active"),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
})

export type Farmer = z.infer<typeof farmerSchema>