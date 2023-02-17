import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';

// display splash screen for two seconds
SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);

// get images 
const art = require('./assets/art.png');
const mile = require('./assets/mile.png');
const pier = require('./assets/pier.png');
const water = require('./assets/water.png');
const willis = require('./assets/willis.png');

// create the screens
function ArtInstitute() {
  return (
    <View style={styles.container} >
      <Image source={art} style={styles.image} />
    </View>
  );
}

function MagnificentMile() {
  return (
    <View style={styles.container} >
      <Image source={mile} style={styles.image} />
    </View>
    );
}

function NavyPier() {
  return (
    <View style={styles.container} >
      <Image source={pier} style={styles.image} />
    </View>
    );
}

function WaterTower() {
  return (
    <View style={styles.container} >
      <Image source={water} style={styles.image} />
    </View>
    );
}

function WillisTower() {
  return (
    <View style={styles.container} >
      <Image source={willis} style={styles.image} />
    </View>
    );
}

// create DrawerNavigator object
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Art Institute of Chicago">
        <Drawer.Screen name="Art Institute of Chicago" component={ArtInstitute} />
        <Drawer.Screen name="Magnificent Mile" component={MagnificentMile} />
        <Drawer.Screen name="Navy Pier" component={NavyPier} />
        <Drawer.Screen name="Water Tower" component={WaterTower} />
        <Drawer.Screen name="Willis Tower" component={WillisTower} />
      </Drawer.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 480,
    width: 320,
  }
});
