import React from 'react';
import {View, Text, StyleSheet, Image, Button, Alert, TouchableOpacity} from 'react-native';

const HomeScreen = ({ navigation }) => {
        return (
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>{'GAINS'}</Text>
                <Image style={{width: '100%', height: '40%'}} source={require('../utils/weight.png')}/>
                <View style={styles.button}>
                    <Button
                        color={'white'}
                        title="Create workout or lift"
                        onPress={() =>  navigation.navigate('Create Lift', {items: [
                                "name",
                                "name"
                            ]
                        })}
                    />
                </View>
                <View style={styles.button}>
                    <Button
                        color={'white'}
                        title="Workouts"
                        onPress={() => Alert.alert(
                            'This works')}
                    /></View>
                <View style={styles.button}>
                    <Button
                        color={'white'}
                        title="Lifts"
                        onPress={() => Alert.alert(
                            'This works')}
                    /></View>
                <View style={styles.button}>
                    <Button
                        color={'white'}
                        title="Goals"
                        onPress={() => Alert.alert(
                            'This works')}
                    /></View>


            </View>

        );
    };

const styles = StyleSheet.create({
    headerContainer: {
        marginTop: 40,
        marginBottom: 50,
    },
    headerText: {
        color: 'black',
        fontSize: 75,
        fontWeight: '500',
        textAlign: 'center'
    },
    button: {
        marginBottom: 10,
        padding: 10,
        borderRadius: 1,
        backgroundColor: 'black'
    }
});
export default HomeScreen;