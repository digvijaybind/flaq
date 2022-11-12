import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ImageBackground,
  Image,
} from 'react-native'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import { useLazyFetchOneQuery } from '@/Services/modules/users'
import { changeTheme, ThemeState } from '@/Store/Theme'
import { Button, Card } from '@rneui/base'
import { ImagesAssets } from '../Assets/customImage'

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
      <Text style={styles.explore}>explore flaq</Text>
      <View style={styles.InternalContainer}>
        <ImageBackground
          source={ImagesAssets.bannerList1}
          resizeMode="cover"
          style={styles.image}
        >
          <Text>testdfvbnkiuy</Text>
        </ImageBackground>
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

        <Text style={styles.CourseText}>course structure</Text>

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

        <Card containerStyle={styles.cardContainer3}>
          <View></View>
          <View style={styles.TextMang}>
            <Text style={styles.flaqcss}>flaq roadmap</Text>
            <Text style={styles.learn}>
              learn about what have coming in the next weeks
            </Text>
          </View>
        </Card>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
  },
  InternalContainer: {
    marginTop: 24,
    marginBottom: 24,
    marginLeft: 24,
    marginRight: 24,
  },
  explore: {
    color: '#fff',

    fontSize: 18,
    fontWeight: 'bold',

    fontFamily: 'Montserrat',
    fontStyle: 'normal',

    display: 'flex',
    alignItems: 'center',
    marginTop: 90,
    marginBottom: 24,
    marginLeft: 24,
  },
  cardContainer: {
    backgroundColor: '#4A25B3',
    borderColor: '#4A25B3',
    height: 210,
    borderRadius: 12,
  },
  cardContainer2: {
    backgroundColor: '#A40246',

    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    // padding: '24px 20px',
    // gap: '24px',
  },
  TextStructure: {},
  Commontext: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '500',
    fontsize: '20',

    /* identical to box height, or 24px */

    display: 'flex',

    alignitems: 'center',
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
    color: '#fff',
    marginTop: 20,
    marginBottom: 16,
    fontSize: 24,
  },
  cardContainer3: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 326,
    height: 114,
    backgroundColor: '#A40246',

    borderRadius: 8,
  },
  Imageicon: {
    width: 50,
    height: 50,
  },
  TextMang: {
    flexDirection: 'column',
  },
  flaqcss: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontSize: 16,
    color: '#FFFFFF',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    height: 100,
  },
})

export default DashboardContainer
