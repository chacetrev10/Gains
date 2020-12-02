import LiftFactory from "./LiftFactory";
import LiftCardFactory from "./LiftCardFactory";
import React from 'react';

//Maps object wanting to be produced to its factory
class FactoryMapper extends React.Component{
    constructor(props) {
        super(props);
        const liftFactory = new LiftFactory();
        const liftCardFactory = new LiftCardFactory(props);

        //stores the different types of factories into maps
        this.factories = {};
        this.factories[liftFactory.type] = liftFactory;
        this.factories[liftCardFactory.type] = liftCardFactory;
    }

    //returns the factory of given type
    factory = type => type && this.factories[type];
}

export default FactoryMapper;