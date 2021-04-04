import React from 'react';
import { ImageBackground, SafeAreaView, StyleSheet, Text, View , TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {createAppContainer,createSwitchNavigator} from 'react-navigation'
//import Login from '../App';
export default function Registerscreen() {
 
    return (
        <View style={styles.maincontainer}>
            <ImageBackground source={require('../assets/signup.png')} style={styles.imagecontainer}/>
            <View>
            <SafeAreaView style={styles.headerline}>
                <Text style={styles.Text}>शेतकर्‍याकडून शेतकर्‍यांना</Text> 
            </SafeAreaView>
            <View style={styles.inputholder}>
            <TextInput style={styles.phone}
                placeholder='Number/मोबाइल नंबर टाका'
                returnKeyType='next'
                placeholderTextColor="black"
                keyboardType='number-pad'
                />
            <TextInput style={styles.username}
                placeholder=' Name/नाव टाका'
                returnKeyType='next'
                placeholderTextColor='black'
                />
            <TextInput style={styles.userpass}
                placeholder='password/पासवर्ड टाका'
                returnKeyType='go'
                placeholderTextColor='black'
                />
            </View>
            <View style={styles.button}>
                <TouchableOpacity
                    style={styles.signupbutton}
                    onPress={()=>alert('i m working')}
                >
                    <Text style={styles.btntext2}>Signup</Text>
                </TouchableOpacity>

            </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    maincontainer : {
        width: '100%',
        height: '100%',
    },
    imagecontainer : {
        position : 'absolute',
        width : '100%',
        height : '100%',
        //flex : 1
    },
    headerline : {
        marginTop: '6%',
        backgroundColor:'#D8F0C0',
        borderRadius: 15,
        height:33,
        width: '85%',
        marginLeft : 12
    },
    Text : {
 
        //marginLeft: '50%',
        fontSize : 23,
        fontWeight : '400',
        //textAlignVertical: 'auto',
        textAlign : 'center',
        //paddingTop : 10,
        
    },
    inputholder : {
        //backgroundColor : '#609060',
        justifyContent: 'flex-end',
        marginTop : '60%',
        //height: 40,
        padding: 10,
        width: '80%'
    },
    phone : {
        backgroundColor : '#609060',
        padding: 10,
        height: 35,
        borderRadius: 17.5
    },
    username : {
        marginTop : 10,
        backgroundColor : '#609060',
        padding: 10,
        height: 35,
        borderRadius: 17.5
    },
    userpass : {
        marginTop : 10,
        backgroundColor : '#609060',
        padding: 10,
        height: 35,
        borderRadius: 17.5
    },
    button :{
        marginTop: 15,
        backgroundColor : '#487830',
        width : '18%',
        marginLeft : 12,
        height : 30,
        borderRadius : 15
    },
    signupbutton : {
        marginTop: 5,
        textAlign : 'center',
        textAlignVertical : 'center',
        fontSize : 25,
        fontWeight : '400'
    }



})
