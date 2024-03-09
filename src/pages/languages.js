import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Languages({ navigation }) {
    const languages = [
        { id: 1, name: 'C#', navigate: 'C#' },
        { id: 2, name: 'Angular / Typescript', navigate: 'Angular' },
        { id: 3, name: 'Python', navigate: 'Python' },
        { id: 4, name: 'HTML / CSS', navigate: 'Html' },
        { id: 5, name: 'PHP', navigate: 'Php' },
    ]
    return (
        <FlatList
            data={languages}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
                return <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate(item.navigate)}>
                    <Text style={{ color: 'white' }}>{item.name}</Text>
                </TouchableOpacity>
            }}
        />
    )
}

const styles = StyleSheet.create({
    item: {
        fontSize: 20,
        backgroundColor: 'aquamarine',
        marginVertical: 10,
        padding: 20
    },
    button: {
        backgroundColor: '#9e69ee',
        padding: 10,
        borderRadius: 20,
        marginVertical: 10
    },
})