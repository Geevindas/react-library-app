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

const Dash_img = { uri: 'https://s26162.pcdn.co/wp-content/uploads/2019/11/bestbookcovers2019.jpg' }

function categoriesScreen() {
    const [books, setBooks] = useState([
        { name: 'Literary Fiction', id: '1' },
        { name: 'Mystery novels', id: '2' },
        { name: 'Thriller', id: '3' },
        { name: 'Horror', id: '4' },
        { name: 'Historical', id: '5' },
        { name: 'Romance', id: '6' },
        { name: 'Western', id: '7' },
    ]);
    return (

        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text style={styles.dashtxt}>Top Categories</Text>

                <View style={styles.dashContainer}>
                    <Image source={Dash_img} style={styles.dash_img} />
                </View>
                <FlatList
                    numColumns={1}
                    keyExtractor={(item) => item.id}
                    data={books}
                    renderItem={({ item }) => (
                        <Text style={styles.item}>{item.name}</Text>
                    )}
                />

            </View>
        </SafeAreaView>




    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 20,
        backgroundColor: "#253e6b",
        paddingBottom: 10,
    },
    item: {
        flex: 1,
        marginHorizontal: 20,
        marginTop: 24,
        padding: 20,
        backgroundColor: '#a0dbe8',
        borderBottomColor: "#fff",
        borderBottomWidth: 3,
        fontSize: 24,
    },
    dash_img: {
        marginHorizontal: 20,
        width: 280,
        height: 120,
        paddingVertical: 80,

    },

    dashContainer: {
        height: 170,
        paddingHorizontal: 10,
        alignItems: 'center',
        marginBottom: 17,
    },
    dashtxt: {
        textAlign: 'center',
        fontSize: 30,
        marginVertical: 20,
        fontWeight: 'bold',
        color: '#fff',
        backgroundColor: '#000',
        padding: 5
    }

});

export default categoriesScreen;
