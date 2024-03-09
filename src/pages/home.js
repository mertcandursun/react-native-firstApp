import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { StatusBar } from 'expo-status-bar'

export default function Home({ navigation }) {

    var [number, setNumber] = useState(0);

    function add() {
        setNumber(number + 1);
    }

    function remove() {
        setNumber(number - 1);
    }

    if (number == -1) {
        setNumber(number = 0)
    }

    if (number == 10) {
        alert("10 a ulaştın !")
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={styles.number}>{number}</Text>

            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.plusButton}
                    onPress={add}
                >
                    <Text style={{ color: 'white', fontSize: 25 }}>Arttır</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.minusButton}
                    onPress={remove}
                >
                    <Text style={{ color: 'white', fontSize: 25 }}>Azalt</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Languages')}
            >
                <Text style={{ color: 'white' }}>Go to languages</Text>
            </TouchableOpacity>
            <StatusBar></StatusBar>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#9e69ee',
        padding: 10,
        borderRadius: 20,
        marginVertical: 10
    },

    number: {
        fontSize: 25
    },

    container: {
        flexDirection: 'row',
    },

    plusButton: {
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 5,
        marginVertical: 10,
        marginRight: 10,
        width: 'auto'
    },

    minusButton: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        marginVertical: 10,
        marginLeft: 10
    }
})