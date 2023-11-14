import { useNavigation } from '@react-navigation/native'; // Import useNavigation
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import PizzaImage from '../../assets/pizza.png';
import SaladImage from '../../assets/salad.png';
import SpaghettiImage from '../../assets/spaghetti.png';
const images = {
  'Spaghetti Bolognese': SpaghettiImage,
  'Margherita Pizza': PizzaImage,
  'Caesar Salad': SaladImage,
  // Add more images as needed
};


const FoodCard = ({ foodData, onPress }) => {
  const { id, name, description } = foodData;
  const photoUrl = images[name];
  const navigation = useNavigation(); // Use the navigation hook

  const handlePress = () => {
    navigation.navigate('RecipeDetails', { idMeal: id, strMealThumb: photoUrl, strMeal: name });
  };

  return (
    <TouchableOpacity style={styles.cardContainer} onPress={() => onPress(handlePress)}>
      <Image source={photoUrl} style={styles.backgroundImage} />
      <View style={styles.overlay}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 16,
    height: 150, // Set the height to half the screen
    // width:300,
    borderRadius: 8,
    overflow: 'hidden', // Clip the image to the rounded corners
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // Cover the entire container
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    padding: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background overlay
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'white', // Set the text color to white
  },
  description: {
    fontSize: 16,
    color: 'white', // Set the text color to white
  },
});

export default FoodCard;
