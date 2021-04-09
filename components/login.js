import React, { Component } from 'react'
import { Text, StyleSheet, View, ImageBackground,TextInput,TouchableOpacity,Alert ,SafeAreaView, KeyboardAvoidingView} from 'react-native'

export default class Loginscreen extends Component {
    constructor(props){
        super(props);
        this.state={
            phonenumber:'',
            otp_dialogue:false
        };
    }
    /*async login(phonenumber){
        try{

        }catch(error){
            alert('Mobile Number not registered')
        }
    }*/
    render() {
        return (

            <View style={styles.maincontainer}>
                
               <ImageBackground source={require('../assets/main.jpg')} style={styles.imagecontainer}/>
                <View style={styles.title}>
                    <Text style={styles.text}>आपली Nursery</Text>
                </View>
                
                <View style={styles.dataconatiner}>
                
                    <TextInput style={styles.phone}
                    placeholder='Number/मोबाइल नंबर टाका'
                    keyboardType='number-pad'
                    returnKeyType='go'
                    placeholderTextColor="black"
                    onChangeText={text => this.setState({phonenumber:text})}
                    />
                    
                    <View style={styles.mainbutton}>
                        <TouchableOpacity
                        style={styles.loginbutton}
                        onPress={()=>this.props.navigation.navigate('Home')}>
                            <Text style={styles.btntext2}>sendOTP</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                        style={styles.signupbutton}
                        onPress={()=>{this.props.navigation.navigate('Signup');}}
                        ><Text style={styles.btntext2}>Signup</Text></TouchableOpacity>
                    </View>
                    
                </View>
                
                
            </View> 
            
            
            
        );
    }
}

const styles = StyleSheet.create({
    maincontainer: {
        width:'100%',
        height:'100%',
    },
    title: {
        justifyContent:'flex-end',
        top:30,
        height:40,
        backgroundColor:'#D8F0C0',
        width: '50%',
        borderRadius: 20,
        padding:10,
        marginLeft:23
    },
    text: {
        top:2,
        flexDirection: 'row',
        fontSize: 20,
        fontWeight:'500',
        textAlign:'center',
        textAlignVertical:'center'
    },
    imagecontainer: {
        position: 'absolute',
        width:'100%',
        height:'100%',
        position: 'absolute'
    },
    dataconatiner: {
        alignItems:'center',
        marginTop: '50%',
        height: 40,
        padding: 10,
        position: 'relative'
    },
    phone: {
        width:'90%',
        backgroundColor: '#609060', 
        alignItems:'center',
        justifyContent:'center',
        padding: 10,
        borderRadius: 20,
        height: 45,
        fontSize:18,
        position: 'relative'
    },
    mainbutton: {
        marginTop: 12,
        marginLeft: '-1%',
        height:30,
        flexDirection: 'row',
        justifyContent:'space-evenly',
        padding:10,
        position: 'relative'
    },
    loginbutton: {
        backgroundColor:'#487830',
        height:40,
        borderRadius: 20,
        padding:10,
        width:'35%',
        
    },
    signupbutton: {
        backgroundColor:'#487830',
        height:40,
        borderRadius: 20,
        marginLeft: 12,
        padding:10,
        width:'35%',
        
    },
    btntext2: {
        textAlign:'center',
        fontSize: 18,
        fontWeight: '400',
        textAlign:'center',
        textAlignVertical:'auto'
    }

})

   