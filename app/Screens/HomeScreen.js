import React from 'react';
import {View, Text, StyleSheet, Image, Button, Alert, TouchableOpacity} from 'react-native';


class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props)
        this.state = {isModalVisible: false};
    }


    toggleModal() {
        if (this.state.isModalVisible == true) {
            this.setState({isModalVisible: false})
        } else {
            this.setState({isModalVisible: true})

        }
    }

    render() {
        return (
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>{'GAINS'}</Text>
                <Image style={{width: '100%', height: '40%'}} source={require('../utils/weight.png')}/>
                <View style={styles.button}>
                    <Button
                        color={'white'}
                        title="Create workout or lift"
                        onPress={() => this.props.navigation.navigate('Create Lift', {
                            items: [
                                {
                                    "type": "lift"
                                }
                            ]
                        })}
                    />
                </View>
                <View style={styles.button}>
                    <Button
                        color={'white'}
                        title="Workouts"
                        onPress={() => this.toggleModal()}
                    /></View>

                <View style={styles.button}>
                    <Button
                        color={'white'}
                        title="Lifts"
                        onPress={() => this.props.navigation.navigate('Lift List')}
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
}

const styles = StyleSheet.create({

    modal: {
        backgroundColor: 'white',
        margin: 15,
        alignItems: undefined,
        justifyContent: undefined,
    },
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
    },
    modalExit: {
        color: 'black',
        fontSize: 40,
        fontWeight: "bold",
        textAlign: 'right'
    }
});
export default HomeScreen;