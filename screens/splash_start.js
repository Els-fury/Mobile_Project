import React from 'react'
import { StyleSheet, Text, View , Image, TouchableOpacity, ImageBackground} from 'react-native'

const splash_start = ({navigation}) => {
    return (
        <ImageBackground style={styles.imageBackground} source={require("./../assets/welcome backdropjpg.jpg")}>
            <View style={styles.container}>
                <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate("Login")}>
                    <Text style={styles.loginText}>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.signBtn} onPress={() => navigation.navigate("Signup")}>
                    <Text style={styles.loginText}>SIGN UP</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

export default splash_start

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'flex-end',
        width: '100%'
    },
    welcomeText: {
        fontStyle: "italic",    
        position: "relative",
        marginBottom: 20,
        justifyContent: "center",
        alignItems: "center",
        fontSize: 36,
}, 
imageBackground: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
},

image: {
width: 250,
height: 320,
},

loginBtn: {
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#66b2ff",
    margin: 20,
  },

  signBtn: {
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#66b2ff",
    margin: 20,
    marginTop: 10,
    marginBottom: 40,
  },
})