import styled, { css } from "styled-components";

export const SummaryContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 32px;

  width: 100%;
  max-width: 1200px;
  margin: -117px auto 0;
  padding: 40px 24px;
`;

interface SummaryCardProps {
  color?: string;
}

export const SummaryCard = styled.div<SummaryCardProps>`
  flex: 1;
  background: ${({ theme }) => theme['gray-600']};
  border-radius: 6px;
  padding: 40px 24px 40px;

  ${(props) => props.color === 'green' && css`
    background: ${({ theme }) => theme['green-500']};
  `}
`;

export const SummaryHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-size: 12px;
    color: ${({ theme }) => theme['gray-300']};
  }
`;

export const SummaryArticle = styled.article`
  font-size: 32px;
  font-weight: 700;
  color: ${({ theme }) => theme['gray-100']};
`;