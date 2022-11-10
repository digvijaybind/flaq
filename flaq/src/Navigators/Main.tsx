import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { DashboardContainer, ExampleContainer } from '@/Containers'

const Tab = createBottomTabNavigator()

// @refresh reset
const MainNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        activeTintColor: '#fff',
        inactiveTintColor: 'lightgray',
        activeBackgroundColor: '#1A1A1A',
        inactiveBackgroundColor: '#1A1A1A',
        showLabel: false,
        style: {
          backgroundColor: '#1A1A1A',
          paddingBottom: 3,
        },
      }}
    >
      <Tab.Screen name="Home" component={DashboardContainer} />
      <Tab.Screen
        name="Books"
        component={ExampleContainer}
        options={{
          tabBarIconStyle: { color: '#fff' },
          tabBarLabelPosition: 'beside-icon',
        }}
      />
      <Tab.Screen
        name="User"
        component={ExampleContainer}
        options={{
          tabBarIconStyle: { color: '#fff' },
          tabBarLabelPosition: 'beside-icon',
        }}
      />
    </Tab.Navigator>
  )
}

export default MainNavigator
