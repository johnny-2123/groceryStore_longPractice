import produceData from '../mockData/produce.json';


const POPULATE = 'produce/POPULATE'

export function populateProduce() {
    return {
        type: POPULATE,
        produce: produceData
    };
};

const produceReducer = (state = {}, action) => {
    switch (action.type) {
        case POPULATE:
            const normalizedProduce = {};
            action.produce.forEach(produce => {
                normalizedProduce[produce.id] = produce
            });
            return normalizedProduce;
        default:
            return state
    }
}

export default produceReducer;
