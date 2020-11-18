import React , {Component} from "react";
import {StyleSheet, Text, View} from "react-native";
import { Card } from 'react-native-elements'


class Goals extends Component {
    goalWeight;
    currentPR;

    constructor(props) {
        super(props);

    }

    update(pr) {
        if (pr >= goalWeight) {
            alert('Goal Achieved!');
        }
    }


    render() {
        return (
            <View>
                This works
            </View>
        )
    }
}
const styles = StyleSheet.create({

});
export default Goals;