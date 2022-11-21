import { BackHandler, Image, SafeAreaView, ScrollView, StyleSheet, Text, Touchable, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import React, { Component, useState } from 'react'
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import { drawerItems } from './DrawerItemsMain';

const CustomDrawer = (props) => {

  const [pressedButton, setPressedButton] = useState(['']);
  const [activeItems, setActiveItems] = useState(props.drawerItems.filter((e) => {
    return e.parent === null
  }))

  const onItemPress = (item) => {
    setPressedButton(item.title)
    if (updateItems(item))
      props.navigation.navigate(item.title)
  }

  const updateItems = (item) => {

    const filteredItems = props.drawerItems.filter((e) => {
      return e.parent === item.key;
    });

    if (filteredItems.length !== 0) {
      setActiveItems(filteredItems)
      return false
    }
    return true
  }

  const returnToPreviousItem = (item) => {

    if (item.parent === null) {
      logOut()
    }
    else {
      resetItems()
    }
  }

  const resetItems = () => {
    const resetItems = props.drawerItems.filter((e) => {
      return e.parent === null
    })

    setActiveItems(resetItems)
  }

  const logOut = async () => BackHandler.exitApp();

  return (
    <ScrollView>
      <SafeAreaView
        forceInset={{ top: 'always', horizontal: 'never' }}>
        <View>
          <Image source={require("../resources/Images/logo.png")} style={styles.logo}
          />
        </View>
        <View style={styles.container}>
          {activeItems.map((parent) => (
            <TouchableHighlight underlayColor={"#dd7100"} style={pressedButton === parent.title ? styles.focusedButton : styles.button} onPress={() => onItemPress(parent)}>
              <Text style={styles.text}>{parent.title}</Text>
            </TouchableHighlight>
          ))}
          <TouchableHighlight underlayColor={"#dd7100"} style={styles.backButton} onPress={() => returnToPreviousItem(activeItems[0])}>
            <Text style={styles.text}>{activeItems[0].parent === null ? 'Salir' : 'Volver'}</Text>
          </TouchableHighlight>
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  logo: {
    width: 32,
    height: 32,
    marginLeft: 20,
    marginVertical: 15,
    resizeMode: 'contain'
  },
  container: {
    flex: 1,
    alignItems: 'flex-start',
    marginVertical: 10,
    display: 'flex',
    paddingHorizontal: 10
  },
  button: {
    padding: 15,
    borderRadius: 8,
    width: "100%",
    marginVertical: 2
  },
  focusedButton: {
    padding: 15,
    borderRadius: 8,
    width: "100%",
    marginVertical: 2,
    backgroundColor: '#e69138'
  },
  backButton: {
    padding: 15,
    borderRadius: 8,
    width: "100%",
    marginVertical: 2,
  
  },
  text: {
    color: 'black'
  }
})

export default CustomDrawer