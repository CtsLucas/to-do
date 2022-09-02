import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  max-width: 46rem;
  height: 15.25rem;

  border-top: 1px solid ${({ theme }) => theme.colors.gray[400]};
  border-radius: 0.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  & > p {
    font-size: 1rem;
    line-height: 1.4rem;

    & > span {
      display: block;
      font-weight: 700;
    }
  }
`
