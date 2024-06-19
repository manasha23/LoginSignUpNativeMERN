import React from 'react';
import {StyleSheet,Text, View, TouchableOpacity} from 'react-native';
import { button1 } from '../common/button.js';
import * as   ImagePicker from 'expo-image-picker';

const Home = ({
    navigation, route
}) => {

const userData=route.param?.userData;
const [image,setImage]=React.useState(null);
const [errormsg, setErrormsg]=React.useState(null);

const handleImageUpload = async () => {
  //This launches he camera and the specifies the required ascepts
  let result=await ImagePicker.launchCameraAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
   
  });

  //If the user doesn't cancels it will send the image to the backend
  if(!result.canceled){
    //In the context of expo-image-picker, uri refers to the location or path of the image file captured by the camera or selected from the device's photo library.
    setImage(result.uri);
    const formData = new FormData();
    formData.append('image',{
      uri:result,
      type: 'image/jpeg',
      name: 'image.jpg',
    });

    fetch('http://10.0.2.2:3000/upload',{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data',
      },
      body: formData,
    })
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data);
    })
    .catch((error)=>{
      console.error(error);
      setErrormsg('An error occurred while uploading image');
    })

     
    }

  }


  return (
    <View style={styles.body}>
      <Text style={styles.title}>Home Page!</Text>
      <Text>{userData.name}</Text>
      <Text>{userData.email}</Text>

      <Text style={styles.uploadText}>Image Upload</Text>
         <TouchableOpacity style={styles.upload} onPress={handleImageUpload}>
            <Text style={styles.addbutton}>+</Text>
         </TouchableOpacity>
         {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      <Text style={button1} onPress={()=>{navigation.navigate("login");}}>Logout</Text>
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