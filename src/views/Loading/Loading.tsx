import React from 'react';
import styled from 'styled-components/native';
import { Container } from '../../components/Container';
const CheckImage = require('../../../assets/check.gif');

const LoadingContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoadingImage = styled.Image.attrs({
  source: CheckImage,
})`
  width: 200px;
  height: 200px;
`;

const Loading = () => {
  return (
    <LoadingContainer>
      <LoadingImage />
    </LoadingContainer>
  );
};

export default Loading;
