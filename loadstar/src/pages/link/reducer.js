


const reducerConfig = {
    pageId: 'linkPage',
    reducers: [
        {
            name: 'total',
            initialState: 0
        },
        {
            name: 'current',
            initialState: 1
        },
        {
            name: 'size',
            initialState: 10
        },
    ]
};

const cachedReducer = [];

function generateInitialState(cfg) {
    let pagesRootState = {};
    let initialState = {};
    cfg.reducers.forEach(reducer => {
        initialState[reducer.name] = reducer.initialState;
        cachedReducer.push(cfg.pageId + '.' + reducer.name);
    })
    pagesRootState[cfg.pageId] = initialState;
    return pagesRootState;
}

function generic(state = generateInitialState(reducerConfig), action) {
    if(cachedReducer.indexOf(action.type) > -1){
        let actions = action.type.split('.');
        let pageId = actions[0];
        let field = field[1];
        let obj = {};
        obj[field] = action.payload;
        return Object.assign({}, state[pageId],obj);
    }
    return state
}

export default generic;