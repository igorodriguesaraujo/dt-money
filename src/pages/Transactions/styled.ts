import styled, { css } from "styled-components";

export const TransitionsContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0px 24px;
  overflow-x: auto;

`;

export const TransitionsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0px 8px;

  tr {
    background: ${({ theme }) => theme['gray-700']};
    color: ${({ theme }) => theme['gray-100']};
    
    td {
      padding: 20px 24px;
      font-size: 14px;
      white-space: nowrap;
      
      &:first-child {
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
      }
   
      &:last-child {
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
      }
    }
  }
`;

interface PriceHighlightsProps {
  type?: 'income' | 'outcome';
}

export const PriceHighlights = styled.div<PriceHighlightsProps>`
  ${({ type }) => type === 'income' && css`color: ${({ theme }) => theme['green-500']};`}
  ${({ type }) => type === 'outcome' && css`color: ${({ theme }) => theme['red-500']};`}
`;

