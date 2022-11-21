import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { imageStyle } from '../styles/Image'
import { textStyle } from '../styles/Text'


export const Card = (props) => {
    return (
        <View style={styles.container} title={props.title} description={props.description}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{props.title}</Text>
            </View>
            <View style={styles.photoContainer} > 
                <Image style={imageStyle.profile} source={props.image}></Image>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        shadowColor:'#52006A',
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 0.3,
        shadowRadius: 20,
        backgroundColor: 'white',
        width: 150,
        margin: 10,
        elevation: 4, 
        borderRadius: 5,
    },

    titleContainer: {
        paddingVertical: 10,
        paddingHorizontal: 5,
        flex: 1,
        backgroundColor: '#f8f8f8',
        borderRadius: 5,
    },

    photoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        maxHeight: 150
    },

    descriptionContainer: {
        margin: 3,
    },
    title:{
        fontWeight: 'bold',
        fontSize: 16,
        color: 'black',
        textAlign: 'center'
    }
    ,
    description: {
        color: 'black',
        textAlign: 'center'
    }
})
