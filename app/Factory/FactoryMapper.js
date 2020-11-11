import NameFactory from "./Name";

class FactoryMapper {
    constructor() {
        const nameFactory = new NameFactory();

        this.factories = {};
        this.factories[nameFactory.type] = nameFactory;
    }

    factory = type => type && this.factories[type];
}

export default FactoryMapper;