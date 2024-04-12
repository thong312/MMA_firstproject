import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'

export default function BodyDemo() {
    return (
        <ScrollView
            style={{
                flex: 1,
            }}

        >
            <Image style={{ width: 200, height: 100, alignSelf: 'center',marginTop:20 }}
                resizeMode='stretch'
                source={{ uri: 'https://th.bing.com/th/id/OIP.bPt0cF5DBUiR5XLux9d0zgHaEd?rs=1&pid=ImgDetMain' }}
            />
            <Text
                style={{
                    textAlign: 'center',
                    color: 'black',
                    fontSize: 40,
                    marginTop: 30,
                }}
            >Welcome to Little Lemos</Text>
            <Text
                style={{
                    textAlign: 'center',
                    color: 'black',
                    fontSize: 20,
                    fontStyle: 'italic',
                    marginTop: 30,
                }}
            >Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!</Text>
        </ScrollView>
    )
}