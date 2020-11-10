// app/Main.js
import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import { gradientStart, gradientEnd } from './utils/Colors';
import Header from './components/Header';
import Input from './components/Input';
const headerTitle = 'To Do';
export default class Main extends React.Component {
    state = {
        inputValue: ''
    };
    newInputValue = value => {
        this.setState({
            inputValue: value
        });
    };
    render() {
        const { inputValue } = this.state;
        return (
            <LinearGradient
                colors={[gradientStart, gradientEnd]}
                style={styles.container}
            >
                <StatusBar barStyle="light-content" />
                <View style={styles.centered}>
                    <Header title={headerTitle} />
                </View>
                <View style={styles.inputContainer}>
                    <Input inputValue={inputValue} onChangeText={this.newInputValue} />
                </View>
            </LinearGradient>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    centered: {
        alignItems: 'center'
    },
    inputContainer: {
        marginTop: 40,
        paddingLeft: 15
    }
});