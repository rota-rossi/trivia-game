import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { resetToken } from '../../store/session/actionCreators';
import { IRootState } from '../../store/types';

import OptionsUI from './Options';

const Options = () => {
  const token = useSelector<IRootState, string | null>(
    (state) => state.session.token
  );

  const dispatch = useDispatch();

  const resetProgress = () => {
    if (token) {
      dispatch(resetToken(token));
    }
  };

  return <OptionsUI resetProgress={resetProgress} />;
};

export default Options;
