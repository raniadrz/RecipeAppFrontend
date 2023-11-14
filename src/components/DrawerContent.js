import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import React from 'react';

const DrawerContent = ({ navigation, ...props }) => {
  const user = true; // Set this to true if the user is logged in, false otherwise

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      {user ? (
        <>
          <DrawerItem label="Profile" onPress={() => navigation.navigate('Profile')} />
          <DrawerItem label="Favourites" onPress={() => navigation.navigate('Favourites')} />
          <DrawerItem label="My Recipes" onPress={() => navigation.navigate('MyRecipes')} />
          <DrawerItem label="Log Out" onPress={() => {/* Handle log out logic */}} />
        </>
      ) : (
        <>
          <DrawerItem label="Log In" onPress={() => navigation.navigate('Login')} />
          <DrawerItem label="Sign Up" onPress={() => navigation.navigate('SignUp')} />
        </>
      )}
    </DrawerContentScrollView>
  );
};

export default DrawerContent;
