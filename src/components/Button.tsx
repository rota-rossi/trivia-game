import React, { FC } from 'react';
import { Pressable } from 'react-native';
import styled from 'styled-components/native';
import { FontAwesome } from '@expo/vector-icons';

const ButtonContainer = styled.View<{
  backgroundColor?: string;
  pressed: boolean;
  width?: number;
  height?: number;
}>`
  width: ${(p) => p.width || 250}px;
  height: ${(p) => p.height || 64}px;
  background-color: ${(p) => p.backgroundColor || 'black'};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${(p) => (p.pressed ? 0.3 : 1)};
`;

const ButtonText = styled.Text<{ color?: string }>`
  color: ${(p) => p.color || 'white'};
  font-size: 24px;
`;

interface ButtonProps {
  color?: string;
  backgroundColor?: string;
  onPress?: () => void;
  width?: number;
  height?: number;
}

export const Button: FC<ButtonProps> = (props) => (
  <Pressable onPress={props.onPress}>
    {({ pressed }) => (
      <ButtonContainer
        backgroundColor={props.backgroundColor}
        pressed={pressed}
        width={props.width}
        height={props.height}
      >
        <ButtonText color={props.color}>{props.children}</ButtonText>
      </ButtonContainer>
    )}
  </Pressable>
);

interface AnswerButtonProps {
  onPress?: () => void;
}
export const TrueButton: FC<AnswerButtonProps> = (props) => (
  <Button
    backgroundColor="green"
    onPress={props.onPress}
    width={100}
    height={100}
  >
    <FontAwesome name="check-circle" size={60} />
  </Button>
);

export const FalseButton: FC<AnswerButtonProps> = (props) => (
  <Button
    backgroundColor="red"
    onPress={props.onPress}
    width={100}
    height={100}
  >
    <FontAwesome name="times-circle" size={60} />
  </Button>
);
