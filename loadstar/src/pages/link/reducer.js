import genericReducer from '../../redux/reducers/genericReducer'

const reducerConfig = {
    pageId: 'linkPage',
    reducers: [
        {
            name: 'pagination',
            initialState: {
                total:0,
                current:1,
                size:10
            }
        },
        {
            name: 'pageData',
            initialState: []
        }
    ]
};

export default genericReducer(reducerConfig);