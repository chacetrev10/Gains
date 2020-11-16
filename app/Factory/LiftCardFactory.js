import React from "react";
import LiftCard from "./LiftCard"
class LiftCardFactory extends React.Component{
    constructor(props) {
        super(props);
    }

    get type() {
        return 'liftCard';
    }

    create({item}) {
        return <LiftCard key={item.name} item={item} props={this.props}/>;
    }
}

export default LiftCardFactory;