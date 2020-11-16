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
            armLiftCards: []
        };
    }


    async getAllLiftsFin() {
        let keys = await getAllLifts();
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
                let component = this.factory.create({item});
                for (let group of item['muscleGroup']) {
                    liftCards[group+'LiftCards'].push(component);
                }

            }
        }
        return liftCards;
    }

    showChest(){
        if (this.state.chestLiftCards.length > 0) {
            return <div>
                <HeaderTitle>Chest</HeaderTitle>
                {this.state.chestLiftCards}
            </div>;

        }
        return ;
    }

    showLegs(){
        if (this.state.legLiftCards.length > 0) {
            return <div>
                <HeaderTitle>Legs</HeaderTitle>
                {this.state.legLiftCards}
            </div>;

        }
        return ;
    }
    showBack(){
        if (this.state.backLiftCards.length > 0) {
            return <div>
                <HeaderTitle>Back</HeaderTitle>
                {this.state.backLiftCards}
            </div>;

        }
        return ;
    }
    showArms(){
        if (this.state.armLiftCards.length > 0) {
            return <div>
                <HeaderTitle>Arms</HeaderTitle>
                {this.state.armLiftCards}
            </div>;

        }
        return ;
    }
    showShoulders(){
        if (this.state.shoulderLiftCards.length > 0) {
            return <div>
                <HeaderTitle>Shoulders</HeaderTitle>
                {this.state.shoulderLiftCards}
            </div>;

        }
        return ;
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