import {
  LOAD_QUESTIONS_DONE,
  LOAD_QUESTIONS_START,
  LOAD_QUESTIONS_ERROR,
  CLEAR_QUESTIONS,
} from './actions';
import { TQuestionsAction, IQuestionsState } from './types';

const initialState: IQuestionsState = {
  isLoading: false,
  questions: [],
  error: undefined,
};

export default (
  state: IQuestionsState = initialState,
  action: TQuestionsAction
): IQuestionsState => {
  switch (action.type) {
    case LOAD_QUESTIONS_START:
      return { ...state, isLoading: true };
    case LOAD_QUESTIONS_DONE:
      return { ...state, isLoading: false, questions: action.questions };
    case LOAD_QUESTIONS_ERROR:
      return { ...state, isLoading: false, error: action.error };
    case CLEAR_QUESTIONS:
      return { ...state, isLoading: false, questions: [], error: undefined };
    default:
      return state;
  }
};
