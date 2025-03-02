import React from "react";
import { httpClient } from "../helpers/httpCliente";

interface Transaction {
  id?: number
  description: string
  type: "income" | "outcome"
  category: string
  price: number
  create_at: string
}

interface TransactionsContextType {
  transactions: Transaction[]
  getTransactions: (query?: string) => Promise<void>
  newTransaction: (transaction: Transaction) => Promise<void>
}

export const TransactionsContext = React.createContext({} as TransactionsContextType)

interface TransactionsProviderProps {
  children: React.ReactNode
}

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = React.useState<Transaction[]>([])

  async function getTransactions(query?: string) {
    const response = await httpClient.get('/transactions', {
      params: {
        _sort: 'create_at',
        _order: 'asc',
        description: query
      }
    })

    setTransactions(response.data)
  }

  async function newTransaction({
    description,
    price,
    type,
    category
  }: Transaction) {
    const response = await httpClient.post('/transactions', {
      description,
      type,
      category,
      price,
      create_at: new Date().toISOString()
    })

    setTransactions((prevState) => [...prevState, response.data])
  }

  React.useEffect(() => {
    getTransactions()
  }, [])

  const value = {
    transactions,
    getTransactions,
    newTransaction
  }

  return (
    <TransactionsContext.Provider value={value}>
      {children}
    </TransactionsContext.Provider>
  )
}