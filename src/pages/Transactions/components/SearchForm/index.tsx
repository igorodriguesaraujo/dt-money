import { Controller } from "react-hook-form";

import {
  SearchFormButton,
  SearchFormContainer,
  SearchFormInput
} from "./styled";

import { FormDataSearch } from "./types";
import { useSearchForm } from "../../../../hooks/useSearchForm";
import { useTransactions } from "../../../../hooks/useTransactions";

import IconSeact from '../../../../assets/icon-search.svg'

export function SearchForm() {
  const form = useSearchForm()
  const { getTransactions } = useTransactions()

  async function onSubmit(data: FormDataSearch) {
    await getTransactions(data.query)
    form.reset()
  }

  return (
    <SearchFormContainer
      onSubmit={form.handleSubmit(onSubmit)}
    >
      <Controller
        name="query"
        control={form.control}
        render={({ field }) => (
          <>
            <SearchFormInput
              type="text"
              placeholder="Buscar uma transação"
              {...field}
            />
            <SearchFormButton type="submit">
              <img src={IconSeact} alt="Buscar" />
              <span>Buscar</span>
            </SearchFormButton>
          </>
        )} />
    </SearchFormContainer>
  )
}