import LiftFactory from "./Lift";

class FactoryMapper {
    constructor() {
        const liftFactory = new LiftFactory();

        this.factories = {};
        this.factories[liftFactory.type] = liftFactory;
    }

    factory = type => type && this.factories[type];
}

export default FactoryMapper;