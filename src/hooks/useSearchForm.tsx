import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { FormDataSearch, schemaSearcfForm } from "../pages/Transactions/components/SearchForm/types"

export function useSearchForm() {
  const form = useForm<FormDataSearch>({
    resolver: zodResolver(schemaSearcfForm),
    defaultValues: {
      query: ''
    }
  })
  return form
}