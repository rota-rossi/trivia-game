import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FalseButton, TrueButton, Button } from '../../components/Button';
import ResponseModal from '../../components/ResponseModal';
import { respondQuestion } from '../../store/answers/actionCreators';
import { IQuestion } from '../../store/questions/types';
import { RootStackParamList } from '../../types';
import { useGameState } from '../../hooks/gameState';
import { IRootState } from '../../store/types';
import Loading from '../Loading/Loading';
import styled from 'styled-components/native';
import { Container, CenteredContainer } from '../../components/Container';
import { Title, Paragraph } from '../../styles/typography';
import { Spacer } from '../../components/Spacer';
import { formatText } from '../../utils/formatText';

const QuestionContainer = styled(Container)`
  align-items: center;
`;

const InnerContainer = styled.View`
  padding: 32px;
  display: flex;
  height: 100%;
  justify-content: space-between;
`;

const ScoreContainer = styled.View`
  display: flex;
  align-items: flex-end;
  height: 40px;
`;
const ButtonsContainer = styled.View`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
`;
const BodyContainer = styled.View`
  flex-grow: 1;
`;

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
        <Title>
          Error: Could not load current question - try reseting your token
        </Title>
        <Button onPress={props.returnToMenu}>Back to Menu</Button>
      </CenteredContainer>
    );
  }
  return (
    <QuestionContainer>
      <InnerContainer>
        <ScoreContainer>
          <Paragraph>
            Score: {props.score}/{props.totalQuestions}
          </Paragraph>
        </ScoreContainer>
        <Title>Question {props.questionNumber + 1} </Title>
        <Spacer size={60} />
        <BodyContainer>
          <Paragraph>{formatText(props.currentQuestion.question)}</Paragraph>
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

type QuestionRouteProps = RouteProp<RootStackParamList, 'Question'>;
type QuestionNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Question'
>;

const Question = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isRightAnswer, setIsRightAnswer] = useState<boolean>(true);
  const isLoadingQuestions = useSelector<IRootState, boolean>(
    (state) => state.questions.isLoading
  );

  const dispatch = useDispatch();
  const route = useRoute<QuestionRouteProps>();
  const { questionNumber } = route.params;
  const navigation = useNavigation<QuestionNavigationProp>();

  const { currentQuestion, totalQuestions, score } = useGameState(
    questionNumber
  );

  const hideModal = () => {
    setIsModalVisible(false);
    if (questionNumber + 1 === totalQuestions) {
      navigation.navigate('GameEnd');
    } else {
      navigation.replace('Question', {
        questionNumber: questionNumber + 1,
      });
    }
  };

  const handleAnswerQuestion = (answer: boolean) => {
    setIsRightAnswer(answer === currentQuestion.correctAnswer);
    setIsModalVisible(true);
    dispatch(
      respondQuestion(questionNumber, answer, currentQuestion.correctAnswer)
    );
  };

  const returnToMenu = () => navigation.navigate('Intro');

  return (
    <QuestionUI
      questionNumber={questionNumber}
      currentQuestion={currentQuestion}
      score={score}
      totalQuestions={totalQuestions}
      handleAnswerQuestion={handleAnswerQuestion}
      isModalVisible={isModalVisible}
      hideModal={hideModal}
      isRightAnswer={isRightAnswer}
      isLoadingQuestions={isLoadingQuestions}
      returnToMenu={returnToMenu}
    />
  );
};

export default Question;
