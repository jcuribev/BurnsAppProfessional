import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import { drawerItems, drawerSubItems } from './DrawerItemsMain';
import CustomDrawer from './CustomDrawer';
import { TouchableOpacity } from 'react-native-gesture-handler';
import About from '../pages/About';
import References from '../pages/References';
import PagesOfInterest from '../pages/PagesOfInterest';
import Examination from '../pages/Examination';
import Pressotherapy from '../pages/intervention/scar_management/Pressotherapy';
import CausesOfBurns from '../pages/home/CausesOfBurns';
import Definition from '../pages/home/Definition';
import Clasification from '../pages/home/Clasification';
import Introduction from '../pages/home/Introduction';
import Consequences from '../pages/home/Consequences';
import TherapeuticExerciseIntroduction from '../pages/intervention/TherapeuticExercise/TherapeuticExerciseIntroduction';
import TherapeuticExerciseTypes from '../pages/intervention/TherapeuticExercise/TherapeuticExerciseTypes';
import PainManagement from '../pages/intervention/PainManagement';

const Map = {
  "Home": "Home",
  "Examination": Examination,
  "Intervention": "Intervention",
  "References": References,
  "PagesOfInterest": PagesOfInterest,
  "About": About,
  "Introduction": Introduction,
  "Definition": Definition,
  "Clasification": Clasification,
  "CausesOfBurns": CausesOfBurns,
  "Consequences": Consequences,
  "TherapeuticExercise": "TherapeuticExercise", 
  "TherapeuticExerciseIntroduction": TherapeuticExerciseIntroduction,
  "TherapeuticExerciseTypes": TherapeuticExerciseTypes,
  "ScarManagement": "ScarManagement",
  "PainManagement": PainManagement,
  "Pressotherapy": Pressotherapy,
}

const Drawer = createDrawerNavigator();

const NavigationDrawer = () => {

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer drawerItems={drawerItems} {...props} />}
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#ebebeb",
        },
        drawerActiveBackgroundColor: "blue",
        drawerActiveTintColor: "white"
      }}
    >
      {
        drawerItems.map((item) => {
          return (
            <Drawer.Screen key={item.key} name={item.title} component={Map[item.key]} />
          )
        })
      }
    </Drawer.Navigator>
  )
}

export default NavigationDrawer