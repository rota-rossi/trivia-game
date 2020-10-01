import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { clearAnswers } from '../store/answers/actionCreators';
import { IQuestion } from '../store/questions/types';
import { IRootState } from '../store/types';
import { loadQuestions } from '../store/questions/actionCreators';

interface TShortReturn {
  totalQuestions: number;
  score: number;
}

interface TLongReturn extends TShortReturn {
  currentQuestion: IQuestion;
}

function useGameState(): TShortReturn;
function useGameState(questionNumber: number): TLongReturn;
function useGameState(questionNumber?: number) {
  const result = useSelector(({ questions, answers }: IRootState) => ({
    currentQuestion:
      questionNumber !== undefined
        ? questions.questions[questionNumber]
        : undefined,
    totalQuestions: questions.questions.length,
    score: answers.score,
  }));

  return result;
}

const useResetGame = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const token = useSelector<IRootState, string | null>(
    (state) => state.session.token
  );

  const resetGame = () => {
    dispatch(clearAnswers);
    dispatch(loadQuestions(token));
    navigation.navigate('Intro');
  };
  return resetGame;
};

const useGameSummary = () => {
  const result = useSelector(({ questions, answers }: IRootState) =>
    questions.questions.map((question, index) => ({
      questionText: question.question,
      playerAnswer: answers.answers[index],
      correctAnswer: question.correctAnswer,
    }))
  );

  return result;
};

export { useGameState, useResetGame, useGameSummary };
