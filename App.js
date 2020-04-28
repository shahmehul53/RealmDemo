import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './app/src/scenes/HomeScreen';
import ViewUser from './app/src/scenes/ViewUser';
import ViewAllUser from './app/src/scenes/ViewAllUser';
import UpdateUser from './app/src/scenes/UpdateUser';
import RegisterUser from './app/src/scenes/RegisterUser';
import DeleteUser from './app/src/scenes/DeleteUser';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="View" component={ViewUser} />
        <Stack.Screen name="ViewAll" component={ViewAllUser} />
        <Stack.Screen name="Update" component={UpdateUser} />
        <Stack.Screen name="Register" component={RegisterUser} />
        <Stack.Screen name="Delete" component={DeleteUser} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
