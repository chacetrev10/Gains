import FactoryMapper from "./FactoryMapper";

//General factory class that creates a factory based off of the factory mapper
//Based off of: https://medium.com/mop-developers/factory-pattern-in-react-native-without-using-switch-df99bca31a55
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