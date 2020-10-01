import React, { FC } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import styled from 'styled-components/native';
import { formatText } from '../../../utils/formatText';
import { Paragraph } from '../../../styles/typography';

interface IProps {
  questionText: string;
  playerAnswer: boolean;
  correctAnswer: boolean;
}

const ItemContainer = styled.View`
  width: 100%;
  display: flex;
  flex-flow: row;
  padding: 0 32px;
`;

const IconContainer = styled.View`
  width: 40px;
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

const SummaryItem: FC<IProps> = (props) => {
  // const wasAnsweredRight = props.correctAnswer === props.playerAnswer
  return (
    <ItemContainer>
      <IconContainer>
        <FontAwesome
          name={props.correctAnswer ? 'check' : 'times'}
          size={24}
          color={props.correctAnswer ? 'green' : 'red'}
        />
      </IconContainer>
      <TextContainer>
        <Paragraph>{formatText(props.questionText)}</Paragraph>
      </TextContainer>
      <IconContainer>
        <FontAwesome
          name={props.playerAnswer ? 'check' : 'times'}
          size={24}
          color={props.playerAnswer ? 'green' : 'red'}
        />
      </IconContainer>
    </ItemContainer>
  );
};

export default SummaryItem;
