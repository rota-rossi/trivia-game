import {
  LOAD_QUESTIONS_START,
  LOAD_QUESTIONS_DONE,
  LOAD_QUESTIONS_ERROR,
  CLEAR_QUESTIONS,
} from './actions';

export interface IQuestion {
  category: string;
  question: string;
  correctAnswer: boolean;
  difficulty: string;
}

// reusing the same interface, just changing the type of correct_answer
export interface IAPIQuestion extends Omit<IQuestion, 'correctAnswer'> {
  correct_answer: string;
  incorrect_answers: string[];
}

export interface IQuestionsState {
  isLoading: boolean;
  questions: IQuestion[];
  error?: string;
}

export interface ILoadQuestionsStartAction {
  type: typeof LOAD_QUESTIONS_START;
}

export interface ILoadQuestionsDoneAction {
  type: typeof LOAD_QUESTIONS_DONE;
  questions: IQuestion[];
}

export interface ILoadQuestionsErrorAction {
  type: typeof LOAD_QUESTIONS_ERROR;
  error: string;
}

export interface IClearQuestionsAction {
  type: typeof CLEAR_QUESTIONS;
}

export type TQuestionsAction =
  | ILoadQuestionsStartAction
  | ILoadQuestionsDoneAction
  | ILoadQuestionsErrorAction
  | IClearQuestionsAction;
