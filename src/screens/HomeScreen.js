import React, { useState } from 'react';
import { Button, Dimensions, FlatList, Modal, Text, TouchableOpacity, View } from 'react-native';
import { SearchBar } from 'react-native-elements';
import FoodCard from '../components/FoodCard';
const screenWidth = Dimensions.get('window').width;

const fakeRecipes = [
  { id: 1, name: 'Spaghetti Bolognese', description: 'Classic Italian pasta dish with meat sauce.' },
  { id: 2, name: 'Margherita Pizza', description: 'Traditional Italian pizza with tomato, mozzarella, and basil.' },
  { id: 3, name: 'Caesar Salad', description: 'Fresh salad with romaine lettuce, croutons, Parmesan cheese, and Caesar dressing.' },
  // Add more fake recipes as needed
];

const HomeScreen = ({ navigation }) => {
  const [recipes, setRecipes] = useState(fakeRecipes);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const filteredRecipes = recipes.filter(recipe => recipe.name.toLowerCase().includes(searchQuery.toLowerCase()));

  const handleFoodCardPress = (foodId) => {
    const recipe = recipes.find(recipe => recipe.id === foodId);
    setSelectedRecipe(recipe);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setSelectedRecipe(null);
  };

  return (
    <View style={{ flex: 1, padding: 25 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Hello, Noman!</Text>
      <Text style={{ fontSize: 18 }}>Make your own food, home</Text>
      
      <SearchBar
        placeholder="Search recipes..."
        onChangeText={(text) => setSearchQuery(text)}
        value={searchQuery}
        lightTheme
        round
        containerStyle={{ backgroundColor: 'transparent', borderTopWidth: 0, borderBottomWidth: 0, top: 30 }}
        inputContainerStyle={{ backgroundColor: 'white' }}
        searchIcon={{ name: 'search', color: 'gray' }}
      />

      <FlatList
        data={filteredRecipes}
        renderItem={({ item }) => <FoodCard foodData={item} onPress={() => handleFoodCardPress(item.id)} />}
        keyExtractor={item => item.id.toString()}
        style={{ marginTop: 60 }}
      />

      {/* Recipe Details Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={closeModal}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, width: screenWidth - 40 }}>
            {selectedRecipe && (
              <>
                <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>{selectedRecipe.name}</Text>
                <Text style={{ marginBottom: 10 }}>{selectedRecipe.description}</Text>
                <Button title="Close" onPress={closeModal} />
              </>
            )}
          </View>
        </View>
      </Modal>

      {/* Add New Recipe button */}
      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: 20,
          right: 20,
          backgroundColor: 'red',
          width: 60,
          height: 60,
          borderRadius: 30,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => navigation.navigate('AddRecipeForm')}
      >
        <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
