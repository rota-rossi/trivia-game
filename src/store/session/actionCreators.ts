import { AppThunk } from '../types';
import {
  CLEAR_SESSION_TOKEN,
  CREATE_SESSION_TOKEN_DONE,
  CREATE_SESSION_TOKEN_ERROR,
  CREATE_SESSION_TOKEN_START,
  RESET_SESSION_TOKEN_DONE,
  RESET_SESSION_TOKEN_ERROR,
  RESET_SESSION_TOKEN_START,
} from './actions';
import {
  ICreateTokenStartAction,
  ICreateTokenDoneAction,
  ICreateTokenErrorAction,
  IResetTokenStartAction,
  IResetTokenDoneAction,
  IClearSessionTokenAction,
} from './types';
import * as api from './api';

export const createTokenStart: ICreateTokenStartAction = {
  type: CREATE_SESSION_TOKEN_START,
};

export const createTokenDone = (token: string): ICreateTokenDoneAction => ({
  type: CREATE_SESSION_TOKEN_DONE,
  token,
});

export const createTokenError = (error: string): ICreateTokenErrorAction => ({
  type: CREATE_SESSION_TOKEN_ERROR,
  error,
});

export const resetTokenStart: IResetTokenStartAction = {
  type: RESET_SESSION_TOKEN_START,
};

export const resetTokenDone = (token: string): IResetTokenDoneAction => ({
  type: RESET_SESSION_TOKEN_DONE,
  token,
});

export const resetTokenError = (error: string) => ({
  type: RESET_SESSION_TOKEN_ERROR,
  error,
});

export const clearSessionToken: IClearSessionTokenAction = {
  type: CLEAR_SESSION_TOKEN,
};

export const createToken = (): AppThunk => {
  return (dispatch) => {
    dispatch(createTokenStart);
    api
      .fetchToken()
      .then((token) => {
        dispatch(createTokenDone(token));
      })
      .catch((error) => {
        dispatch(createTokenError(error.message));
      });
  };
};

export const resetToken = (token: string): AppThunk => {
  return (dispatch) => {
    dispatch(resetTokenStart);
    api
      .resetToken(token)
      .then((token) => {
        dispatch(resetTokenDone(token));
      })
      .catch((error) => {
        dispatch(resetTokenError(error.message));
      });
  };
};
