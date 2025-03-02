import React from "react";
import { TransactionsContext } from "../contexts/TransactionsContext";

export function useTransactions() {
  return React.useContext(TransactionsContext)
}