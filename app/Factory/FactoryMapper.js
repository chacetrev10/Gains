import LiftFactory from "./LiftFactory";
import LiftCardFactory from "./LiftCardFactory";
import React from 'react';

class FactoryMapper extends React.Component{
    constructor(props) {
        super(props);
        const liftFactory = new LiftFactory();
        const liftCardFactory = new LiftCardFactory(props);

        this.factories = {};
        this.factories[liftFactory.type] = liftFactory;
        this.factories[liftCardFactory.type] = liftCardFactory;
    }

    factory = type => type && this.factories[type];
}

export default FactoryMapper;