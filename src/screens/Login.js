import React, {useState} from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';
import { button1 } from '../common/button.js'

const Login = (
  { navigation }
) => {

  const [fdata,setFdata]=useState({
    email: '',password: ''
  });
  const [errormsg,setErrormsg]=useState(null);

  const Sendtobackend =() =>{
    //console.log(fdata)
    if(fdata.email==''||fdata.password==''){
      setErrormsg('All fields are required'); //Setting errormsg value
      return;
    }
    else{
      //This might change if we host 
      //http://: Specifies the protocol used for the request (HTTP).
      // 10.0.2.2: The IP address that points to the host machine from an Android emulator.
      // :3000: The port number on which your server is running. In this case, it's port 3000.
      // /signup: The endpoint on the server to which the POST request is being sent.
      fetch('http://10.0.2.2:3000/signin',{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(fdata)
      })
      .then(res=>res.json())
      .then(
        data=>{
          //console.log(data);
          if(data.error){
            setErrormsg(data.error);
          }
          else{
            alert('login successfully')
            navigation.navigate('home');
          }
        }
      )
    } 
  }
  return (
    <View style={styles.appContainer}>
    <View style={styles.heading}>
      <Text style={styles.title}>Login</Text>
      {
      errormsg ? <Text style={styles.errorstyle}>{errormsg}</Text> : null
      }
    </View> 
      <View style={styles.formgroup}>
        <Text style={styles.label}>Email:</Text>
        <TextInput style={styles.input}
        onPressIn={()=>setErrormsg(null)}
        onChangeText={(text)=>setFdata({...fdata,email: text})}
        />
      </View>
      <View style={styles.formgroup}>
        <Text style={styles.label}>Password:</Text>
        <TextInput style={styles.input}
        onPressIn={()=>setErrormsg(null)}
        secureTextEntry={true}
         onChangeText={(text)=>setFdata({...fdata,password: text})}
        />
      </View>
      <Text style={button1}
      onPress={() =>{
        Sendtobackend();
      }}
      >Login</Text>
    </View>
  );
};
export default Login;

const styles = StyleSheet.create({
    appContainer:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
      },
    heading:{
        margin: 40,
        textAlign: 'center',
    },
    title: {
        marginBottom: 20,
        fontSize: 20,
        textAlign: 'center'
    },
    label: {
        marginLeft: 10,
        marginBottom: 5
    },
    input: {
        borderColor: '#0000',
        width: 200,
        backgroundColor: '#ffb0cc',
        borderRadius: 20,
        padding: 5
    },
    errorstyle:{
      color:'white',
      fontSize: 15,
      textAlign: 'center',
      backgroundColor: '#F50057',
      padding: 5,
      borderRadius: 10,
    }
})
