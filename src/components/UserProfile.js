import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';
import ChangePassword from './ChangePassword'; // Import your ChangePassword component
import FavoriteRecipes from './FavoriteRecipes'; // Import your FavoriteRecipes component

const UserProfile = ({ navigation }) => {
  const [userName, setUserName] = useState('John Doe');

  const handleLogout = () => {
    // Implement logout logic here (e.g., clear user session, navigate to login screen)
    // For now, navigate to the login screen as an example
    navigation.replace('Login');
  };

  return (
    <View style={{ flex: 1, padding: 25 }}>
      {/* User Profile Information */}
      <Text>Name: {userName}</Text>

      {/* Option to Change Password */}
      <ChangePassword />

      {/* List of Favorite Recipes */}
      <FavoriteRecipes />

      {/* Log Out Button */}
      <Button title="Log Out" onPress={handleLogout} />
    </View>
  );
};

export default UserProfile;
