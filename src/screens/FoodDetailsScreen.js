import React from 'react';
import { Button, Text, View } from 'react-native';

const FoodDetailsScreen = ({ route, navigation }) => {
  const { foodName } = route.params;

  return (
    <View>
      <Text>{foodName} Details</Text>
      <Button title="Add to Favorites" onPress={() => {/* Add to favorites logic */}} />
      <Button title="Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default FoodDetailsScreen;
