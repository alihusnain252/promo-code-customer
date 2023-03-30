import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { TopHeader } from '@components'

export const PromoDetails = () => {
  return (
    <View style={styles.promoContainer}>
      <TopHeader />
      <Text>Promo Details</Text>
    </View>
  )
}