import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {
  useFonts,
  Lato_700Bold,
  Lato_400Regular,
  Lato_300Light,
} from '@expo-google-fonts/lato';

import { store, persistor } from './src/store';

import Main from './src/Main';
import Loading from './src/views/Loading';

export default function App() {
  let [fontsLoaded] = useFonts({
    Lato_700Bold,
    Lato_400Regular,
    Lato_300Light,
  });

  if (!fontsLoaded) return <Loading />;
  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate loading={<Loading />} persistor={persistor}>
          <Main />
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
}
