import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { useTheme } from '@/Hooks'

type Props = {
  height?: number | string
  width?: number | string
  mode?: 'contain' | 'cover' | 'stretch' | 'repeat' | 'center'
}

const Form = ({ height, width, mode }: Props) => {
  const { Layout, Images } = useTheme()

  return (
    <View style={styles.Container}>
      <Image style={Layout.fullSize} source={Images.logo} resizeMode={mode} />
    </View>
  )
}

Form.defaultProps = {
  height: 200,
  width: 200,
  mode: 'contain',
}
const styles = StyleSheet.create({
  Container: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
})

export default Form
