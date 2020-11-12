import React, { Component } from 'react';
import {View, Text, StyleSheet, Image, Alert, TouchableOpacity} from 'react-native';
import Factory from "../Factory/Factory";
class  CreateLiftScreen extends Component {
    constructor(props) {
        super(props);
        this.factory = new Factory();

    }
    render (){
        let {items} = this.props.route.params;

        let components = items.map(item =>
            this.factory.create({ item }));

        return (
            <View>
                {components}
            </View>
        );

}
}
const styles = StyleSheet.create({
    headerContainer: {
        marginTop: 40,
        marginBottom: 50,
    },
    headerText: {
        color: 'black',
        fontSize: 45,
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
export default CreateLiftScreen;