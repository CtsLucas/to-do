import styled from "styled-components"

interface TaskInfoProps {
  type: "created" | "completed"
}

export const Container = styled.div`
  padding: 0 1rem;
`

export const Form = styled.div`
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

export const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
`

export const Header = styled.header`
  width: 100%;
  max-width: 46rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const TaskInfo = styled.div<TaskInfoProps>`
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  color: ${({ type, theme }) =>
    type === "created"
      ? theme.colors.primary.main
      : theme.colors.secondary.main};

  span {
    background: ${({ theme }) => theme.colors.gray[400]};
    border-radius: 10px;
    padding: 2px 8px;
    font-size: 12px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.gray[200]};
    line-height: 14.5px;
    margin-left: 8px;
  }
`
export const Content = styled.div`
  width: 100%;
  max-width: 46rem;
  height: calc(100vh - 25.5rem);
  margin-top: 1.5rem;

  overflow: hidden;
  overflow-y: auto;

  &:hover {
    ::-webkit-scrollbar {
      width: 0.5rem;
    }
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.gray[500]};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.gray[400]};
    border-radius: 0.5rem;
  }

  scrollbar-width: thin;
  scrollbar-color: ${({ theme }) => theme.colors.gray[700]} transparent;
`
