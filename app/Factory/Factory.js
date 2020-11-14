import FactoryMapper from "./FactoryMapper";

class Factory {
    constructor() {
        this.factoryMapper = new FactoryMapper();
    }

    create({ item }) {
        const { type } = item;
        const factory = this.factoryMapper.factory(type);
        return factory.create({ item });
    }
}

export default Factory;