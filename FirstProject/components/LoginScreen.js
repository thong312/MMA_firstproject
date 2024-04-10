import { ScrollView, Text, StyleSheet, TextInput, Button, SafeAreaView } from 'react-native';
import React from 'react';

export default function LoginScreen() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.headerText}>Welcome to Little Lemon</Text>
                <Text style={styles.regularText}>Login to continue</Text>
                <TextInput
                    placeholder="Email"
                    placeholderTextColor="#7f8c8d"
                    style={styles.input}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                <TextInput
                    placeholder="Password"
                    placeholderTextColor="#7f8c8d"
                    style={styles.input}
                    secureTextEntry={true}
                />
                <Button title="Login" onPress={() => console.log('Login pressed')} color="#16a085" />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        padding: 10,
    },
    headerText: {
        // paddingVertical: 20,
        fontSize: 30,
        color: '#155e75',
        textAlign: 'center',
    },
    regularText: {
        fontSize: 20,
        paddingBottom: 20,
        color: '#155e75',
        textAlign: 'center',
    },
    input: {
        borderColor: '#0284c7',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
        fontSize: 16,
        color: '#34495e',
    },
});
