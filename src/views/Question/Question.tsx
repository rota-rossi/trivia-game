import React, { FC } from 'react';
import { FalseButton, TrueButton, Button } from '../../components/Button';
import ResponseModal from '../../components/ResponseModal';
import { IQuestion } from '../../store/questions/types';
import Loading from '../Loading';
import { CenteredContainer } from '../../components/Container';
import { Title1, Paragraph, Title2 } from '../../styles/typography';
import { Spacer } from '../../components/Spacer';
import { formatText } from '../../utils/formatText';
import {
  QuestionContainer,
  InnerContainer,
  ScoreContainer,
  BodyContainer,
  QuestionCard,
  QuestionText,
  ButtonsContainer,
} from './styledComponents';

interface IQuestionProps {
  isLoadingQuestions: boolean;
  questionNumber: number;
  currentQuestion: IQuestion;
  score: number;
  totalQuestions: number;
  handleAnswerQuestion: (answer: boolean) => void;
  isModalVisible: boolean;
  hideModal: () => void;
  isRightAnswer: boolean;
  returnToMenu: () => void;
}

const QuestionUI: FC<IQuestionProps> = (props) => {
  if (props.isLoadingQuestions) {
    return <Loading />;
  }
  if (!props.currentQuestion) {
    return (
      <CenteredContainer>
        <Title1>
          Error: Could not load current question - try reseting your token
        </Title1>
        <Button onPress={props.returnToMenu}>Back to Menu</Button>
      </CenteredContainer>
    );
  }
  return (
    <QuestionContainer>
      <InnerContainer>
        <ScoreContainer>
          <Paragraph>
            Question {props.questionNumber + 1} of {props.totalQuestions}
          </Paragraph>
          <Paragraph>
            Score: {props.score}/{props.totalQuestions}
          </Paragraph>
        </ScoreContainer>
        <Spacer size={20} />
        <Title2>{props.currentQuestion.category}</Title2>
        <BodyContainer>
          <QuestionCard>
            <QuestionText>
              {formatText(props.currentQuestion.question)}
            </QuestionText>
          </QuestionCard>
        </BodyContainer>

        <ButtonsContainer>
          <TrueButton onPress={() => props.handleAnswerQuestion(true)} />
          <FalseButton onPress={() => props.handleAnswerQuestion(false)} />
        </ButtonsContainer>
      </InnerContainer>
      <ResponseModal
        visible={props.isModalVisible}
        finishShowing={props.hideModal}
        isRightAnswer={props.isRightAnswer}
      />
    </QuestionContainer>
  );
};

export default QuestionUI;
