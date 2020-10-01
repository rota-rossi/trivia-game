import React, { FC, useEffect, useRef } from 'react';
import { Modal, Animated } from 'react-native';
import { CenteredContainer } from './Container';
import styled from 'styled-components/native';
import { Title1 } from '../styles/typography';

const ScreenContainer = styled(CenteredContainer)``;

const Background = styled.View`
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0.3;
  background-color: black;
`;

const ModalContainer = styled.View<{
  isRightAnswer: boolean;
  opacity: number;
}>`
  opacity: ${(p) => p.opacity};
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(p) => (p.isRightAnswer ? 'green' : 'red')};
  border-radius: 20px;
`;

const ModalText = styled(Title1)`
  color: white;
`;

const AnimatedModalContainer = Animated.createAnimatedComponent(ModalContainer);

interface IModalProps {
  visible: boolean;
  finishShowing: () => void;
  isRightAnswer: boolean;
}

const ResponseModal: FC<IModalProps> = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const { visible, finishShowing } = props;

  const animate = () => {
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  };
  useEffect(() => {
    if (visible) {
      animate();
      const showAnimation = setTimeout(() => {
        finishShowing();
      }, 1000);
      return () => {
        clearTimeout(showAnimation);
      };
    }
  }, [visible, finishShowing]);

  return (
    <Modal visible={props.visible} transparent>
      <Background />
      <ScreenContainer>
        <AnimatedModalContainer
          isRightAnswer={props.isRightAnswer}
          opacity={fadeAnim}
        >
          <ModalText>{props.isRightAnswer ? 'Right!' : 'Wrong!'}</ModalText>
        </AnimatedModalContainer>
      </ScreenContainer>
    </Modal>
  );
};

export default ResponseModal;
