import { z } from "zod"

export const schemaSearcfForm = z.object({
  query: z.string().min(3)
})

export type FormDataSearch = z.infer<typeof schemaSearcfForm>