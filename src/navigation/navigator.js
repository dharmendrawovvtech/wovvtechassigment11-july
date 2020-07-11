import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ListComponent from '../screens/ListScreen';
import DetailComponent from '../screens/DetailScreen';
const Stack = createStackNavigator();

export default function Navigation() {
  console.log('enter here navigation');
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HCNews">
        <Stack.Screen name="HCNews" component={ListComponent} />
        <Stack.Screen name="Detail" component={DetailComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
