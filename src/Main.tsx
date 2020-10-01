import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { useSelector } from 'react-redux';
import { IRootState } from './store/types';
import Intro from './views/Intro/Intro';
import Options from './views/Options/Options';
import Question from './views/Question/Question';
import { RootStackParamList } from './types';
import GameEnd from './views/GameEnd/GameEnd';

const Stack = createStackNavigator<RootStackParamList>();

const Main = () => {
  const questionNumber = useSelector<IRootState, number>(
    (state) => Object.keys(state.answers.answers).length
  );

  return (
    <Stack.Navigator initialRouteName="Intro">
      <Stack.Screen
        name="Intro"
        component={Intro}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Options" component={Options} />
      <Stack.Screen
        name="Question"
        component={Question}
        initialParams={{ questionNumber }}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="GameEnd"
        component={GameEnd}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Main;
