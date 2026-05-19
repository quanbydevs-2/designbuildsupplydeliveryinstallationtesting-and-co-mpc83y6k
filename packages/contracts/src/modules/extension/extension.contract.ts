import { oc } from "@orpc/contract"
import { extensionSchema } from "./extension.schema.js"
import { z } from "zod"

export const extensionContract = oc.router({
  list: oc.input(z.object({ search: z.string().optional(), status: z.string().optional(), page: z.number().default(1), limit: z.number().default(20) })).output(z.object({ data: z.array(extensionSchema), total: z.number() })),
  getById: oc.input(z.object({ id: z.number() })).output(extensionSchema),
  create: oc.input(extensionSchema.omit({ id: true, createdAt: true, updatedAt: true })).output(extensionSchema),
  update: oc.input(z.object({ id: z.number() }).merge(extensionSchema.partial())).output(extensionSchema),
  delete: oc.input(z.object({ id: z.number() })).output(z.object({ success: z.boolean() })),
})