import questionsReducer from './questions/reducer';
import answersReducer from './answers/reducer';
import sessionReducer from './session/reducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  questions: questionsReducer,
  answers: answersReducer,
  session: sessionReducer,
});
