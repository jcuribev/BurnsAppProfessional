import { StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import YoutubeIframe from 'react-native-youtube-iframe'

export const YoutubePlayer = (props) => {

  return (
    <View style={styles.videoContainter}>
      <YoutubeIframe height={400} play={false} videoId={props.videoId} />
    </View>
  )
}

const styles = StyleSheet.create({
  videoContainter: {
    marginHorizontal: 20,
    marginVertical: 30
  }
})