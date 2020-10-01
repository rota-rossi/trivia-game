import { ANSWER_QUESTION, CLEAR_ANSWERS } from './actions';
import { TAnswersAction, IAnswersState } from './types';

const initialState: IAnswersState = {
  answers: {},
  score: 0,
};

export default (
  state: IAnswersState = initialState,
  action: TAnswersAction
) => {
  switch (action.type) {
    case ANSWER_QUESTION:
      return {
        ...state,
        answers: {
          ...state.answers,
          [action.question]: action.answer,
        },
        score: action.isCorrect ? state.score + 1 : state.score,
      };
    case CLEAR_ANSWERS:
      return initialState;
    default:
      return state;
  }
};
