import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import { Card } from 'react-native-elements'
import {HeaderTitle} from "@react-navigation/stack";


class EditLiftScreen extends React.Component {
    lift;
    constructor(props) {
        super(props);
        console.log(props);
        this.lift = props.route.params.items
    }


    render() {
        return (
            <View >
               <HeaderTitle>{this.lift.name}</HeaderTitle>
            </View>

        )
    }
}
const styles = StyleSheet.create({

});
export default EditLiftScreen;