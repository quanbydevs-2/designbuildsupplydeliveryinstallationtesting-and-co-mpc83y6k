import { oc } from "@orpc/contract"
import { farmSchema } from "./farm.schema.js"
import { z } from "zod"

export const farmContract = oc.router({
  list: oc.input(z.object({ search: z.string().optional(), status: z.string().optional(), page: z.number().default(1), limit: z.number().default(20) })).output(z.object({ data: z.array(farmSchema), total: z.number() })),
  getById: oc.input(z.object({ id: z.number() })).output(farmSchema),
  create: oc.input(farmSchema.omit({ id: true, createdAt: true, updatedAt: true })).output(farmSchema),
  update: oc.input(z.object({ id: z.number() }).merge(farmSchema.partial())).output(farmSchema),
  delete: oc.input(z.object({ id: z.number() })).output(z.object({ success: z.boolean() })),
})