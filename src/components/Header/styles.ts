import styled from "styled-components";

export const Container = styled.header`
  background: ${({theme}) => theme.colors.gray[700]};
  height: 12.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
