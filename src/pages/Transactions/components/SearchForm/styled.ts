import styled from "styled-components";

export const SearchFormContainer = styled.form`
  width: 100%;  
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px 32px;

  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
`;

export const SearchFormInput = styled.input`
  flex: 1;
  height: 54px;
  padding:16px;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  background: ${({ theme }) => theme['gray-900']};
  color: ${({ theme }) => theme['gray-500']};

  &::placeholder {
    color: ${({ theme }) => theme['gray-300']};
  }
`;

export const SearchFormButton = styled.button`
  flex: 1;
  padding: 0px 32px;
  height: 54px;
  
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  
  border-radius: 6px;
  background: transparent;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme['green-500']};

  &:hover {
    background: ${({ theme }) => theme['green-500']};
    span {
      color: ${({ theme }) => theme['white']};
    }
  }
  
  span {
    color: ${({ theme }) => theme['green-500']};
    font-size: 14px;
    font-weight: 800;
  }
  
  /* responsive */
  @media(min-width: 992px) {
    flex: none;
  }
`;