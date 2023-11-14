import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import DrawerContent from './components/DrawerContent';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      {/* Define your screens here */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
