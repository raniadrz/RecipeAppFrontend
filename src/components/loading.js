import React from 'react'
import { ActivityIndicator, View } from 'react-native'

export default function Loading(props) {
  return (
    <View className="flex-1 flex justify-center items-center">
      <ActivityIndicator {...props} />
    </View>
  )
}