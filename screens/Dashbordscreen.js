import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  Image,
  StatusBar,
  SafeAreaView,
  FlatList,
} from "react-native";

const category_img = {
  uri: "https://s26162.pcdn.co/wp-content/uploads/2019/11/bestbookcovers2019.jpg",
};

function Dashbordscreen({ navigation }) {
  return (
    <SafeAreaView style={styles.fullview}>
      <View style={styles.imgContainer}>
        <Image source={category_img} style={styles.dash_img} />
      </View>
      <View style={styles.dashContainer}>
        <TouchableOpacity style={styles.dashCategory} onPress={()=>navigation.navigate("categories")}>
          <Text>Categories</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.dashCategory}>
          <Text>Book list</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  dashContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  fullview: {
    flex: 1,
    backgroundColor: "#253e6b",
  },

  dashCategory: {
    width: 300,
    marginVertical: 40,
    marginHorizontal: 20,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#59cbbd",
  },

  dash_img: {
    marginHorizontal: 20,
    width: "100%",
    height: 190,
    paddingVertical: 80,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
  },

  imgContainer: {
    height: 170,
    alignItems: "center",
    marginBottom: 97,
  },
});

export default Dashbordscreen;

