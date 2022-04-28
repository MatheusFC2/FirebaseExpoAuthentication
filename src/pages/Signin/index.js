import { KeyboardAvoidingView, View, TextInput, Text, TouchableOpacity } from 'react-native'
import React from 'react'

import styles from './styles'

export default function Signin() {
    const [email, setEmail ] = useState('');
    const [password, setPasword ] = useState('');



    return (
        <KeyboardAvoidingView 
            style={styles.container}
            behavior="padding"
        >
            <View style={styles.inputContainer}>
                <TextInput 
                    placeholder="Email"
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={styles.input}
                />
                <TextInput 
                    placeholder="Password"
                    value={password}
                    onChangeText={text => setPasword(text)}
                    style={styles.input}
                    secureTextEntry
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity 
                    onPress={() => {}}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => {}}
                    style={[styles.button, styles.buttonOutline]}
                >
                    <Text style={styles.buttonOutlineText}>Register</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}