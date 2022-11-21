import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import { drawerItems, drawerSubItems } from './DrawerItemsMain';
import CustomDrawer from './CustomDrawer';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Introduction } from '../pages/Introduction';
import About from '../pages/About';
import References from '../pages/References';
import PagesOfInterest from '../pages/PagesOfInterest';
import Examination from '../pages/Examination';
import TherapeuticIntroduction from '../pages/intervention/therapeutic_exercise/TherapeuticIntroduction';
import StrengtheningExercises from '../pages/intervention/therapeutic_exercise/StrengtheningExercises';
import Stretching from '../pages/intervention/therapeutic_exercise/Stretching';
import Techniques from '../pages/intervention/scar_management/Techniques';
import Pressotherapy from '../pages/intervention/scar_management/Pressotherapy';
import Physicalmeans from '../pages/intervention/pain_management/Physicalmeans';
import VirtualReality from '../pages/intervention/pain_management/VirtualReality';
import Electrotherapy from '../pages/intervention/pain_management/Electrotherapy';
import CausesOfBurns from '../pages/home/CausesOfBurns';
import Definition from '../pages/home/Definition';
import Clasification from '../pages/home/Clasification';
import Home from '../pages/Home';

const Map = {
  "Home": Home,
  "Examination": Examination,
  "Intervention": "Intervention",
  "References": References,
  "PagesOfInterest": PagesOfInterest,
  "About": About,
  "Introduction": Introduction,
  "Definition": Definition,
  "Clasification": Clasification,
  "CausesOfBurns": CausesOfBurns,
  "TherapeuticExercise": "TherapeuticExercise",
  "ScarManagement": "ScarManagement",
  "PainManagement": "PainManagement",
  "TherapeuticIntroduction": TherapeuticIntroduction,
  "StrengtheningExercises": StrengtheningExercises,
  "Stretching": Stretching,
  "Techniques": Techniques,
  "Pressotherapy": Pressotherapy,
  "PhysicalMeans": Physicalmeans,
  "VirtualReality": VirtualReality,
  "Electrotherapy": Electrotherapy
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
    </Drawer.Navigator >
  )
}

export default NavigationDrawer