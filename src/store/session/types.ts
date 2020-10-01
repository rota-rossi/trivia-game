import {
  CREATE_SESSION_TOKEN_START,
  CREATE_SESSION_TOKEN_DONE,
  CREATE_SESSION_TOKEN_ERROR,
  CLEAR_SESSION_TOKEN,
  RESET_SESSION_TOKEN_DONE,
  RESET_SESSION_TOKEN_ERROR,
  RESET_SESSION_TOKEN_START,
} from './actions';
export interface ISessionState {
  token: string | null;
  error?: string;
  isLoading: boolean;
}

export interface ICreateTokenStartAction {
  type: typeof CREATE_SESSION_TOKEN_START;
}
export interface ICreateTokenDoneAction {
  type: typeof CREATE_SESSION_TOKEN_DONE;
  token: string;
}
export interface ICreateTokenErrorAction {
  type: typeof CREATE_SESSION_TOKEN_ERROR;
  error: string;
}
export interface IResetTokenStartAction {
  type: typeof RESET_SESSION_TOKEN_START;
}
export interface IResetTokenDoneAction {
  type: typeof RESET_SESSION_TOKEN_DONE;
  token: string;
}
export interface IResetTokenErrorAction {
  type: typeof RESET_SESSION_TOKEN_ERROR;
  error: string;
}
export interface IClearSessionTokenAction {
  type: typeof CLEAR_SESSION_TOKEN;
}

export type TSessionAction =
  | ICreateTokenStartAction
  | ICreateTokenDoneAction
  | ICreateTokenErrorAction
  | IResetTokenStartAction
  | IResetTokenDoneAction
  | IResetTokenErrorAction
  | IClearSessionTokenAction;
