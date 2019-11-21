const cachedReducer = [];

function generateInitialState(cfg) {
    let pagesRootState = {};
    let initialState = {};
    cfg.reducers.forEach(reducer => {
        initialState[reducer.name] = reducer.initialState;
        cachedReducer.push(cfg.pageId + '.' + reducer.name);
    })
    // pagesRootState[cfg.pageId] = initialState;
    return initialState;
}

function generic(reducerConfig) {
    return (state = generateInitialState(reducerConfig), action) =>{
        if(cachedReducer.indexOf(action.type) > -1){
            let actions = action.type.split('.');
            let pageId = actions[0];
            let field = actions[1];
            let stateObjet = {};
            stateObjet = Object.assign({}, state);;
            stateObjet[field] = action.payload;
            return Object.assign({}, state, stateObjet);
        }
        return state
    }
}



export default generic;