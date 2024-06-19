import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';//The NavigationContainer is responsible for managing your app state and linking your top-level navigator to the app environment.
//onPress={()=>navigation.navigate('Login')} Can be used to navigate using buttons
import { createNativeStackNavigator } from '@react-navigation/native-stack';//Native Stack Navigator provides a way for your app to transition between screens where each new screen is placed on top of a stack.
import Welcome  from './src/screens/Welcome.js'
import Signup  from './src/screens/Signup.js'
import Login  from './src/screens/Login.js'
import Home from './src/screens/Home.js';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab=createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Welcome} options={{headerShown:false, tabBarIcon: null}}/>
      <Tab.Screen name="Feed" component={Welcome} options={{headerShown:false, tabBarIcon: null}}/>
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <View style={styles.appContainer}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Welcome" component={HomeTabs} options={{headerShown:false}}/>
          <Stack.Screen name="login" component={Login}/>
          {/* Stack.Screen name="login" must match the name which is mentioned in the onPress */}
          <Stack.Screen name="signup" component={Signup}/>
          {/* We can also hide the name if we want to */}
          <Stack.Screen name="home" component={Home} options={{headerShown:false}}/>
        </Stack.Navigator>
      </NavigationContainer>
      {/* <Login /> */}
      {/* {<Signup />} */}
    </View>
  );
};

const Stack = createNativeStackNavigator();

export default App;

const styles=StyleSheet.create({
  appContainer:{
    flex:1,
  },
})


