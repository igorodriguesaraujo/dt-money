import React from "react"
import { useTransactions } from "./useTransactions"

export function useSummary() {
  const { transactions } = useTransactions()

  const transactionsTotalType = React.useCallback((type: 'income' | 'outcome') => {
    if (!type) return 0

    return transactions
      .filter((transaction) => transaction.type === type)
      .reduce((acc, transaction) => acc + transaction.price, 0)
  }, [transactions])

  const transactionsTotal = React.useMemo(() => {
    return transactionsTotalType('income') - transactionsTotalType('outcome')
  }, [transactions])

  return {
    transactionsTotal,
    transactionsTotalType
  }
}