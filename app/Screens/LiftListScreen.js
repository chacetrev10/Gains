import React from 'react';
import {View, ScrollView} from 'react-native';

import {loadLift, getAllLifts} from "../Storage/saveLifts";
import Factory from "../Factory/Factory";


class LiftListScreen extends React.Component {

    lifts;
    liftCards;

    constructor(props) {
        super(props);
        this.liftCards = [];
        this.factory = new Factory();
        this.state = {
            liftCards: []
        };
    }


    async getAllLiftsFin() {
        let keys = await getAllLifts();
        let liftCards = [];
        for (let key of keys) {
            let holder = await loadLift(key);
            const item = holder[key];
            if (item != undefined) {
                item['type'] = 'liftCard';
                liftCards.push(this.factory.create({item}));

            }
        }
        return liftCards;
    }



componentDidMount()
{
    this.getAllLiftsFin().then(r => {
        this.setState({liftCards: r});
    });
}

render()
{
    return (
        <ScrollView>
            {this.state.liftCards}
        </ScrollView>

    );

}
}
export default LiftListScreen;