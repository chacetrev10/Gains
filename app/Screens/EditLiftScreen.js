import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import { Card } from 'react-native-elements'
import {HeaderTitle} from "@react-navigation/stack";
import {Input} from 'react-native-elements';


class EditLiftScreen extends React.Component {
    lift;
    constructor(props) {
        super(props);
        console.log(props);
        this.lift = props.route.params.items
    }

    handlePRChange(lift, newPR) {
        lift.pr = newPR;
    }

    handleSubmit(lift) {
        if (Number(this.lift.goal) <= Number(this.lift.pr)) {
            alert('Goal Achieved!');
        }
    }

    render() {
        return (
            <View >
               <HeaderTitle>{this.lift.name}</HeaderTitle>
               <HeaderTitle>{this.lift.description}</HeaderTitle>
               <HeaderTitle>PR: {this.lift.pr}</HeaderTitle>
               <HeaderTitle>Goal: {this.lift.goal}</HeaderTitle>
               <Input
                   placeholder='Enter New PR'
                   //value={this.lift.pr}
                   onChangeText={this.handlePRChange}
               />
               <View style={styles.inputContainer}>
                   <TouchableOpacity
                       style={styles.saveButton}
                       onPress={this.handleSubmit}
                   >
                       <Text style={styles.saveButtonText}>{'Save'}</Text>
                   </TouchableOpacity>
               </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({

});
export default EditLiftScreen;