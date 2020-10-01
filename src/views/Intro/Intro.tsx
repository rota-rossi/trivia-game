import { useNavigation } from '@react-navigation/native';
import React from 'react';
import styled from 'styled-components/native';
import { Button } from '../../components/Button';
import { Container } from '../../components/Container';
import { Title1 } from '../../styles/typography';
import { FontAwesome } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { loadQuestions } from '../../store/questions/actionCreators';
import { clearAnswers } from '../../store/answers/actionCreators';

const IntroContainer = styled(Container)`
  justify-content: space-around;
  align-items: center;
  padding: 100px 0;
  background-color: #dcd3e8;
`;

const ButtonContainer = styled.View`
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Image = styled.Image.attrs({
  source: require('../../../assets/icon.png'),
})`
  width: 120px;
  height: 120px;
`;

const Intro = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const beginGame = () => {
    dispatch(clearAnswers);
    dispatch(loadQuestions(null));
    navigation.navigate('Question');
  };
  return (
    <IntroContainer>
      <Image />
      <Title1>Trivia Game</Title1>
      <ButtonContainer>
        <Button backgroundColor="blue" onPress={beginGame}>
          <FontAwesome name="gamepad" size={28} /> Begin game
        </Button>
        <Button onPress={() => navigation.navigate('Options')}>
          <FontAwesome name="cog" size={28} /> Options
        </Button>
      </ButtonContainer>
    </IntroContainer>
  );
};

export default Intro;
