import React, {useState} from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';
import { button1 } from '../common/button.js'

const Signup = ({
  navigation
}) => {
   //hook to store values
  const [fdata,setFdata] = useState({
    name: '',email: '',password: '',dob: ''
  });
  //hook for error message
  const [errormsg, setErrormsg]=useState(null); //Initial when you load the page there shouldn't be errors

  const Sendtobackend =() =>{
    //console.log(fdata)
    if(fdata.name==''|| fdata.email==''||fdata.password==''||fdata.dob==''){
      setErrormsg('All fields are required'); //Setting errormsg value
      return;
    }
    else{
      //This might change if we host 
      //http://: Specifies the protocol used for the request (HTTP).
      // 10.0.2.2: The IP address that points to the host machine from an Android emulator.
      // :3000: The port number on which your server is running. In this case, it's port 3000.
      // /signup: The endpoint on the server to which the POST request is being sent.
      fetch('http://10.0.2.2:3000/signup',{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(fdata)
      })//To target signup route in local server, next parameter used to specify the data to send
      .then(res=>res.json())
      

      //: The second then block is then used to handle the JSON data retrieved from the response. 
      .then(data=>{
          if(data.error){
            setErrormsg(data.error);
          }else{
            alert('Account Created successfully');
            navigation.navigate('login');
          }
        }
      )
    }
}   
  
    

  return (
    <View style={styles.appContainer}>
    <View style={styles.s1}>
    <View style={styles.s2}>
      <Text style={styles.title}>Create a new Account</Text>
    </View> 
    {/* If there is any error, errormsg is not null */}
    {
      errormsg ? <Text style={styles.errorstyle}>{errormsg}</Text> : null
    }
      <View style={styles.formgroup}>
        <Text style={styles.label}>Name:</Text>
        <TextInput style={styles.input}
          onPressIn={()=>setErrormsg(null)}
          onChangeText={(text)=> setFdata({...fdata,name: text})} //When user inputs the name it must be updated in fdata name variable
        />
      </View>
      <View style={styles.formgroup}>
        <Text style={styles.label}>Email:</Text>
        <TextInput style={styles.input}
          onChangeText={(text)=>setFdata({...fdata,email: text})} //for email
        />
      </View>
      <View style={styles.formgroup}>
        <Text style={styles.label}>DOB:</Text>
        <TextInput style={styles.input}
         onChangeText={(text)=>setFdata({...fdata,dob: text})}
        />
      </View>
      <View style={styles.formgroup}>
        <Text style={styles.label}>Password  :</Text>
        <TextInput style={styles.input}
        secureTextEntry={true}//a prop to securing the password
        onChangeText={(text)=>setFdata({...fdata,password: text})}
        />
      </View>
      <Text style={button1}
      //Can add TouchableOpacity if the button is not working at first go
      onPress={() =>{
        Sendtobackend();
      }}
      >SignUp</Text>
    </View>
    </View>
  );
};
export default Signup;

const styles = StyleSheet.create({
    appContainer:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
      },
    s1:{
        margin: 40,
        textAlign: 'center',
        height: '90%'
    },
    s2:{
        height: '10%'
    },
    title: {
        fontSize: 20,
    },
    label: {
        marginLeft: 10,
        marginTop: 20,
        marginBottom: 5
    },
    input: {
        borderColor: '#0000',
        backgroundColor: '#808080',
        borderRadius: 20,
        padding: 5,
        width:200
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
