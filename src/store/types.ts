import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { ISessionState } from './session/types';
import { IAnswersState } from './answers/types';
import { IQuestionsState } from './questions/types';

export interface IRootState {
  questions: IQuestionsState;
  answers: IAnswersState;
  session: ISessionState;
}
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  IRootState,
  unknown,
  Action<string>
>;
