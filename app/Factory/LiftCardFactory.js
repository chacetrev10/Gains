import React from "react";
import LiftCard from "./LiftCard"

//Factory to create objects that display lift data
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