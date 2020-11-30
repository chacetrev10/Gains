import React from 'react';
import {View, Text, StyleSheet, Image, Button, Alert, TouchableOpacity} from 'react-native';
import {Touchable} from "react-native-web";


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

            <View >
                <Text style={styles.headerText}>{'GAINS'}</Text>
                {/*<Image style={{width: '100%', height: '30%'}} source={require('../utils/weight.png')}/>*/}
                <View>
                    <TouchableOpacity
                        style={styles.Button}
                        onPress={() => this.props.navigation.navigate('Create Lift', {
                            items: [
                                {
                                    "type": "lift"
                                }
                            ]
                        })}
                        >
                        <Text style={styles.ButtonText}>{'Create Lift'}</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity
                        style={styles.Button}
                        onPress={() => this.props.navigation.navigate('Create Workout', {
                            items: [
                                {
                                    "type": "lift"
                                }
                            ]
                        })}
                        >
                        <Text style={styles.ButtonText}>{'Create Workout'}</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity
                        style={styles.Button}
                        onPress={() => this.props.navigation.navigate('Workout List', {
                            items: [
                                {
                                    "type": "lift"
                                }
                            ]
                        })}
                    >
                        <Text style={styles.ButtonText}>{'My Workouts'}</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity
                        style={styles.Button}
                        onPress={() => this.props.navigation.navigate('Lift List',{
                            items: [
                                {
                                    "type": "lift"
                                }
                            ]
                        })}
                    >
                        <Text style={styles.ButtonText}>{'My Lifts'}</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity
                        style={styles.Button}
                        onPress={() => Alert.alert(
                            'This works')}
                    >
                        <Text style={styles.ButtonText}>{'Goals'}</Text>
                    </TouchableOpacity>
                </View>
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
        color: '#0B2161',
        fontSize: 75,
        fontWeight: '500',
        textAlign: 'center',
        fontFamily: 'arial black',
    },
    Button: {
        borderWidth: 1,
        //borderColor: 'black',
        //backgroundColor: 'black',
        borderColor: '#2E2E2E',
        backgroundColor: '#0B2161',
        padding: 15,
        margin: 5,
        borderRadius: 25
    },
    ButtonText: {
        color: '#FFFFFF',
        //color: '#610B21',
        fontWeight: '600',
        fontSize: 20,
        textAlign: 'center'
    }
});
export default HomeScreen;