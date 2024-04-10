import { View, Text, ScrollView } from 'react-native'
import React from 'react'

export default function BodyDemo() {
    return (
        <ScrollView
        style={{
            flex:1,
        }} 

        >
            <Text
                style={{
                    textAlign: 'center',
                    color: 'white',
                    fontSize: 40,
                    marginTop: 30,
                }}
            >Welcome to Little Lemon</Text>
            <Text
                style={{
                    textAlign: 'center',
                    color: 'white',
                    fontSize: 80,
                    fontStyle: 'italic',
                    marginTop: 30,
                }}
            >Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!</Text>
        </ScrollView>
    )
}