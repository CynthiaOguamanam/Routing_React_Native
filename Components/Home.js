import {View,Image,ScrollView , Text, StyleSheet, TouchableOpacity} from 'react-native'
import logo from '../assets/2.png'
import data from './data.json'

export default function Home({navigation}){

    const styled = StyleSheet.create({
        container:{
            width: "100%",
            height: "100vh",
            flexDirection: "column",
            backgroundColor:"#0F2590",
            justifyContent: "center",
            alignItems: "center",
        },
        header:{
            width: "80%",
            height: 80,
            borderRadius: 10,
            // color:"black",
            backgroundColor: "white",
            flexDirection: 'row',
            justifyContent: "space-between",
            alignItems: 'center',
        },
        navsHold:{
            width: 800,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            // backgroundColor: "grey",
            marginRight: 30,
        },
        navs:{
            fontSize: 20,
            fontWeight: 600,
            color: "black",
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
        buttext:{
            fontSize: 20,
            fontWeight: 600,
        },
        
        but:{
            width: 200,
            height: 40,
            fontWeight: 400,
            borderColor:"#2D54D9",
            borderWidth: 1.5,
            borderRadius: 10,
            shadowColor: "black",
            shadowOffset:  {width: 4, height: 4},
            shadowOpacity: 0.8,
            shadowRadius: 5,
            borderRadius: 5,
            justifyContent:"center",
            alignItems: "center",
            margin: 20,
        },
        image:{
            width: 800,
            height: 600,
            borderRadius: 10,
        },
        title:{
            color: "white",
        },
        scroll:{
            flexDirection:"row",
            justifyContent:"center",
            alignItems:"center",
        },
        dash:{
            fontSize: 30,
            fontWeight: 600,
            color: "white",

        }
       
    })

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
            <TouchableOpacity style={styled.but} onPress={() =>{
                navigation.navigate('landingPage')
            }}>
                <Text style={styled.buttext}>Sign Out</Text>
            </TouchableOpacity>
            </View>
            </View>
            <ScrollView>
            <View>
                <Text style={styled.dash}>DashBoard</Text>
                <View style={styled.scroll}>
                    <ScrollView>
                    {
                data?.map(({id, image, title}) => (
                    <View key={id}>
                        <Text style={styled.title}>{title}</Text>
                          <Image source={{
                    uri: image
                }} style={styled.image}/>
                    </View>
                ))
            }
                    </ScrollView>
                </View>
            </View>
            </ScrollView>

        </View>
    )
}