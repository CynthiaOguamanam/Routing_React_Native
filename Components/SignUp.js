import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'


export default function SignUp({navigation}){

    const styled = StyleSheet.create({
        container:{
            backgroundColor: "white",
            width: "100%",
            height: "100vh",
            justifyContent: "center",
            alignItems: "center",
        },
        wrap:{
            backgroundColor: "#122965",
            width: 800,
            height: 600,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
            borderColor: "#1F47E6",
            shadowColor: "silver",
            shadowOffset: {width: 50, height: 40},
            shadowOpacity: 0.8,
            shadowRadius: 5,
        },
        input:{
        borderColor: "#1F47E6",
         marginBottom: 30,
         backgroundColor:"white",
        marginTop: 30,
        padding: 20,
        borderWidth: 1,
        width: 500,
        height: 50,
        borderRadius: 3,
        borderColor: "silver",
        shadowColor: "silver",
        shadowOffset: {width: 2, height: 2},
        shadowOpacity: 1,
        shadowRadius: 3,
        fontSize: 20,

        },
        but:{
            width: 200,
            height: 40,
            fontSize: 40,
            fontWeight: 400,
            borderColor:"#2D54D9",
            borderWidth: 1.5,
            borderRadius: 10,
            shadowColor: "white",
            shadowOffset:  {width: 4, height: 4},
            shadowOpacity: 0.8,
            shadowRadius: 5,
            borderRadius: 5,
            justifyContent:"center",
            alignItems: "center",
            margin: 20,
        },
        text:{
            color: "white",
            fontSize: 20,

        }
    })


    return(
        <View style={styled.container}>
            <View style={styled.wrap}>
            <TextInput style={styled.input} placeholder='Full Name'/>
            <TextInput style={styled.input} placeholder='optional: Middle Name'/>
            <TextInput style={styled.input} placeholder='Email'/>
            <TextInput style={styled.input} placeholder='Password'/>
            <TouchableOpacity style={styled.but} onPress={() =>{
                navigation.navigate('Home')
            }}>
                <Text style={styled.text}>Sign Up</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}