import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import { button1 } from '../common/button';
import { createDrawerNavigator } from '@react-navigation/drawer';


const Drawer=createDrawerNavigator();

const Welcome = ({navigation}) =>{
return (
        <Drawer.Navigator initialRouteName='Welcome'>
            <Drawer.Screen name="Welcome" component={WelcomeScreen}/>
            <Drawer.Screen name="Settings" component={SettingsScreen}/>
            <Drawer.Screen name="About" component={AboutScreen}/>
        </Drawer.Navigator> 
)}



const WelcomeScreen = ({navigation}) => {
return (
        <View style={styles.container}>
         {/* <Text style={styles.head}>Welcome</Text> */}
         <Text style={button1} onPress={()=>navigation.navigate('login')}>Login</Text>
         <Text style={button1} onPress={()=>navigation.navigate('signup')}>SignUp</Text>
        </View>
    )
}

const SettingsScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.head}>Settings Screen</Text>
        </View>
    );
}

const AboutScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.head}>About Screen</Text>
        </View>
    );
}


// const ListScreen = ({ navigation }) => {
//     return (
//       <View style={styles.container}>
//         <Text>List Screen</Text>
//       </View>
//     );
//   };
  
//   const TabNavigator = () => {
//     return (
//       <Tab.Navigator>
//         <Tab.Screen name="List" component={ListScreen} />
//       </Tab.Navigator>
//     );
//   };

export default Welcome
//style={styles.title}
// <View style={styles.container}>
const styles=StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        
        // backgroundColor: '#abcdef',  // Set a background color different from the text color
    },
    head: {
        fontSize: 30,
        color: 'black',
    }
  });