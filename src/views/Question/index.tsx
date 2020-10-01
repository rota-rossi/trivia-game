import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IRootState } from '../../store/types';
import { useRoute, useNavigation, RouteProp } from '@react-navigation/native';
import { useGameState } from '../../hooks/gameState';
import { respondQuestion } from '../../store/answers/actionCreators';
import QuestionUI from './Question';
import { RootStackParamList } from '../../types';
import { StackNavigationProp } from '@react-navigation/stack';

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
