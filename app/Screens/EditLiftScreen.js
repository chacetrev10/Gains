import React from "react";
import {ScrollView, StyleSheet, Text, TouchableOpacity, View, FlatList, SafeAreaView} from "react-native";
import {Card} from 'react-native-elements'
import {HeaderTitle} from "@react-navigation/stack";
import {Input} from 'react-native-elements';
import {saveLiftData, saveNewPR, saveNewGoal} from "../Storage/saveLifts";
import {alertObserver} from "./EditGoalScreen";


//Screen to allow user to input new lift data
//Also contains the goal for a lift that is being observed by the
//lift goal observer
class EditLiftScreen extends React.Component {
    lift;
    data = [];

    constructor(props) {
        super(props);
        this.lift = props.route.params.items;

        //create array to display past performances
        for (const key of Object.keys(this.lift.data)) {
            this.data.push(key + ': ' + this.lift.data[key]);
        }

        this.state = {set: '', reps: '', weight: '', pr: this.lift.pr};
        this.handleSetChange = this.handleSetChange.bind(this);
        this.handleRepChange = this.handleRepChange.bind(this);
        this.handleWeightChange = this.handleWeightChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //handle the input of new set, rep, and weight data
    handleSetChange(set) {
        this.setState({set})
    }

    handleRepChange(reps) {
        this.setState({reps})
    }

    handleWeightChange(weight) {
        this.setState({weight})
    }

    //save new weight data when user clicks the 'save' button
    handleSubmit() {
        //save new performance metrics
        if (this.state.set != '' && this.state.reps != '' && this.state.weight != '') {
            let newPerf = {
                stats: this.state.set + 'x' + this.state.reps + 'x' + this.state.weight + " lbs",
                name: this.lift.name,
                date: this.getTime()

            }

            //if user reaches new PR, update lift data
            if(Number(this.state.weight) > Number(this.state.pr)){
                newPerf['prData'] = this.state.weight;
            }
            console.log(newPerf);
            saveLiftData(newPerf);
        }

        //if user surpasses a set goal, alert the observer subscribed to that goal
        if (Number(this.state.weight) >= Number(this.lift.goal)) {
            alertObserver();
        }

    }

    getTime() {
        let dateObj = new Date();
        let month = dateObj.getUTCMonth() + 1; //months from 1-12
        let day = dateObj.getUTCDate();
        let year = dateObj.getUTCFullYear();
        return year.toString() + '-' + month.toString() + '-' + day.toString()
    }

    render() {
        return (
            <View>
                <HeaderTitle>{this.lift.name}</HeaderTitle>
                <HeaderTitle>Description: {this.lift.description}</HeaderTitle>
                <HeaderTitle>PR: {this.lift.pr}</HeaderTitle>
                <HeaderTitle>Goal: {this.lift.goal}</HeaderTitle>
                <HeaderTitle>Past Performances: </HeaderTitle>
                <SafeAreaView>
                    <FlatList
                        data={this.data}
                        renderItem={renderItem}
                        contentContainerStyle={styles.cardContainer}
                    />
                </SafeAreaView>
                <HeaderTitle>Input New Performance:</HeaderTitle>
                <View style={styles.row}>
                    <View style={styles.inputWrap}>
                        <Input required type="number"
                               value={this.state.set}
                               placeholder="Sets"
                               onChangeText={this.handleSetChange}/>

                    </View>
                    <View style={styles.inputWrap}>
                        <Input required  type="number"
                               value={this.state.reps}
                               placeholder="Reps"
                               onChangeText={this.handleRepChange}/>

                    </View>
                    <View style={styles.inputWrap}>
                        <Input required type="number"
                               value={this.state.weight}
                               placeholder="Weight"
                               onChangeText={this.handleWeightChange}/>

                    </View>
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
export default EditLiftScreen;