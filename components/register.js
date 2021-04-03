import React from 'react';
import { ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {} from '@react-navigation/native'
//import Login from '../App';
export default class Register {
    render(){ 
    return (
        <View style={styles.maincontainer}>
            <ImageBackground source={require=('../assets/signup.png')}
            style={styles.imagebackground}/>
            <View>
            <SafeAreaView style={styles.headerline}>
                <Text style={styles.Text}>Something</Text> 
            </SafeAreaView>
            <View style={styles.inputholder}>
            <TextInput style={styles.phone}
                placeholder='Enter number'
                returnKeyType='next'
                placeholderTextColor="black"
                />
            <TextInput style={styles.name}
                placeholder='Enter NAME'
                returnKeyType='next'
                placeholderTextColor='black'
                />
            <TextInput style={styles.name}
                placeholder='Enter password'
                returnKeyType='next'
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
    );}
}

const styles = StyleSheet.create({
    maincontainer : {
        width: '100%',
        height: '100%',
    },
    imagebackground : {
        position : 'absolute',
        width : '100%',
        height : '100%',
        flex : 1
    },
    headerline : {
        flexDirection : 'row-reverse',
        height:30,
        backgroundColor:'#D8F0C0',
        //width: '50%',
        borderRadius: 15,

    },
    text : {
        fontSize : 26,
        fontWeight : '400',
        textAlignVertical: 'auto',
        textAlign : 'auto'
    },
    inputholder : {
        backgroundColor : '#609060',
        justifyContent: 'flex-end',
        marginTop : '50%',
        height: 40,
        padding: 10,
        width: '80%'
    },



})
