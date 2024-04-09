import { View, Text } from 'react-native'
import React from 'react'

export default function HeaderDemo() {
    return (
        <View style={{
            flex: 0.2,
            backgroundColor: '#0e7490'
        }}>
            <Text
                style={{
                    textAlign: 'center',
                    padding: 50,
                    fontSize: 30,
                    color: 'black'
                }}>
                HeaderDemo
            </Text>
        </View>

    )
}