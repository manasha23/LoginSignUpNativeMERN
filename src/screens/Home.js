import React from 'react';
import {StyleSheet,Text, View, TouchableOpacity} from 'react-native';
import { button1 } from '../common/button.js';
import * as   ImagePicker from 'expo-image-picker';

const Home = ({
    navigation
}) => {

  return (
    <View style={styles.body}>
      <Text style={styles.title}>Home Page!</Text>
      <Text style={button1}
      onPress={()=>{
        navigation.navigate("login");
      }}
      >Logout</Text>
    </View>
  );
};


const styles=StyleSheet.create({
    body:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    },
    title:{
        fontSize:20,
        marginBottom:200
    },
    upload: {
      backgroundColor: 'grey', // Change the background color to your preferred color
      borderRadius: 10, 
      padding: 2,// Add rounded corners // Add padding around the button
      alignItems: 'center', // Center the content horizontally
      justifyContent: 'center',
      width: 50,
      marginBottom: 30
    },
    uploadText:{
      marginBottom: 10
    },
    addbutton:{
    color: 'white', // Change the text color to contrast with the background
    fontSize: 20, // Adjust the font size
    fontWeight: 'bold',  
    }

});
export default Home;