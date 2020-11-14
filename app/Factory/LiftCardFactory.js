import React from "react";
import LiftCard from "./LiftCard"
class LiftCardFactory {
    get type() {
        return 'liftCard';
    }

    create({item}) {
        return <LiftCard key={item.name} item={item}/>;
    }
}

export default LiftCardFactory;