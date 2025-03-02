import { z } from "zod"

export const schemaNewTransaction = z.object({
  description: z.string().min(3),
  price: z.coerce.number().min(1),
  type: z.enum(['income', 'outcome']),
  category: z.string().min(1),
  create_at: z.string().default(new Date().toISOString())
})

export type FormDataNewTransaction = z.infer<typeof schemaNewTransaction>