import FactoryMapper from "./FactoryMapper";

class Factory{
    constructor(props) {
        this.factoryMapper = new FactoryMapper(props);
    }

    create({ item }) {
        const { type } = item;
        const factory = this.factoryMapper.factory(type);
        return factory.create({ item });
    }
}

export default Factory;