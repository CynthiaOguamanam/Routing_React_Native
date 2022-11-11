import {View,StyleSheet,TouchableOpacity,Image, Text} from 'react-native'
import logo from '../assets/2.png'

const styled = StyleSheet.create({
    container:{
    width: "100%",
    height: "100vh",
    // flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    },
    header:{
        width: "90%",
        height: 80,
        // backgroundColor: "#0D47A1",
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
    },
    navsHold:{
        width: 800,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // backgroundColor: "grey"
    },
    navs:{
        fontSize: 20,
        fontWeight: 600,
        color: "silver",
    },
    logoHold:{
        // flex: 1,k
        width: 100,
        height: 60,
        flexDirection: "row",
        justifyContent: "center",
        alignItems:"center",
        // backgroundColor: "red",
    },
    logo:{
        width: 80,
        height: 50,
        resizeMode: 'cover'
    },
    butHold:{
        width: 200,
        // height: 20,
        paddingBottom: 5,
        paddingTop: 5,
        borderColor: "#1F47E6",
        borderWidth: 1.5,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "center",
        alignItems:"center",
        shadowColor: "white",
        shadowOffset:  {width: 4, height: 4},
        shadowOpacity: 0.5,
        shadowRadius: 3
    },
    herosection:{
        flexDirection: "row",
        justifyContent:"space-between",
        width: "90%",
        // backgroundColor:"#2196F3",
        height: 700,
        // shadowColor: "white",
        // shadowOffset:  {width: 10, height: 10},
        // shadowOpacity: 0.5,
        // shadowRadius: 5,
        // borderRadius: 5,
        // margin: 10,
        
    },
    h1:{
        fontSize: 90,
        fontWeight: 600,
        color: "white",
        marginBottom: 5,
    },
    h3:{
        fontSize: 40,
        fontWeight: 500,
        color: "silver",
        marginBottom: 25,

    },
    h6:{
        fontSize: 30,
        fontWeight: 400,
        color: "silver",
        marginBottom: 30,
        // borderColor:"silver",
        // borderWidth: 1.5,
        // borderRadius: 10,
    },
    but:{
        width: 200,
        fontSize: 30,
        fontWeight: 400,
        color: "silver",
        borderColor:"#2D54D9",
        borderWidth: 1.5,
        borderRadius: 10,
        shadowColor: "white",
        shadowOffset:  {width: 8, height: 8},
        shadowOpacity: 0.8,
        shadowRadius: 5,
        borderRadius: 5,
        justifyContent:"center",
        alignItems: "center",
        margin: 20,
    },
    textHold:{
        flexDirection: "column",
        width: "45%",
        // backgroundColor: "pink",
        justifyContent: "center",
        margin: 20,
    },
    hero:{
        width: 600,
        height: 400,
        marginRight: 20,
        shadowColor: "silver",
        shadowOffset:  {width: 10, height: 20},
        shadowOpacity: 0.5,
        shadowRadius: 3,
        borderRadius: 5,
    },
    heroHold:{
        width: 600,
        height: 500,
        // backgroundColor:"pink",
        marginTop: 80,
        marginRight: 100,
        justifyContent: "center",
        alignItems: "center",
        resizeMode: "contain",

    }
})

export default function LandingPage({navigation}){
    return(
        <View style={styled.container}>
            <View style={styled.header}>
                <View style={styled.logoHold}>
                <Image style={styled.logo} source={logo}/>
                </View>
            <View style={styled.navsHold}>
            <Text style={styled.navs}>Home</Text>
            <Text style={styled.navs}>About</Text>
            <Text style={styled.navs}>Services</Text>
            <Text style={styled.navs}>Community</Text>
            </View>
            <TouchableOpacity onPress={() => {
                navigation.navigate("Signup")
            }} style={styled.butHold}>
                <Text style={styled.navs}>Sign Up</Text>
            </TouchableOpacity>
            </View>
            <View style={styled.herosection}>
                <View style={styled.textHold}>
                <Text style={styled.h1}>EXPLORE</Text>
                <Text style={styled.h3}>THE WORLD</Text>
                <Text style={styled.h6}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel nulla at lorem interdum varius id et lacus. Aliquam erat volutpat. Donec ultricies nibh consequat orci iaculis efficitur. Phasellus luctus lectus eu lacus faucibus, ac sodales libero bibendum. </Text>
                <TouchableOpacity onPress={() =>{
                    navigation.navigate("Signup")
                }} style={styled.but}>EXPLORE</TouchableOpacity>
                </View>
                <View style={styled.heroHold}>
                    <Image source={logo} style={styled.hero}/>
                </View>
            </View>
        </View>
    )
}