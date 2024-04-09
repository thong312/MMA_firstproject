import { View, Text } from 'react-native'
import React from 'react'

export default function FooterDemo() {
    return (
        <View
            style={{
                backgroundColor: '#0e7490',
                marginBottom: 10,
            }}>
            <Text
                style={{
                    fontSize: 18,
                    color: 'black',
                    textAlign: 'center',
                }}>
                FooterDemo{' '}
            </Text>
        </View>

    )
}