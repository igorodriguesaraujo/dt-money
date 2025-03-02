import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import {
  HeaderContainer,
  HeaderContent,
  NewTransactionButton,
} from "./styled";

import { NewTransitions } from "./components/NewTransitions";

import ImgLogo from '../../assets/logo.svg'

export function Header() {
  const [open, setOpen] = React.useState(false)

  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={ImgLogo} alt="" />

        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger asChild>
            <NewTransactionButton type="button">
              Nova Transição
            </NewTransactionButton>
          </Dialog.Trigger>

          <Dialog.Portal>
            <NewTransitions onClose={setOpen} />
          </Dialog.Portal>
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}