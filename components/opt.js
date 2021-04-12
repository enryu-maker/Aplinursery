import React, { Component } from 'react'
import { Text, StyleSheet, View,KeyboardAvoidingView,TextInput ,TouchableOpacity} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { color } from 'react-native-reanimated'


export default class Otpscreen extends Component {
    constructor(props){
        super(props);
        this.state={
            otp=''
        }
    }
    verfyotp=()=>{

    }

    render() {
        return (
            <View style={styles.maincontainer}>
                <View style={styles.textcontainer}>
                    <Text style={style.text}>
                        Enter the OTP input
                    </Text>
                    <TextInput style={styles.inputcontiner}
                    placeholder='123456'
                    keyboardType='numeric'
                    onChange={text=>this.props.setState({otp:text})}>
                    </TextInput>
                    <TouchableOpacity
                    onPress={verfyotp}>
                        verify otp
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    maincontainer:{
        flex:1,
        backgroundColor:'#fff'
    },
    textcontainer:{
        flex:1,
        justifyContent:'center',
        alignSelf:'auto',
        color:'black'
    },
    text:{
        fontSize:25,
        fontWeight:'500',
        color:'green',
    }
})
