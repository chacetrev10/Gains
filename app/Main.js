// app/Main.js
import React from 'react';
import { StyleSheet} from 'react-native';
import HomeScreen from './Screens/HomeScreen';
let headerTitle = 'GAINS';
export default class Main extends React.Component {
    state = {
        inputValue: ''
    };
    newInputValue = value => {
        this.setState({
            inputValue: value
        });
    };
    render() {
        const { inputValue } = this.state;
        return (
               <HomeScreen title={headerTitle}/>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    centered: {
        alignItems: 'center'
    },
    inputContainer: {
        marginTop: 40,
        paddingLeft: 15
    }
});