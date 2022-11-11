import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet} from 'react-native';
import LandingPage from './Components/Landing';
import SignUp from './Components/SignUp';
import Home from './Components/Home';

const Tabs = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Tabs.Navigator screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor:"grey"
        }}>
          <Tabs.Screen name='landingPage' component={LandingPage}/>
          <Tabs.Screen name='Signup' component={SignUp}/>
          <Tabs.Screen name='Home' component={Home}/>
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100vh",
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// <View style={styles.container}>
//      <LandingPage/>
//     </View>