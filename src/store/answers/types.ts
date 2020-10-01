import { ANSWER_QUESTION, CLEAR_ANSWERS } from './actions';

export interface IAnswer {
  [questionNumber: number]: boolean;
}
export interface IAnswersState {
  answers: IAnswer;
  score: number;
}

export interface IAnswerQuestionAction {
  type: typeof ANSWER_QUESTION;
  question: number;
  answer: boolean;
  isCorrect: boolean;
}

export interface IClearAnswersAction {
  type: typeof CLEAR_ANSWERS;
}

export type TAnswersAction = IAnswerQuestionAction | IClearAnswersAction;
