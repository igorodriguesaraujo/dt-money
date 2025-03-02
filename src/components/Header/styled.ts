import styled from "styled-components";

export const HeaderContainer = styled.div`
  background: ${({ theme }) => theme['gray-900']};
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  width: 100%;
  height: 200px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 24px 40px;

  img {
    max-width: 100%;
    height: 36px;
    object-fit: contain;
  }
`;

export const NewTransactionButton = styled.button`
  height: 50px;
  
  padding: 12px 24px;
  
  border: none;
  border-radius: 4px;
  font-weight: 500;
  font-size: 14px;
  white-space: nowrap;
  
  color: ${({ theme }) => theme['white']};
  background: ${({ theme }) => theme['green-500']};
  cursor: pointer;

  /* transtion */
  transition: all 0.3s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme['green-700']};
  }
`;

