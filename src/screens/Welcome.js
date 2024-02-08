import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import React from 'react'
import { button1 } from '../common/button'
const Welcome = ({navigation}) => {
    return (
        <View style={styles.container}>
         {/* <Text style={styles.head}>Welcome</Text> */}
         <Text style={button1}
         onPress={()=>navigation.navigate('login')}
         >Login</Text>
         <Text style={button1}
        onPress={()=>navigation.navigate('signup')}
         >SignUp</Text>
        </View>
    )
}

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