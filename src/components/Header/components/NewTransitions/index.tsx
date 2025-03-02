import * as  Dialog from "@radix-ui/react-dialog";
import { Controller } from "react-hook-form";

import { FormDataNewTransaction } from "./types";
import { useNewTransitions } from "../../../../hooks/useNewTransitions";

import {
  NewTransactionModalForm,
  ButtonClose,
  Overlay,
  Content,
  Input,
  RadioGroup
} from "./styled";

import IconClose from '../../../../assets/icon-close.svg'
import { useTransactions } from "../../../../hooks/useTransactions";

interface NewTransitionsProps {
  onClose: (value: boolean) => void
}

export function NewTransitions({ onClose }: NewTransitionsProps) {
  const form = useNewTransitions()
  const { newTransaction } = useTransactions()

  const onSubmit = (data: FormDataNewTransaction) => {
    newTransaction(data)
    form.reset()
    onClose(false)
  }

  return (
    <div>
      <Overlay />
      <Content>
        <Dialog.Title>Nova Transação</Dialog.Title>
        <NewTransactionModalForm onSubmit={form.handleSubmit(onSubmit)}>

          <Controller
            name="description"
            control={form.control}
            render={({ field }) => (
              <Input
                type="text"
                placeholder="Valor da Transação"
                {...field}
              />
            )}
          />

          <Controller
            name="price"
            control={form.control}
            render={({ field }) => (
              <Input
                type="number"
                placeholder="Valor da Transação"
                {...field}
              />
            )}
          />

          <Controller
            name="category"
            control={form.control}
            render={({ field }) => (
              <Input
                type="text"
                placeholder="Categoria da Transação"
                {...field}
              />
            )}
          />

          <Controller
            name="type"
            control={form.control}
            render={({ field }) => (
              <RadioGroup>
                <label>
                  <input
                    {...field}
                    type="radio"
                    value="income"
                  />
                  Entrada
                </label>

                <label>
                  <input
                    {...field}
                    type="radio"
                    value="outcome"
                  />
                  Saída
                </label>
              </RadioGroup>
            )}
          />

          <button type="submit" disabled={form.formState.isSubmitting}>
            Salvar
          </button>
        </NewTransactionModalForm>

        <ButtonClose>
          <img src={IconClose} alt="Fechar" />
        </ButtonClose>
      </Content>
    </div>
  )
}