	import {
    	  StyleSheet,
    	  View,
    	  Text,
    	  SafeAreaView,
    	  TouchableOpacity,
    	  TextInput,
    	} from "react-native";
    	
    	function RegisterScreen({ navigation }) {
    	  return (
    	    <SafeAreaView style={styles.regCon}>
    	      <View style={styles.regform}>
    	        <Text style={styles.header}>Registration</Text>
    	
    	        <TextInput
    	          style={styles.textinput}
    	          placeholder="Your name"
    	          underlineColorAndroid={"transparent"}
    	        />
    	
    	        <TextInput
    	          style={styles.textinput}
    	          placeholder="Your email"
    	          underlineColorAndroid={"transparent"}
    	        />
    	
    	        <TextInput
    	          style={styles.textinput}
    	          placeholder="Password"
    	          secureTextEntry={true}
    	          underlineColorAndroid={"transparent"}
    	        />
    	
    	        <TouchableOpacity style={styles.btnreg} onPress= {()=>navigation.navigate('login')}>
    	          <Text style={styles.btntext}>Register</Text>
    	        </TouchableOpacity>
    	      </View>
    	    </SafeAreaView>
    	  );
    	}
    	
    	const styles = StyleSheet.create({
    	  regform: {
    	    alignSelf: "stretch",
    	  },
    	
    	  regCon: {
    	    flex: 1,
    	    paddingHorizontal: 40,
    	    paddingVertical: 90,
    	    backgroundColor: "#253e6b",
    	    flexDirection: "column",
    	  },
    	
    	  header: {
    	    fontSize: 24,
    	    color: "#fff",
    	    paddingBottom: 10,
    	    borderBottomWidth: 1,
    	    marginBottom: 40,
    	    borderBottomColor: "#199187",
    	  },
    	
    	  textinput: {
    	    alignSelf: "stretch",
    	    backgroundColor: "#fff",
    	    paddingLeft: 10,
    	    borderBottomWidth: 2,
    	    height: 40,
    	    marginBottom: 30,
    	    color: "#fff",
    	    borderBottomColor: "#000",
    	  },
    	
    	  btnreg: {
    	    alignSelf: "stretch",
    	    alignItems: "center",
    	    padding: 20,
    	    backgroundColor: "#59cbbd",
    	    marginTop: 30,
    	  },
    	
    	  btntext: {
    	    color: "#fff",
    	    fontWeight: "bold",
    	  },
    	});
    	
    	export default RegisterScreen;
    