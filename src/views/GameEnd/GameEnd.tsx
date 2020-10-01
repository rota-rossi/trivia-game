import React, { FC } from 'react';
import { FlatList } from 'react-native';
import { Button } from '../../components/Button';
import { Container } from '../../components/Container';
import { Title1, Paragraph } from '../../styles/typography';
import { Spacer } from '../../components/Spacer';
import SummaryItem from './components/SummaryItem';
import SummaryHeader from './components/SummaryHeader';
import {
  InnerContainer,
  SummaryContainer,
  ButtonContainer,
} from './styledComponents';

type Results = {
  questionText: string;
  playerAnswer: boolean;
  correctAnswer: boolean;
};

interface IProps {
  score: number;
  totalQuestions: number;
  returnToMenu: () => void;
  finalResults: Results[];
}

const GameEndUI: FC<IProps> = (props) => {
  return (
    <Container>
      <InnerContainer>
        <Title1>Game Over</Title1>
        <Spacer size={24} />
        <Paragraph>
          Final Score: {props.score}/{props.totalQuestions}
        </Paragraph>
        <Spacer size={10} />
        <SummaryContainer>
          <SummaryHeader />
          <FlatList
            data={props.finalResults}
            renderItem={({ item }) => (
              <SummaryItem
                questionText={item.questionText}
                playerAnswer={item.playerAnswer}
                correctAnswer={item.correctAnswer}
              />
            )}
            keyExtractor={(_, index) => index.toString()}
          />
        </SummaryContainer>
        <ButtonContainer>
          <Button onPress={props.returnToMenu}>Back to Menu</Button>
        </ButtonContainer>
      </InnerContainer>
    </Container>
  );
};

export default GameEndUI;
