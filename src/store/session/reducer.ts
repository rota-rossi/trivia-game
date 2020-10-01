import {
  CREATE_SESSION_TOKEN_DONE,
  CLEAR_SESSION_TOKEN,
  CREATE_SESSION_TOKEN_ERROR,
  CREATE_SESSION_TOKEN_START,
  RESET_SESSION_TOKEN_START,
  RESET_SESSION_TOKEN_ERROR,
  RESET_SESSION_TOKEN_DONE,
} from './actions';
import { ISessionState, TSessionAction } from './types';
const initialState: ISessionState = {
  token: null,
  isLoading: false,
  error: undefined,
};

export default (
  state: ISessionState = initialState,
  action: TSessionAction
) => {
  switch (action.type) {
    case CREATE_SESSION_TOKEN_START:
    case RESET_SESSION_TOKEN_START:
      return { ...state, isLoading: true };
    case CREATE_SESSION_TOKEN_DONE:
    case RESET_SESSION_TOKEN_DONE:
      return { ...state, token: action.token, isLoading: false };
    case CREATE_SESSION_TOKEN_ERROR:
    case RESET_SESSION_TOKEN_ERROR:
      return { ...state, error: action.error, isLoading: false };
    case CLEAR_SESSION_TOKEN:
      return initialState;
    default:
      return state;
  }
};
