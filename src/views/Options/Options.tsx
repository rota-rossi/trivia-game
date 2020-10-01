import React, { FC } from 'react';
import styled from 'styled-components/native';
import { CenteredContainer } from '../../components/Container';
import { Button } from '../../components/Button';
import { Subtitle } from '../../styles/typography';
import { Spacer } from '../../components/Spacer';

const OptionsContainer = styled.View`
  padding: 0 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface OptionsProp {
  resetProgress: () => void;
}

const OptionsUI: FC<OptionsProp> = (props) => {
  return (
    <CenteredContainer>
      <OptionsContainer>
        <Button backgroundColor="blue" onPress={props.resetProgress}>
          Reset Progress
        </Button>
        <Spacer size={10} />
        <Subtitle>
          This option will reset your progress. Use it if you exhaust the
          questions/want to play the same questions again
        </Subtitle>
      </OptionsContainer>
    </CenteredContainer>
  );
};

export default OptionsUI;
