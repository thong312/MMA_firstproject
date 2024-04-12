import React, { useState } from 'react';
import { ScrollView, Text, StyleSheet, TextInput, Button, SafeAreaView, View } from 'react-native';

export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginMessage, setLoginMessage] = useState('');

    // Simulated login function
    const handleLogin = () => {
        // Example validation: replace with actual authentication logic
        if (email === "user@example.com" && password === "password") {
            setLoginMessage("Login Successful!");
            // Additional actions upon successful login
        } else {
            setLoginMessage("Login Failed. Please try again.");
        }
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.headerText}>Welcome to Little Lemon</Text>
                <Text style={styles.regularText}>Login to continue</Text>
                <TextInput
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Email"
                    placeholderTextColor="#7f8c8d"
                    style={styles.input}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                <TextInput
                    value={password}
                    onChangeText={setPassword}
                    placeholder="Password"
                    placeholderTextColor="#7f8c8d"
                    style={styles.input}
                    secureTextEntry={true}
                />
                <Button title="Login" onPress={handleLogin} color="#16a085" />
                {/* Conditionally rendered login message */}
                {loginMessage.length > 0 && (
                    <View style={styles.messageContainer}>
                        <Text style={styles.messageText}>{loginMessage}</Text>
                    </View>
                )}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    regularText: {
        fontSize: 18,
        marginBottom: 20,
    },
    input: {
        width: '100%',
        marginBottom: 20,
        padding: 10,
        borderWidth: 1,
        borderColor: '#bdc3c7',
        borderRadius: 5,
    },
    messageContainer: {
        marginTop: 20,
    },
    messageText: {
        color: 'red', // Use a different color if the message indicates success
    },
});
