import { oc } from "@orpc/contract"
import { subsidySchema } from "./subsidy.schema.js"
import { z } from "zod"

export const subsidyContract = oc.router({
  list: oc.input(z.object({ search: z.string().optional(), status: z.string().optional(), page: z.number().default(1), limit: z.number().default(20) })).output(z.object({ data: z.array(subsidySchema), total: z.number() })),
  getById: oc.input(z.object({ id: z.number() })).output(subsidySchema),
  create: oc.input(subsidySchema.omit({ id: true, createdAt: true, updatedAt: true })).output(subsidySchema),
  update: oc.input(z.object({ id: z.number() }).merge(subsidySchema.partial())).output(subsidySchema),
  delete: oc.input(z.object({ id: z.number() })).output(z.object({ success: z.boolean() })),
})