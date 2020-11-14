import LiftFactory from "./LiftFactory";
import LiftCardFactory from "./LiftCardFactory";

class FactoryMapper {
    constructor() {
        const liftFactory = new LiftFactory();
        const liftCardFactory = new LiftCardFactory();

        this.factories = {};
        this.factories[liftFactory.type] = liftFactory;
        this.factories[liftCardFactory.type] = liftCardFactory;
    }

    factory = type => type && this.factories[type];
}

export default FactoryMapper;