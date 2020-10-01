import React, { FC } from 'react';
import { FlatList } from 'react-native';
import { Button } from '../../components/Button';
import {
  useGameState,
  useResetGame,
  useGameSummary,
} from '../../hooks/gameState';
import { Container } from '../../components/Container';
import { Title, Paragraph } from '../../styles/typography';
import styled from 'styled-components/native';
import { Spacer } from '../../components/Spacer';
import SummaryItem from './components/SummaryItem';
import SummaryHeader from './components/SummaryHeader';

const InnerContainer = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const SummaryContainer = styled.View`
  flex: 1;
`;

const ButtonContainer = styled.View`
  display: flex;
  width: 100%;
  height: 70px;
  justify-content: center;
  align-items: center;
`;

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
        <Title>Game Over</Title>
        <Spacer size={32} />
        <Paragraph>
          Final Score: {props.score}/{props.totalQuestions}
        </Paragraph>
        <SummaryContainer>
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
            ListHeaderComponent={<SummaryHeader />}
          />
        </SummaryContainer>
        <ButtonContainer>
          <Button onPress={props.returnToMenu}>Back to Menu</Button>
        </ButtonContainer>
      </InnerContainer>
    </Container>
  );
};

const GameEnd = () => {
  const { totalQuestions, score } = useGameState();
  const finalResults = useGameSummary();
  const returnToMenu = useResetGame();
  return (
    <GameEndUI
      score={score}
      totalQuestions={totalQuestions}
      returnToMenu={returnToMenu}
      finalResults={finalResults}
    />
  );
};

export default GameEnd;
