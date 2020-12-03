import React from "react";
import {ScrollView, StyleSheet, Text, TouchableOpacity, View, FlatList, SafeAreaView} from "react-native";
import {Card} from 'react-native-elements'
import {HeaderTitle} from "@react-navigation/stack";
import {Input} from 'react-native-elements';
import {saveLiftData, saveNewPR, saveNewGoal} from "../Storage/saveLifts";

class EditGoalScreen extends React.Component {

    lift;
    data = [];
    percentComplete;
    isAchieved;
    textColor;

    constructor(props) {
        super(props);
        this.lift = props.route.params.items;
        this.percentComplete = ((Number(this.lift.pr) / Number(this.lift.goal)) * 100).toFixed(2);
        if (Number(this.percentComplete) >= 100.00) {
            this.isAchieved = 'Achieved!';
            this.textColor = 'green';
        } else {
            this.isAchieved = 'Not Achieved.';
            this.textColor = 'red';
        }

        this.state = {goal: ''};
        this.handleGoalChange = this.handleGoalChange.bind(this);
        //this.handlePRChange = this.handlePRChange.bind(this);
        //this.handleRepChange = this.handleRepChange.bind(this);
        //this.handleWeightChange = this.handleWeightChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleGoalChange(goal) {
        this.setState({goal})
    }

    handleSubmit() {

        if (this.state.goal > this.lift.pr) {
            let newGoal = {
                goalData: this.state.goal,
                name: this.lift.name
            }
            saveNewGoal(newGoal);
        } else {
            alert("New goal must be larger than PR.")
        }

    }

    render() {
        return (
            <View>
                <HeaderTitle>{this.lift.name}</HeaderTitle>
                <HeaderTitle>Description: {this.lift.description}</HeaderTitle>
                <HeaderTitle>PR: {this.lift.pr}</HeaderTitle>
                <HeaderTitle>Goal: {this.lift.goal}</HeaderTitle>
                <HeaderTitle>Percentage Complete: {this.percentComplete}%</HeaderTitle>
                <HeaderTitle style={{color: this.textColor}}>Goal {this.isAchieved}</HeaderTitle>
                <View>
                    <Input required type="number"
                           value={this.state.goal}
                           placeholder="New Goal"
                           onChangeText={this.handleGoalChange}/>
                </View>
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

const renderItem = ({item}) => (
    <Text>{item}</Text>
);

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        marginTop: 30

    },
    inputWrap: {
        flex: 3,
        borderColor: "#cccccc",
        flexDirection: "row"
    },
    saveButton: {
        borderWidth: 1,
        borderColor: '#0B2161',
        borderRadius: 25,
        backgroundColor: '#0B2161',
        padding: 15,
        margin: 5
    },
    saveButtonText: {
        color: '#FFFFFF',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '600'
    },
    cardContainer: {
        overflow: 'hidden',
        backgroundColor: 'white',
        alignItems: 'center',
        borderWidth: 0,
    }
});

export default EditGoalScreen;