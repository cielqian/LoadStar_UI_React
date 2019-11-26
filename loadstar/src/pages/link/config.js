export const pageId = 'linkPage';
export const reducers = [
    {
        name: 'pagination',
        initialState: {
            total: 0,
            current: 1,
            size: 10
        }
    },
    {
        name: 'pageData',
        initialState: []
    }
]