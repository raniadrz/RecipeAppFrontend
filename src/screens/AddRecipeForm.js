// AddRecipeForm.js
import axios from 'axios';
import * as ImagePicker from 'expo-image-picker';
import React, { useState } from 'react';
import { Alert, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Chip } from 'react-native-paper';

import Breadcrumbs from '../components/Breadcrumbs';
import { styles } from './styles/AddRecipeForm';

const AddRecipeForm = ({ navigation, userId }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const steps = ['Step 1', 'Step 2', 'Step 3', 'Step 4'];

  const [recipeName, setRecipeName] = useState('');
  const [materials, setMaterials] = useState('');
  const [stepsR, setStepsR] = useState('');
  const [time, setTime] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [selectedCuisine, setSelectedCuisine] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedImageUri, setSelectedImageUri] = useState(null);
  const [error, setError] = useState(null);
  
  const cuisines = ['Italian', 'Mexican', 'Chinese', 'Indian', 'Greek', 'Other'];
  const categories = ['Dessert', 'Main Dish', 'Appetizer', 'Salad', 'Soup', 'Chicken', 'Pasta', 'Seafood', 'Lamb', 'Side', 'Starter', 'Vegan', 'Vegetarian', 'Breakfast', 'Goat', 'Other'];

  const handleAddRecipe = async () => {
    try {
      const formData = new FormData();
      formData.append('name', recipeName);
      formData.append('ingredients', materials);
      formData.append('instructions', steps);
      formData.append('time', time);
      formData.append('difficulty', difficulty);
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

      navigation.goBack(); // Navigate back after a successful recipe addition
    } catch (error) {
      console.error('Error adding recipe:', error);
      Alert.alert('Error', 'Failed to add the recipe. Please try again.');
    }
  };

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== 'granted') {
      Alert.alert(
        'Permission Denied',
        'Sorry, we need camera roll permission to upload images.'
      );
    } else {
      const result = await ImagePicker.launchImageLibraryAsync();

      if (!result.cancelled) {
        setSelectedImageUri(result.uri);
        setError(null);
      }
    }
  };

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  
  const handleCancel = () => {
    navigation.goBack(); // Navigate back to the previous screen
  };

  return (
    <View style={styles.container}>

      {/* Breadcrumbs component */}
      <Breadcrumbs steps={steps} currentStep={currentStep} setCurrentStep={setCurrentStep} />

      {currentStep === 1 && (
        <View>
          <Text style={styles.stepTitle}>Step 1: Recipe Information</Text>
          <View style={styles.labelContainer}>
            <Text style={styles.label}>Name of the Recipe:</Text>
            <TextInput
              style={styles.input}
              value={recipeName}
              onChangeText={(text) => setRecipeName(text)}
            />
          </View>

          {/* image selection */}
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
          
          <TouchableOpacity style={styles.button_cancel} onPress={handleCancel}>
            <Text style={styles.buttonText_Cancel}>Cancel</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button_next} onPress={handleNextStep}>
            <Text style={styles.buttonText_Next}>Next</Text>
          </TouchableOpacity>
        </View>
      )}

      {currentStep === 2 && (
        <View>
          <Text style={styles.stepTitle}>Step 2: Difficulty and Timing</Text>
          {/* ... Add difficulty, servings, prep time, cooking time */}
          <View style={styles.labelContainer}>
            <Text style={styles.label}>Difficulty of the Recipe:</Text>
            <TextInput
              style={styles.input}
              value={difficulty}
              onChangeText={(text) => setDifficulty(text)}
            />
          </View>
          <View style={styles.labelContainer}>
            <Text style={styles.label}>Cooking Time:</Text>
            <TextInput
              style={styles.input}
              value={time}
              onChangeText={(text) => setTime(text)}
            />
          </View>
          <TouchableOpacity style={styles.button_prev} onPress={handlePrevStep}>
            <Text style={styles.buttonText_Prev}>Previous</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button_next} onPress={handleNextStep}>
            <Text style={styles.buttonText_Next}>Next</Text>
          </TouchableOpacity>
        </View>
      )}

      {currentStep === 3 && (
        <View>
          <Text style={styles.stepTitle}>Step 3: Materials and Steps</Text>
          {/* ... Add materials and steps */}
          <View style={styles.labelContainer}>
            <Text style={styles.label}>Materials of the Recipe:</Text>
            <TextInput
              style={styles.input}
              value={materials}
              onChangeText={(text) => setMaterials(text)}
            />
          </View>
          <View style={styles.labelContainer}>
            <Text style={styles.label}>Steps:</Text>
            <TextInput
              style={styles.input}
              value={stepsR}
              onChangeText={(text) => setStepsR(text)}
            />
          </View>
          <TouchableOpacity style={styles.button_prev} onPress={handlePrevStep}>
            <Text style={styles.buttonText_Prev}>Previous</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button_next} onPress={handleNextStep}>
            <Text style={styles.buttonText_Next}>Next</Text>
          </TouchableOpacity>
        </View>
      )}
      {currentStep === 4 && (
        <View>
          <Text style={styles.stepTitle}>Step 4: Additional Information</Text>
          <Text style={styles.label}>Cuisine:</Text>
          <View style={styles.chipContainer}>
            {cuisines.map((cuisine) => (
              <Chip
                key={cuisine}
                style={[
                  styles.chip,
                  { backgroundColor: selectedCuisine === cuisine ? '#FD8D14' : '#CECE5A' },
                ]}
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
                style={[
                  styles.chip,
                  { backgroundColor: selectedCategory === category ? '#FD8D14' : '#CECE5A' },
                ]}
                selected={selectedCategory === category}
                onPress={() => setSelectedCategory(selectedCategory === category ? null : category)}
              >
                {category}
              </Chip>
            ))}
          </View>
          <TouchableOpacity style={styles.button_cancel} onPress={handleCancel}>
            <Text style={styles.buttonText_Cancel}>Cancel</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.button_next} onPress={handleAddRecipe}>
            <Text style={styles.buttonText_Next}>Add Recipe</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default AddRecipeForm;
