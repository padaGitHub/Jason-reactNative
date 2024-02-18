import { StatusBar } from 'expo-status-bar';
import { Feather } from "@expo/vector-icons";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';


export default function App() {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [passwordVisible, setPasswordIsVisible] = React.useState<boolean>(false);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView
        contentContainerStyle={{

          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >

        <View style={styles.content}>
          <Text style={styles.title}>Login</Text>
          <View style= {styles.inputContainer}>
            <View style= {styles.icon}>
              <Feather  name= "mail" size={22} color= "#7C8080"/>
            </View>
            <TextInput style={styles.input} placeholder= "Email Address" 
            placeholderTextColor= "#7C8080" selectionColor="#3662AA" onChangeText={setEmail} value={email}/>
          </View>
          <View style= {styles.inputContainer}>
            <View style= {styles.icon}>
              <Feather  name= "lock" size={22} color= "#7C8080"/>
            </View>
            <TextInput style={styles.input} placeholder= "Password" 
            secureTextEntry= {!passwordVisible}
            placeholderTextColor= "#7C8080" selectionColor="#3662AA" onChangeText={setPassword} value={password}/>
            <TouchableOpacity style={styles.passwordVisible}  onPress={() => setPasswordIsVisible(!passwordVisible)}> 
              <Feather name= {passwordVisible ? "eye" : "eye-off"}  size={20} color= "#7C8080" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style= {styles.forgotPasswordButton}>
            <Text style= {styles.forgotPasswordButtonText}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity style= {styles.LoginButton}>
            <Text style= {styles.LoginButtonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style= {styles.orContainer}>
            <Text style= {styles.orLine}/>
            <Text style= {styles.orText}>OR</Text>
            <Text style= {styles.orLine}/>
          </TouchableOpacity>
          <TouchableOpacity style= {styles.Googlebtn}>
            <Image style= {styles.googlelogo} source= {require("./assets/google.png")} />
            <Text style= {styles.GooglebtnText}>Login with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style= {styles.registerbtn}>
            <Text style= {styles.registerbtnText}>Not Have an Account Yet?<Text style = {styles.RegisterbtnTextHighlight}>Register Now!</Text></Text>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.platformContainer}>
            <Text style= {styles.platformline}/>
            <Text style = {styles.otherplatformText}>Other Platform</Text>
            <Text style = {styles.platformline}/>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.OtherConbtn}>
            <Image style = {styles.facebooklogo} source={require("./assets/fbicon.png")} />
            <Image style = {styles.instaiconlogo} source={require("./assets/instaicon.png")} />
            <Image style = {styles.giticonlogo} source={require("./assets/giticon.png")} />
            <Image style = {styles.twiticonlogo} source={require("./assets/twiticon.png")} />
            <Image style = {styles.yahooiconlogo} source={require("./assets/yahooicon.png")} />
          </TouchableOpacity>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },

  forgotPasswordButton: {
    alignSelf: "flex-end",
    
  },

  passwordVisible: {
    position: "absolute",
    right: 0,

  },
  content: {
    paddingHorizontal: 30,
  },

  inputContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    position: "relative",
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 40,

  },
  icon: {
    marginRight: 15,

  },

  input: {
    borderBottomWidth:1.5,
    flex: 1,
    paddingBottom: 10,
    borderBottomColor: "#eee",
    fontSize: 16,
  },

  forgotPasswordButtonText: {
    color: "#3662AA",
    fontSize: 16,
    fontWeight: "500",
  },

  LoginButton: {
    backgroundColor: "#3662AA",
    padding: 14,
    borderRadius: 10,
    marginTop: 20,
  },
  LoginButtonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  orLine: {
    height: 1,
    backgroundColor: "#eee",
    flex: 1,
  },
  orText: {
    color: "#7C8080",
    marginRight: 10,
    marginLeft: 10,
    fontSize: 14,
  },
  Googlebtn: {
    backgroundColor: "#F2F6F2",
    padding: 14,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  GooglebtnText: {
    color: "#4E5867",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",


  },
  googlelogo: {
    width: 20.03,
    height: 20.04,
    position: "absolute",
    left: 14,
  },

  registerbtn: {
    alignSelf: "center",
    marginTop: 40,
  },

  registerbtnText: {
    fontSize: 16,
    color: "#7C8080"
  },

  RegisterbtnTextHighlight: {
    fontSize: 16,
    color: "#3662AA",
    fontWeight: "500",
  },

  otherplatformText: {
   
    color: "#7C8080",
    marginRight: 10,
    marginLeft: 10,
    fontSize: 14,
  },
  platformline: {
    height: 1,
    backgroundColor: "#eee",
    flex: 1,
  },
  platformContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },

  OtherConbtn: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 10,
    color: "#eee"
  },

  facebooklogo: {
    width: 50.03,
    height: 52.04,
    position: "absolute",
    left: 30,
  }, 

  instaiconlogo: {
    width: 50.03,
    height: 52.04,
    position: "absolute",
    left: 80,
  },

  giticonlogo: {
    width: 50.03,
    height: 52.04,
    position: "absolute",
    left: 130,
  },

  twiticonlogo: {
    width: 50.03,
    height: 52.04,
    position: "absolute",
    left: 180,
  },
  yahooiconlogo: {
    width: 50.03,
    height: 52.04,
    position: "absolute",
    left: 230,
  },
  


});
