import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormDataNewTransaction, schemaNewTransaction } from "../components/Header/components/NewTransitions/types";

export function useNewTransitions() {

  const form = useForm<FormDataNewTransaction>({
    resolver: zodResolver(schemaNewTransaction),
    defaultValues: {
      description: '',
      price: 0,
      type: 'income',
      category: ''
    }
  });

  return form
}