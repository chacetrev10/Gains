import React from 'react';
import {View, ScrollView, Text} from 'react-native';

import {loadLift, getAllLifts} from "../Storage/saveLifts";
import Factory from "../Factory/Factory";
import {HeaderTitle} from "@react-navigation/stack";


class LiftListScreen extends React.Component {

    lifts;
    liftCards;

    constructor(props) {
        super(props);
        this.liftCards = [];
        this.factory = new Factory(props);
        this.state = {
            liftCards: [],
            chestLiftCards: [],
            legLiftCards: [],
            shoulderLiftCards: [],
            backLiftCards: [],
            armLiftCards: [],
            workoutLifts: []
        };

    }

    //Get all lift objects, create cards to diplay their data and store in muscle group array
    async getAllLiftsFin() {
        let keys;
        if (this.props.route.params.items.lifts != undefined) {
            keys = this.props.route.params.items.lifts;
            console.log(this.props.route.params)
        }else {
            keys = await getAllLifts();
        }
        let liftCards = {
            ChestLiftCards: [],
            LegsLiftCards: [],
            ShouldersLiftCards: [],
            BackLiftCards: [],
            ArmsLiftCards: [],
        };

        for (let key of keys) {
            let holder = await loadLift(key);
            const item = holder[key];
            if (item != undefined) {
                item['type'] = 'liftCard';
                item['goTo'] = 'Edit Lift';
                let component = this.factory.create({item});
                liftCards[item['muscleGroup'] + 'LiftCards'].push(component);


            }
        }
        return liftCards;
    }

    showChest() {
        if (this.state.chestLiftCards.length > 0) {
            return <View>
                <HeaderTitle>{this.props.route.params.items.name == undefined ? 'Chest' : ''}</HeaderTitle>
                {this.state.chestLiftCards}
            </View>;

        }
        return;
    }

    showLegs() {
        if (this.state.legLiftCards.length > 0) {
            return <View>
                <HeaderTitle>{this.props.route.params.items.name == undefined ? 'Legs' : ''}</HeaderTitle>
                {this.state.legLiftCards}
            </View>;

        }
        return;
    }

    showBack() {
        if (this.state.backLiftCards.length > 0) {
            return <View>
                <HeaderTitle>{this.props.route.params.items.name == undefined ? 'Back' : ''}</HeaderTitle>
                {this.state.backLiftCards}
            </View>;

        }
        return;
    }

    showArms() {
        if (this.state.armLiftCards.length > 0) {
            return <View>
                <HeaderTitle>{this.props.route.params.items.name == undefined ? 'Arms' : ''}</HeaderTitle>
                {this.state.armLiftCards}
            </View>;

        }
        return;
    }

    showShoulders() {
        if (this.state.shoulderLiftCards.length > 0) {
            return <View>
                <HeaderTitle>{this.props.route.params.items.name == undefined ? 'Shoulders' : ''}</HeaderTitle>
                {this.state.shoulderLiftCards}
            </View>;

        }
        return;
    }



    componentDidMount() {

        this.getAllLiftsFin().then(r => {
            this.setState({chestLiftCards: r.ChestLiftCards});
            this.setState({legLiftCards: r.LegsLiftCards});
            this.setState({armLiftCards: r.ArmsLiftCards});
            this.setState({backLiftCards: r.BackLiftCards});
            this.setState({shoulderLiftCards: r.ShouldersLiftCards});
        });
    }

    render() {
        return (
            <ScrollView>
                <HeaderTitle>{this.props.route.params.items.name == undefined ? '' :
                    this.props.route.params.items.name }</HeaderTitle>
                {this.showChest()}
                {this.showArms()}
                {this.showShoulders()}
                {this.showLegs()}
                {this.showBack()}

            </ScrollView>

        );

    }
}

export default LiftListScreen;