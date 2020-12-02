// app/Main.js
import React from 'react';
import HomeScreen from './Screens/HomeScreen';
let headerTitle = 'GAINS';

//Main class that expo reads in and starts off the program
export default class Main extends React.Component {
    render() {
        return (
               <HomeScreen title={headerTitle}/>
        );
    }
}
