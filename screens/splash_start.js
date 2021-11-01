import React from 'react'
import { StyleSheet, Text, View , Image, TouchableOpacity} from 'react-native'

const splash_start = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={{flex:3, justifyContent: "center", alignItems: "center"}}>
            <Text style={styles.welcomeText} onPress={()=>navigation.navigate("Signup")}>Welcome To:</Text>
            <Image style={styles.image} source={require("./../assets/cake.png")} />
            <TouchableOpacity style={styles.loginBtn} onPress={()=>navigation.navigate("Login")}>
            <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.signBtn} onPress={()=>navigation.navigate("Signup")}>
            <Text style={styles.loginText}>SIGN UP</Text>
            </TouchableOpacity>
            </View>

            

        </View>
    )
}

export default splash_start

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#ff99cc",
        flex: 1,

    },
welcomeText: {
fontStyle: "italic",    
position: "relative",
marginBottom: 20,
justifyContent: "center",
alignItems: "center",
fontSize: 36,

}, 

image: {
width: 250,
height: 320,
},

loginBtn: {
    width: "50%",
    borderRadius: 25,
    marginTop: -30,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#66b2ff",
  },

  signBtn: {
    width: "50%",
    borderRadius: 25,
    height: 50,
    marginTop: -10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#66b2ff",
  },
})