import styled from 'styled-components/native';
import { Container } from '../../components/Container';
import { Paragraph } from '../../styles/typography';

export const QuestionContainer = styled(Container)`
  align-items: center;
`;

export const InnerContainer = styled.View`
  padding: 32px;
  display: flex;
  height: 100%;
`;

export const ScoreContainer = styled.View`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: flex-start;
  height: 40px;
`;
export const ButtonsContainer = styled.View`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
`;

export const QuestionCard = styled.View`
  width: 100%;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid darkgray;
  border-radius: 4px;
  padding: 20px;
`;

export const QuestionText = styled(Paragraph)`
  text-align: center;
  font-size: 20px;
`;

export const BodyContainer = styled.View`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
