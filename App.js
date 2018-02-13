import React from 'react'
import { TabNavigator, StackNavigator } from 'react-navigation'
import HomeScreen from './src/HomeScreen'
import PhotosScreen from './src/PhotosScreen'
import TodoScreen from './src/TodoScreen'
import DetailsScreen from './src/DetailsScreen'
import PhotoItem from './src/PhotoItem';

const App = StackNavigator({

  Profile: {
    screen: TabNavigator({
      HomeScreen: { screen: HomeScreen },
      PhotosScreen: { screen: PhotosScreen },
      TodoScreen: { screen: TodoScreen }
    },
      {
        tabBarPosition: 'bottom',
        swipeEnabled: true,
        lazy: true, // Each screen will not mount/load until user clicks on them
        animationEnabled: true,
        tabBarOptions: {
          showIcon: true,
          iconStyle: {
            width: 20,
            height: 20
          },
          style: {
            backgroundColor: '#03A9F4'
          }
        }
      })
  },
  DetailsScreen: { screen: DetailsScreen },
  PhotoItem: { screen: PhotoItem }
}
)
export default App
