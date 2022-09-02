import styled from "styled-components"

interface TaskProps {
  isDone: boolean
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background: ${({ theme }) => theme.colors.gray[400]};
  padding: 1rem;
  border-radius: 0.5rem;
  gap: 0.75rem;

  & > button {
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.colors.gray[300]};
    transition: color 0.2s;

    &:hover {
      color: ${({ theme }) => theme.colors.danger.main};
    }

    &:focus {
      box-shadow: none;
    }
  }

  & + & {
    margin-top: 0.75rem;
  }
`
export const Text = styled.p<TaskProps>`
  flex: 1;
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray[100]};
  line-height: 20px;
  transition: all 0.2s ease-in-out;

  ${({ isDone }) =>
    isDone === true && `text-decoration: line-through; opacity: 0.5;`}
`
