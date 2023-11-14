import axios from 'axios';
import * as ImagePicker from 'expo-image-picker';
import React, { useState } from 'react';
import { Alert, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Chip } from 'react-native-paper';
import { styles } from './styles/AddRecipeForm';

const AddRecipeForm = ({ navigation, userId }) => {
  const [recipeName, setRecipeName] = useState('');
  const [materials, setMaterials] = useState('');
  const [steps, setSteps] = useState('');
  const [selectedCuisine, setSelectedCuisine] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedImageUri, setSelectedImageUri] = useState(null);
  const [error, setError] = useState(null);

  const cuisines = ['Italian', 'Mexican', 'Chinese', 'Indian', 'Greek', 'Other'];
  const categories = ['Dessert', 'Main Dish', 'Appetizer', 'Salad', 'Soup','Chiken','Pasta','Seafood','Lamp','Side','Starter','Vegan','Vegetarian','Breakfast','Goat', 'Other'];

  const handleAddRecipe = async () => {
    try {
      const formData = new FormData();
      formData.append('name', recipeName);
      formData.append('ingredients', materials);
      formData.append('instructions', steps);
      formData.append('cuisine', selectedCuisine || 'Other');
      formData.append('category', selectedCategory || 'Other');
      formData.append('image', {
        uri: selectedImageUri,
        type: 'image/jpeg',
        name: 'recipe.jpg',
      });
      formData.append('userId', userId);

      // Post the new recipe to the backend
      const response = await axios.post('http://localhost:8080/recipes', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const newRecipeId = response.data.id;

      // Add the new recipe to favorites
      await axios.post('http://localhost:8080/favorites', {
        recipeId: newRecipeId,
        userId: userId,
        favorite: false, // Set favorite status as false initially
      });

      console.log('New Recipe Added:', response.data);

      navigation.goBack(); // Navigate back after successful recipe addition
    } catch (error) {
      console.error('Error adding recipe:', error);
      Alert.alert('Error', 'Failed to add recipe. Please try again.');
    }
  };

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Permission Denied",
        "Sorry, we need camera roll permission to upload images."
      );
    } else {
      const result = await ImagePicker.launchImageLibraryAsync();

      if (!result.cancelled) {
        setSelectedImageUri(result.uri);
        setError(null);
      }
    }
  };
  const handleCancel = () => {
    navigation.goBack(); // Navigate back to the previous screen
  };

  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>Name of the Recipe:</Text>
        <TextInput
          style={styles.input_name}
          value={recipeName}
          onChangeText={(text) => setRecipeName(text)}
        />
      </View>

      <View style={styles.labelContainer}>
        <Text style={styles.label}>Materials:</Text>
        <TextInput
          style={styles.input}
          value={materials}
          onChangeText={(text) => setMaterials(text)}
          multiline
        />
      </View>

      <View style={styles.labelContainer}>
        <Text style={styles.label}>Steps:</Text>
        <TextInput
          style={styles.input}
          value={steps}
          onChangeText={(text) => setSteps(text)}
          multiline
        />
      </View>

      <Text style={styles.label}>Cuisine:</Text>
      <View style={styles.chipContainer}>
        {cuisines.map((cuisine) => (
          <Chip
            key={cuisine}
            style={[styles.chip, { backgroundColor: selectedCuisine === cuisine ? '#FD8D14' : '#CECE5A' }]}
            selected={selectedCuisine === cuisine}
            onPress={() => setSelectedCuisine(selectedCuisine === cuisine ? null : cuisine)}
          >
            {cuisine}
          </Chip>
        ))}
      </View>

      <Text style={styles.label}>Category:</Text>
      <View style={styles.chipContainer}>
        {categories.map((category) => (
          <Chip
            key={category}
            style={[styles.chip, { backgroundColor: selectedCategory === category ? '#FD8D14' : '#CECE5A' }]}
            selected={selectedCategory === category}
            onPress={() => setSelectedCategory(selectedCategory === category ? null : category)}
          >
            {category}
          </Chip>
        ))}
      </View>

      <Text style={styles.label}>
        Add Image:
      </Text>

      <TouchableOpacity style={styles.button} onPress={pickImage}>
        <Text style={styles.buttonText}>
          Choose Image
        </Text>
      </TouchableOpacity>

      <View style={styles.containerImages}>
        {selectedImageUri ? (
          <View style={styles.imageContainer}>
            <Image source={{ uri: selectedImageUri }} style={styles.image} />
          </View>
        ) : (
          <Text style={styles.errorText}>{error}</Text>
        )}
      </View>

      
      <TouchableOpacity style={styles.button_add} onPress={handleAddRecipe}>
        <Text style={styles.buttonText_Add}>Add Recipe</Text>
        </TouchableOpacity>
      <TouchableOpacity style={styles.button_cancel} onPress={handleCancel}>
        <Text style={styles.buttonText_Cancel}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddRecipeForm;
