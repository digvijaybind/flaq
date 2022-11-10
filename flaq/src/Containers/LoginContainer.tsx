import { Button } from '@rneui/base'
import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
// import { useDispatch } from 'react-redux'
// import { useTranslation } from 'react-i18next'

// import { useTheme } from '@/Hooks'
// import { useLazyFetchOneQuery } from '@/Services/modules/users'
// import { changeTheme, ThemeState } from '@/Store/Theme'

const LoginContainer = () => {
  // const { t } = useTranslation()
  // const { Common, Fonts, Gutters, Layout } = useTheme()
  // const dispatch = useDispatch()

  // const [userId, setUserId] = useState('9')
  // const [fetchOne, { data, isSuccess, isLoading, isFetching, error }] =
  // useLazyFetchOneQuery()

  // useEffect(() => {
  //   fetchOne(userId)
  // }, [fetchOne, userId])

  // const onChangeTheme = ({ theme, darkMode }: Partial<ThemeState>) => {
  //   dispatch(changeTheme({ theme, darkMode }))
  // }

  return (
    // <ScrollView
    //   style={Layout.fill}
    //   contentContainerStyle={[
    //     Layout.fill,
    //     Layout.colCenter,
    //     Gutters.smallHPadding,
    //   ]}
    // >
    <View style={styles.conatiner}>
      <Text style={styles.loginText}> login to flaq</Text>
      <Text style={styles.credText}> enter your credentials</Text>
      <TextInput
        placeholder="email"
        placeholderTextColor={'#9999A5'}
        style={styles.textinput}
      />
      <TextInput
        placeholder="password"
        placeholderTextColor={'#9999A5'}
        style={styles.textinput}
      />
      <Text style={styles.password}>
        Passwords must be at least 8 characters in length
      </Text>
      <Button
        title={'log in'}
        containerStyle={styles.buttonContainer}
        buttonStyle={styles.buttonStyles}
        titleStyle={styles.titlebuttonStyles}
      />
      <Text style={styles.newUser}>new user? Sign up</Text>
      <Text style={styles.sign}>
        By signing up you agree to our
        <Text style={styles.terms}>
          Terms of use, Privacy policy, Information Collection
        </Text>
        , and that you are over 18 years old
      </Text>
    </View>
    // </ScrollView>
  )
}

const styles = StyleSheet.create({
  conatiner: {
    backgroundColor: 'black',
    flex: 1,
    justifyContent: 'space-around',
  },
  loginText: {
    color: '#fff',
    marginTop: 51,
    fontSize: 20,
    marginLeft: 21,
    fontWeight: 'bold',
  },
  credText: {
    color: '#fff',
    marginTop: 9,
    fontSize: 12,
    marginLeft: 21,
  },
  textinput: {
    marginTop: 21,
    borderColor: '#9999A5',
    borderWidth: 1,
    padding: 15,
    borderRadius: 9,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#1A1A1A',
  },
  password: {
    color: '#fff',
    marginTop: 9,
    fontSize: 12,
    marginLeft: 21,
  },
  buttonContainer: {
    backgroundColor: '#fff',
    marginTop: 21,
  },
  buttonStyles: {
    backgroundColor: '#fff',
    padding: 9,
  },
  titlebuttonStyles: {
    color: '#3D3D3D',
    margin: 6,
  },
  newUser: {
    color: '#9999A5',
    alignSelf: 'center',
    marginTop: 21,
    fontWeight: '700',
    fontSize: 12,
  },
  sign: {
    color: '#F7F7F7',
  },
  terms: {
    color: '#6F6CD9',
    textDecorationLine: 'underline',
  },
})

export default LoginContainer
