import { AppThunk } from './../types';

import * as api from './api';
import * as sessionApi from '../session/api';

import {
  ILoadQuestionsDoneAction,
  ILoadQuestionsErrorAction,
  ILoadQuestionsStartAction,
  IClearQuestionsAction,
  IAPIQuestion,
} from './types';
import {
  LOAD_QUESTIONS_DONE,
  LOAD_QUESTIONS_START,
  LOAD_QUESTIONS_ERROR,
  CLEAR_QUESTIONS,
} from './actions';

export const loadQuestionsStart: ILoadQuestionsStartAction = {
  type: LOAD_QUESTIONS_START,
};

export const loadQuestionsDone = (
  questions: IAPIQuestion[]
): ILoadQuestionsDoneAction => ({
  type: LOAD_QUESTIONS_DONE,
  questions: questions.map((question) => ({
    ...question,
    correctAnswer: question.correct_answer === 'True',
    incorrect_answers: undefined,
    correct_answer: undefined,
  })),
});

export const loadQuestionsError = (
  error: string
): ILoadQuestionsErrorAction => ({
  type: LOAD_QUESTIONS_ERROR,
  error,
});

export const clearQuestions: IClearQuestionsAction = { type: CLEAR_QUESTIONS };

export const loadQuestions = (token: string | null): AppThunk => {
  return async (dispatch) => {
    try {
      dispatch(loadQuestionsStart);
      const newToken = token || (await sessionApi.fetchToken());
      const questions = await api.fetchQuestions(newToken);
      dispatch(loadQuestionsDone(questions));
    } catch (error) {
      dispatch(loadQuestionsError(error.message));
    }
  };
};
