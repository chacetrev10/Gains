import React , {Component} from "react";
import {StyleSheet, Text, View} from "react-native";
import { Card } from 'react-native-elements'


class LiftCard extends Component {
    constructor(props,{type}) {
        super(props);
        this.type = type;
    }

    showDescription(){
        if (this.props.item.description.length > 0) {
            return <Text style={{marginBottom: 10}}>
                Description: {this.props.item.description}
            </Text>
                ;
        }
        return ;
    }
    showMuscleGroup(){
        if (this.props.item.muscleGroup && this.props.item.muscleGroup.length > 0) {
            return <Text style={{marginBottom: 10}}>
                Muscle Groups: {JSON.stringify(this.props.item.muscleGroup)}
            </Text>;
        }
        return ;
    }
   showPr(){
        if (this.props.item.pr.length > 0) {
            return <Text style={{marginBottom: 10}}>
                PR: {this.props.item.pr}
            </Text>;
        }
        return ;
    }


    render() {
        return (
            <View >
                <Card>
                    <Card.Title>{this.props.item.name}</Card.Title>
                    {/*<Card.Divider/>*/}
                    {/*{this.showDescription()}*/}
                    {/*{this.showMuscleGroup()}*/}
                    {/*{this.showPr()}*/}
                </Card>
            </View>

        )
    }
}
const styles = StyleSheet.create({

});
export default LiftCard;