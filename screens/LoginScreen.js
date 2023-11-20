	import { View, Text, Button, StyleSheet, Image, SafeAreaView,TextInput,TouchableOpacity } from "react-native"
	
	const login_img = { uri: 'https://www.clipartmax.com/png/full/97-978325_library-clipart-student-learning-reading-book-logo-png.png' }
	
	function LoginScreen({navigation}) {
	
	    return (
	        <SafeAreaView style={styles.viewarea}>
	            <View style={styles.imgContainer}>
	                <Image source={login_img} style={styles.login_img} />
	            </View>
	            <View style={styles.infoContainer}>
	                <TextInput style={styles.input}
	                    placeholder="Enter username/email"
	                    placeholderTextColor='rgba(255,255,255,0.8)'
	                    keyboardType='email-address'
	                    returnKeyType='next'
	                    autoCorrect={false}
	                />
	                <TextInput style={styles.input}
	                    placeholder="Enter password"
	                    placeholderTextColor='rgba(255,255,255,0.8)'
	                    returnKeyType='go'
	                    secureTextEntry
	                    autoCorrect={false}
	                />
	                <TouchableOpacity style={styles.buttonContainer} onPress={()=>navigation.navigate("dashbord")}>
	                    <Text style={styles.buttonText}>SIGN IN</Text>
	                </TouchableOpacity>
	
	                <TouchableOpacity style={styles.signbtn} onPress={()=>navigation.navigate("register")}>
	                    <Text style={styles.buttonText}>Register</Text>
	                </TouchableOpacity>
	            </View>
	        </SafeAreaView>
	
	    );
	}
	

	const styles = StyleSheet.create({
	    viewarea: {
	        flex: 1,
	        backgroundColor: '#253e6b',
	        flexDirection: 'column',
	    },
	
	    infoContainer: {
	        position: 'absolute',
	        left: 0,
	        right: 0,
	        bottom: 120,
	        height: 200,
	        padding: 20,
	    },
	
	    input: {
	        height: 40,
	        backgroundColor: 'rgba(255,255,255,0.2)',
	        color: '#FFF',
	        marginBottom: 20,
           paddingHorizontal: 10
	    },
	    buttonContainer: {
	        backgroundColor: '#f7c744',
	        paddingVertical: 10
	    },
	
	    login_img: {
	        width: 120,
	        height: 120,
	        paddingVertical:80,
	
	    },
	
	    buttonText: {
	        textAlign: 'center',
	        color :'rgb(32, 53, 70)',
	        fontWeight: 'bold',
	        fontSize: 18
	    },
	
	    imgContainer: {
	        height:170,
	        marginHorizontal:100,
	        backgroundColor:'#fff',
	        alignItems: 'center',
	        marginTop: 90,
	        marginBottom: 50,
	    },
	
	    signbtn:{
	        backgroundColor: '#16de0b',
	        paddingVertical: 10,
	        marginTop:40,
	        borderRadius:40,
	    }
	});
	
	export default LoginScreen;
