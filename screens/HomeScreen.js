	import {
    	  StyleSheet,
    	  View,
    	  Text,
    	  Button,
    	  TouchableOpacity,
    	  ImageBackground,
    	} from "react-native";
    	
    	const mainimage = {
    	  uri: "https://cdn.pixabay.com/photo/2015/07/31/11/45/library-869061_960_720.jpg",
    	};
    	
    	function HomeScreen({ navigation }) {
    	  return (
    	    <ImageBackground
    	      source={mainimage}
    	      resizeMode="cover"
    	      style={styles.mainimage}
    	    >
    	      <Text style={styles.hometxt}>Library Plus</Text>
    	      <View style={styles.nav}>
    	      <TouchableOpacity
    	        onPress={() => navigation.navigate("login")}
    	        style={styles.startbtn}
    	      >
    	        <Text style={styles.starttxt}>Let's Start..!</Text>
    	      </TouchableOpacity>
    	      </View>
    	      
    	    </ImageBackground>
    	  );
    	}
    	
    	const styles = StyleSheet.create({
    	  container: {
    	    flex: 1,
    	    backgroundColor: "#fff",
    	    alignItems: "center",
    	    justifyContent: "center",
    	  },
    	
    	    hometxt:{
    	        marginTop:80,
    	        marginHorizontal:30,
    	        marginBottom:40,
    	        padding:5,
    	        fontSize:30,
    	        textAlign:'center',
    	        color:'#fff',
    	        fontWeight:'bold',
    	        alignItems:"center",
    	        backgroundColor:'#047a10',
    	    },
    	
    	  startbtn: {
    	    alignItems:'center',
    	    width: "60%",
    	    backgroundColor: "#361FDF90",
    	    height:40,
    	    borderRadius:40
    	  },
    	
    	  nav:{
    	    alignItems:'center',
    	  },
    	
    	  starttxt: {
    	    fontSize: 30,
    	    color: "white",
    	  },
    	
    	  mainimage: {
    	    flex: 1,
    	    resizeMode: "cover",
    	  },
    	});
    	
    	export default HomeScreen;
    