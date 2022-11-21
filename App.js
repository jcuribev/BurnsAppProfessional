import 'react-native-gesture-handler';
import React from 'react';
import NavigationDrawer from './src/navigation/NavigationDrawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './src/pages/MainScreen';
import CustomHeader from './src/navigation/CustomHeader';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Main'
        screenOptions={{
          headerMode: 'screen',
          headerTintColor: '#404554',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          header: (props) => {
            return <CustomHeader {...props} />;
          },
        }}>

        <Stack.Screen options={{ headerShown: false }} name="Main" component={NavigationDrawer} />
      </Stack.Navigator>
    </NavigationContainer >
  );
};

export default App;
