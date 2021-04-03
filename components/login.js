import React,{ Component } from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View,ImageBackground, TextInput, TouchableOpacity , SafeAreaView, } from 'react-native';
import Homescreen from './home';
import Register from './register'
import {createAppContainer,createSwitchNavigator} from 'react-navigation'
function Loginscreen(){
        return (
            
            <View style={styles.maincontainer}>
               <ImageBackground source={require('../assets/main.jpg')} style={styles.imagecontainer}/>
                <View style={styles.title}>
                <Text style={styles.text}>आपली Nursery</Text>
                </View>
                <View style={styles.dataconatiner}>

                <TextInput style={styles.phone}
                placeholder='phone number'
                //keyboardType='number-pad'
                returnKeyType='next'
                placeholderTextColor="black"
                //onChangeText={(number) => setnumber(email)}
                />
                <TextInput style={styles.password}
                placeholder='password'
                returnKeyType='go'
                secureTextEntry={true}
                placeholderTextColor="black"
                //onChangeText={(password) => setPassword(password)}
                />
                <View style={styles.mainbutton}>
                    <TouchableOpacity
                    style={styles.loginbutton}
                    onPress={()=>alert('i m working')}
                    >
                        <Text style={styles.btntext2}>login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.signupbutton}
                    onPress={()=>this.props.navigation.navigate(Home)}
                    ><Text style={styles.btntext2}>Signup</Text></TouchableOpacity>
                    </View>
                </View>
            </View>
        )

    }


const styles = StyleSheet.create({
    maincontainer: {
        width:'100%',
        height:'100%',
        //justifyContent:'center',
        //alignItems:'center'
    },
    title: {
        //flexDirection: 'row',
        justifyContent:'flex-end',
        //alignItems:'center',
        //height:'12%',
        top:40,
        height:40,
        backgroundColor:'#D8F0C0',
        width: '50%',
        borderRadius: 20,
        //padding:8,
        //justifyContent:'flex-end'
        
        
    },
    text: {
        flexDirection: 'row',
        fontSize: 23,
        fontWeight:'500',
        //padding: 8,
        //backgroundColor:'#D8F0C0',
        textAlign:'center',
        
        //padding:8
    },
    imagecontainer: {
        position: 'absolute',
        width:'100%',
        height:'100%',
        position: 'absolute'
    },
    dataconatiner: {
        alignItems:'center',
        marginTop: '60%',
        height: 40,
        padding: 10
    },
    phone: {
        width:'90%',
        backgroundColor: '#609060', 
        fontSize: 23,
        alignItems:'center',
        justifyContent:'center',
        padding: 10,
        borderRadius: 20,
        height: 45
    },
    password: {
        marginTop: '45%',
        width:'90%',
        backgroundColor: '#609060', 
        fontSize: 23,
        alignItems:'center',
        marginTop: 12,
        justifyContent:'center',
        padding: 10,
        borderRadius: 20,
        height: 44
    },
    mainbutton: {
        marginTop: 12,
        marginLeft: '-1%',
        //padding:10,
        height:30,
        flexDirection: 'row',
        justifyContent:'space-evenly'
    },
    loginbutton: {
        backgroundColor:'#487830',
        height:40,
        borderRadius: 20,
        padding:10,
        width:'35%',
        //position: 'relative'
        //alignItems:'baseline',
        //justifyContent:'space-between'
    },
    signupbutton: {
        backgroundColor:'#487830',
        height:40,
        borderRadius: 20,
        marginLeft: 12,
        padding:10,
        width:'35%',
        //position: 'relative'
        //alignItems:'baseline',
        //ustifyContent:'flex-end'
    },
    btntext2: {
        textAlign:'center',
        fontSize: 18,
        fontWeight: '400'
    }
    
})
const AppNavigator = createSwitchNavigator({
    Login: {
      screen: Loginscreen
    },
    Home: {
      screen: Homescreen
    }
  });
  
  const AppContainer = createAppContainer(AppNavigator);
export default Loginscreen;