import React from 'react';
import {View, ScrollView, Text} from 'react-native';
import {loadLift, getAllLifts} from "../Storage/saveLifts";
import Factory from "../Factory/Factory";
import {HeaderTitle} from "@react-navigation/stack";


class WorkoutListScreen extends React.Component {

    lifts;
    workoutCards = [];

    constructor(props) {
        super(props);
        this.state = {
            workouts: []
        };
        this.factory = new Factory(props);
        this.getAllLiftsFin().then(r => {
            if(r != null)
            this.setState({workouts: r});
        })
    }

    showWorkouts() {
        if (this.state.workouts.length > 0) {
            return <View>
                <HeaderTitle>Workouts</HeaderTitle>
                {this.state.workouts}
            </View>;

        }else {
            return <Text>No workouts created yet</Text>;
        }
    }

    async getAllLiftsFin() {
        let workouts = await loadLift("Workouts");
        if(workouts != null) {
            for (let wo of Object.keys(workouts)) {
                let lifts = []
                for (let lift of workouts[wo]) {
                    lifts.push(lift['value']);
                }
                workouts[wo]['type'] = 'liftCard';
                workouts[wo]['name'] = wo;
                workouts[wo]['goTo'] = 'Lift List';
                workouts[wo]['lifts'] = lifts;
                console.log(workouts[wo]);
                let item = workouts[wo];
                let component = this.factory.create({item});
                this.workoutCards.push(component);
            }
            return this.workoutCards;
        }else{
            return null;
        }
    }


    render() {
        return (
            <ScrollView>
                {this.showWorkouts()}
            </ScrollView>

        );

    }
}

export default WorkoutListScreen;