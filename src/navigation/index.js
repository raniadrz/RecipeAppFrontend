import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import FoodDetails from '../components/RecipeDetails';
import AddRecipeForm from '../screens/AddRecipeForm';
import HomeScreen from '../screens/HomeScreen';



const Stack = createNativeStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome' screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="My Recipes" component={HomeScreen} />
        <Stack.Screen name="Food Details" component={FoodDetails} />
        <Stack.Screen name="AddRecipeForm" component={AddRecipeForm} />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}

export default AppNavigation;