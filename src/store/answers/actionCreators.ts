import { CLEAR_ANSWERS, ANSWER_QUESTION } from './actions';
import { IAnswerQuestionAction, IClearAnswersAction } from './types';

export const respondQuestion = (
  question: number,
  answer: boolean,
  correctAnswer: boolean
): IAnswerQuestionAction => ({
  type: ANSWER_QUESTION,
  question,
  answer,
  isCorrect: answer === correctAnswer,
});

export const clearAnswers: IClearAnswersAction = { type: CLEAR_ANSWERS };
