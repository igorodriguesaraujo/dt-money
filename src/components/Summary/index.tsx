import {
  SummaryArticle,
  SummaryCard,
  SummaryContainer,
  SummaryHeader
} from "./styled";

import { formatterCurrency } from "../../helpers/formatterCurrency";

import IconInput from '../../assets/icon-input.svg';
import IconOutput from '../../assets/icon-output.svg';
import IconTotal from '../../assets/icon-total.svg';

import { useSummary } from "../../hooks/useSummary";

export function Summary() {
  const { transactionsTotal, transactionsTotalType } = useSummary()

  return (
    <SummaryContainer>
      <SummaryCard>
        <SummaryHeader>
          <span>Entrada</span>
          <img src={IconInput} alt="Entrada" />
        </SummaryHeader>

        <SummaryArticle>
          {formatterCurrency(transactionsTotalType('income'))}
        </SummaryArticle>
      </SummaryCard>

      <SummaryCard>
        <SummaryHeader>
          <span>Saída</span>
          <img src={IconOutput} alt="Saída" />
        </SummaryHeader>

        <SummaryArticle>
          {formatterCurrency(transactionsTotalType('outcome'))}
        </SummaryArticle>
      </SummaryCard>

      <SummaryCard color="green">
        <SummaryHeader>
          <span>Total</span>
          <img src={IconTotal} alt="Total" />
        </SummaryHeader>

        <SummaryArticle>
          {formatterCurrency(transactionsTotal)}
        </SummaryArticle>
      </SummaryCard>
    </SummaryContainer>
  )
}