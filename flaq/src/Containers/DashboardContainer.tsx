import React, { useState, useEffect } from 'react'
import {
  View,
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { Brand } from '@/Components'
import { useTheme } from '@/Hooks'
import { useLazyFetchOneQuery } from '@/Services/modules/users'
import { changeTheme, ThemeState } from '@/Store/Theme'
import { Button, Card } from '@rneui/base'

const DashboardContainer = () => {
  const { t } = useTranslation()
  const { Common, Fonts, Gutters, Layout } = useTheme()
  const dispatch = useDispatch()

  const [userId, setUserId] = useState('9')
  const [fetchOne, { data, isSuccess, isLoading, isFetching, error }] =
    useLazyFetchOneQuery()

  useEffect(() => {
    fetchOne(userId)
  }, [fetchOne, userId])

  const onChangeTheme = ({ theme, darkMode }: Partial<ThemeState>) => {
    dispatch(changeTheme({ theme, darkMode }))
  }

  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.explore}>explore flaq</Text>
        <Card containerStyle={styles.cardContainer}>
          <View style={styles.cardView}>
            <View style={{ height: 51 }}></View>
            <View>
              <Text style={styles.dive}>dive into web3</Text>
              <Text style={styles.learn}>
                learn about the evolution & relevance of web3
              </Text>
              <Text style={styles.learn}>relevance of web3</Text>
              <Button
                containerStyle={styles.buttonContainer}
                buttonStyle={styles.buttonStyle}
                titleStyle={styles.titleStyle}
                title={'get started'}
              />
            </View>
          </View>
        </Card>
      </View>

      <Card containerStyle={styles.cardContainer2}>
        <View style={styles.cardView}>
          <View style={{ height: 51 }}></View>
          <View>
            <Text style={styles.dive}>dive into web3</Text>
            <Text style={styles.learn}>
              learn about the evolution & relevance of web3
            </Text>
            <Text style={styles.learn}>relevance of web3</Text>
            <Button
              containerStyle={styles.buttonContainer}
              buttonStyle={styles.buttonStyle}
              titleStyle={styles.titleStyle}
              title={'get started'}
            />
          </View>
        </View>
      </Card>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
  },
  explore: {
    color: '#fff',
    marginTop: 21,
    marginLeft: 21,
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardContainer: {
    backgroundColor: '#4A25B3',
    borderColor: '#4A25B3',
    height: 210,
  },
  cardContainer2: {
    background: '#A40246',
    borderradius: '8px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '24px 20px',
    gap: '24px',
  },
  cardView: {
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  dive: {
    color: '#fff',
    marginTop: 3,
    fontSize: 24,
  },
  learn: {
    color: '#fff',
    marginTop: 3,
  },
  buttonContainer: {
    width: '42%',
    borderRadius: 6,
    marginTop: 21,
  },
  buttonStyle: {
    backgroundColor: '#fff',
  },
  titleStyle: {
    color: '#1A1A1A',
  },
  CardContainer2: {
    marginTop: '30px',
    marginBottom: '16px',
  },
  CourseText: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '500',
  },
})

export default DashboardContainer
