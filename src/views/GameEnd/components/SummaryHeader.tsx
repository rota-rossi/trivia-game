import React, { FC } from 'react';
import styled from 'styled-components/native';
import { SubText } from '../../../styles/typography';

const ItemContainer = styled.View`
  width: 100%;
  display: flex;
  flex-flow: row;
  padding: 0 32px;
`;

const IconContainer = styled.View`
  width: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom-color: lightgray;
  border-bottom-width: 1px;
  padding: 10px 0;
`;

const TextContainer = styled.View`
  flex-grow: 1;
  flex-shrink: 1;
  padding: 10px 5px;
  display: flex;
  justify-content: center;
  border-bottom-color: lightgray;
  border-bottom-width: 1px;
`;

const SummaryHeader: FC = () => {
  // const wasAnsweredRight = props.correctAnswer === props.playerAnswer
  return (
    <ItemContainer>
      <IconContainer>
        <SubText>Correct Answer</SubText>
      </IconContainer>
      <TextContainer>
        <SubText>Question</SubText>
      </TextContainer>

      <IconContainer>
        <SubText>Your Answer</SubText>
      </IconContainer>
    </ItemContainer>
  );
};

export default SummaryHeader;
