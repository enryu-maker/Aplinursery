import React, { Component } from 'react'
import { Text, StyleSheet, View, ImageBackground,TouchableOpacity,SafeAreaView,TextInput } from 'react-native'

export default class Registerscreen extends Component {
    constructor(props){
        super(props);
        this.state={
            phonenumber:''
        };
    }
   /* async register(phonenumber){
        try{
            

        }catch(error){
            alert('something went wrong')
        }
    }*/
    render() {
        return (
            <SafeAreaView style={styles.maincontainer}>
                <ImageBackground source={require('../assets/signup.png')} style={styles.imagecontainer}/>
                <View>
                    <SafeAreaView style={styles.headerline}>
                        <Text style={styles.header_line}>शेतकर्‍याकडून शेतकर्‍यांना</Text> 
                    </SafeAreaView>
                <View style={styles.inputholder}>
                    <TextInput style={styles.phone}
                        onChange={text=>this.setState({phonenumber:text})}
                        placeholder='Number/मोबाइल नंबर टाका'
                        returnKeyType='go'
                        placeholderTextColor="black"
                        keyboardType='number-pad'
                        />
                </View>
                <View style={styles.button}>
                    <TouchableOpacity
                        style={styles.signupbutton}
                        onPress={()=>{this.props.navigation.navigate('Login')}}>
                        <Text style={styles.btntext2}>Signup</Text>
                    </TouchableOpacity>

                </View>
                </View>
        </SafeAreaView>
        );
    }
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
    },
    headerline : {
        marginTop: '6%',
        backgroundColor:'#D8F0C0',
        borderRadius: 20,
        height:40,
        width: '85%',
        marginLeft : 12
    },
    header_line : {
        fontSize : 23,
        fontWeight : '400',
        textAlign : 'center',
    },
    inputholder : {
        justifyContent: 'flex-end',
        marginTop : '50%',
        padding: 10,
        width: '80%'
    },
    phone : {
        backgroundColor : '#609060',
        padding: 10,
        height: 45,
        borderRadius: 20,
        fontSize:18
    },
    button :{
        marginTop: 15,
        backgroundColor : '#487830',
        width : '25%',
        marginLeft : 12,
        height : 40,
        borderRadius : 20
    },
    signupbutton : {
        marginTop: 5,
        textAlign : 'center',
        textAlignVertical : 'center',
        fontSize : 25,
        fontWeight : '400'
    },
    btntext2 : {
        textAlign:'center',
        fontSize: 18,
        fontWeight: '400',
        textAlign:'center',
        textAlignVertical:'auto'
    }
})
