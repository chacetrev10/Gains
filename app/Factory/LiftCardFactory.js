import React from "react";
import LiftCard from "./LiftCard"
class LiftCardFactory {
    get type() {
        return 'liftCard';
    }

    create({item}) {
        const lift = item[Object.keys(item)[0]];
        return <LiftCard key={lift.name} item={lift}/>;
    }
}

export default LiftCardFactory;