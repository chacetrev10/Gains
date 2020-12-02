import React from "react";
import Lift from "./Lift";

//Factory to create lift objects
class LiftFactory {
    get type() { return 'lift'; }

    create({ item }) {
        return <Lift key = {item} item={item} />;
    }
}

export default LiftFactory;