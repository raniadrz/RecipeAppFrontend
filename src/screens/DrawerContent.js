import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import React from 'react';

const DrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <Drawer.Section>
        <DrawerItem
          label="Favourites"
          onPress={() => {
            // Navigate to Favourites screen
          }}
        />
        <DrawerItem
          label="Profile"
          onPress={() => {
            // Navigate to Profile screen
          }}
        />
        <DrawerItem
          label="Logout"
          onPress={() => {
            // Perform logout actions
          }}
        />
      </Drawer.Section>
    </DrawerContentScrollView>
  );
};

export { DrawerContent };
