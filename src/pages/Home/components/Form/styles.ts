import styled from "styled-components"

export const FormContainer = styled.div`
  margin-top: -1.688rem;
  display: flex;
  align-items: center;
  justify-content: center;

  form {
    width: 100%;
    max-width: 46rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;

    input {
      width: 100%;
      max-width: 39.875rem;
      height: 3.375rem;
      padding: 1rem;
      border-radius: 8px;
      background: ${({ theme }) => theme.colors.gray[500]};
      border: 1px solid ${({ theme }) => theme.colors.gray[700]};
      font-size: 1rem;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.gray[200]};

      &::placeholder {
        color: ${({ theme }) => theme.colors.gray[300]};
        font-weight: 400;
      }
    }

    button {
      width: 100%;
      max-width: 5.625rem;
      height: 3.25rem;
      padding: 1rem;
      border-radius: 8px;
      border: none;
      background: ${({ theme }) => theme.colors.primary.dark};
      transition: all 0.2s ease-in-out;
      font-size: 0.875rem;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.gray[100]};
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 0.5rem;

      line-height: 20px;
      vertical-align: middle;

      &:hover:not(:disabled) {
        background: ${({ theme }) => theme.colors.primary.main};
      }

      &:disabled {
        cursor: not-allowed;
        opacity: 0.8;
      }

      svg {
        color: ${({ theme }) => theme.colors.shape.main};
      }
    }
  }
`
