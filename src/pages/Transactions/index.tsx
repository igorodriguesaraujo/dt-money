import { PriceHighlights, TransitionsContainer, TransitionsTable } from "./styled"

import { Header } from "../../components/Header"
import { Summary } from "../../components/Summary"
import { SearchForm } from "./components/SearchForm"

import { useTransactions } from "../../hooks/useTransactions"

import { formatterCurrency } from "../../helpers/formatterCurrency"
import { formatterDate } from "../../helpers/formatterDate"

export function Transactions() {
  const { transactions } = useTransactions()

  return (
    <main>
      <Header />
      <Summary />
      <SearchForm />
      <TransitionsContainer>
        {!transactions?.length && (
          <p>Nenhuma transação encontrada</p>
        )}
        <TransitionsTable>
          <tbody>
            {transactions?.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.description}</td>
                <td>
                  <PriceHighlights type={transaction.type}>
                    {formatterCurrency(transaction.price)}
                  </PriceHighlights>
                </td>
                <td>{transaction.category}</td>
                <td>{formatterDate((transaction.create_at))}</td>
              </tr>
            ))}
          </tbody>
        </TransitionsTable>
      </TransitionsContainer>
    </main>
  )
}