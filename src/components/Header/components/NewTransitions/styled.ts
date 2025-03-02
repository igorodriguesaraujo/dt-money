import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
`;

export const Content = styled(Dialog.Content)`
  width: 100%;
  max-width: 550px;
  height:auto;

  padding: 48px;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
  border-radius: 6px;
  box-shadow: none;
  background: ${({ theme }) => theme['gray-800']};
`;

export const NewTransactionModalForm = styled.form`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  button {
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

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background: ${({ theme }) => theme['green-700']};
    }
  }
`;

export const ButtonClose = styled(Dialog.Close)`
  position: absolute;
  top: 16px;
  right: 16px;

  background: transparent;
  border: none;

  cursor: pointer;
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;
  padding: 12px 24px;
  
  border: none;
  border-radius: 4px;
  font-weight: 500;
  font-size: 14px;
  white-space: nowrap;
  
  color: ${({ theme }) => theme['white']};
  background: ${({ theme }) => theme['gray-700']};

  /* transtion */
  transition: all 0.3s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme['gray-600']};
  }
  `;

export const RadioGroup = styled.div`
    display: flex;
    gap: 16px;
    align-items: center;
    
    label {
      display: flex;
      align-items: center;
      gap: 8px;
      
      input {
        margin-right: 8px;
      }
    }

    &:last-child {
      margin-top: 16px;
    }

    input[type="radio"] {
      accent-color: ${({ theme }) => theme['green-500']};
    }
  `;