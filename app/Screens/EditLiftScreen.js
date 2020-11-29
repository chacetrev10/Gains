import React from "react";
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Card} from 'react-native-elements'
import {HeaderTitle} from "@react-navigation/stack";
import {Input} from 'react-native-elements';
import {saveLiftData} from "../Storage/saveLifts";
import FlatList from "react-native-web/dist/vendor/react-native/FlatList";


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
        this.handlePRChange = this.handlePRChange.bind(this);
        this.handleRepChange = this.handleRepChange.bind(this);
        this.handleWeightChange = this.handleWeightChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handlePRChange(newPR) {
        // lift.pr = newPR;
        this.setState({pr: newPR});
    }

    handleSetChange(set) {
        this.setState({set})
    }

    handleRepChange(reps) {
        this.setState({reps})
        // console.log(this.getTime());
    }

    handleWeightChange(weight) {
        this.setState({weight})
    }

    handleSubmit() {
        // if (Number(this.lift.goal) <= Number(this.state.pr)) {
        //     alert('Goal Achieved!');
        // }
        if (this.state.set != '' && this.state.reps != '' && this.state.weight != '') {
            let newPerf = {
                stats: this.state.set + 'x' + this.state.reps + 'x' + this.state.weight + " lbs",
                name: this.lift.name,
                date: this.getTime()

            }
            saveLiftData(newPerf);
        }

    }

    getTime() {
        let dateObj = new Date();
        let month = dateObj.getUTCMonth() + 1; //months from 1-12
        let day = dateObj.getUTCDate();
        let year = dateObj.getUTCFullYear();
        return year.toString() + '-' + month.toString() + '-' + day.toString();
    }

    render() {
        return (
            <View>
                <HeaderTitle>{this.lift.name}</HeaderTitle>
                <HeaderTitle>Description: {this.lift.description}</HeaderTitle>
                <HeaderTitle>PR: {this.lift.pr}</HeaderTitle>
                <HeaderTitle>Past Performances: </HeaderTitle>
                <ScrollView>
                    <FlatList
                        data={this.data}
                        renderItem={renderItem}
                        contentContainerStyle={styles.cardContainer}
                    />
                </ScrollView>
                <HeaderTitle>Input New Performance:</HeaderTitle>
                <View style={styles.row}>
                    <View style={styles.inputWrap}>
                        <Input required label="Sets" type="number"
                               value={this.state.set}
                               onChangeText={this.handleSetChange}/>

                    </View>
                    <View style={styles.inputWrap}>
                        <Input required label="Reps" type="number"
                               value={this.state.reps}
                               onChangeText={this.handleRepChange}/>

                    </View>
                    <View style={styles.inputWrap}>
                        <Input required label="Weight" type="number"
                               value={this.state.weight}
                               onChangeText={this.handleWeightChange}/>

                    </View>
                </View>
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

const renderItem = ({item}) => (
    <Text>{item}</Text>
);

const styles = StyleSheet.create({
    row: {
        flex: 1,
        flexDirection: "row"
    },
    inputWrap: {
        flex: 3,
        borderColor: "#cccccc",
        borderBottomWidth: 1,
        marginBottom: 10,
        flexDirection: "row"
    },
    saveButton: {
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'black',
        padding: 15,
        margin: 5
    },
    saveButtonText: {
        color: '#FFFFFF',
        fontSize: 20,
        textAlign: 'center'
    },
    cardContainer: {
        overflow: 'hidden',
        backgroundColor: 'white',
        alignItems: 'center',
        borderWidth: 0,
    }
});
export default EditLiftScreen;