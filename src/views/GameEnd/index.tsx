import React from 'react';
import GameEndUI from './GameEnd';
import {
  useGameState,
  useGameSummary,
  useResetGame,
} from '../../hooks/gameState';

const GameEnd = () => {
  const { totalQuestions, score } = useGameState();
  const finalResults = useGameSummary();
  const returnToMenu = useResetGame();
  return (
    <GameEndUI
      score={score}
      totalQuestions={totalQuestions}
      returnToMenu={returnToMenu}
      finalResults={finalResults}
    />
  );
};

export default GameEnd;
