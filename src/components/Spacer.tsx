import styled from 'styled-components/native';

export const Spacer = styled.View<{ size: number }>`
  height: ${(p) => p.size}px;
  width: ${(p) => p.size}px;
`;
