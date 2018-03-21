
const initialState = {
    isFetching: false,
    data: [],
    fiex: [], // features in the visible extent
    update: {
        point: false,
        line: false
    }
};

const core_map = (state = initialState, action) => {

    switch (action.type) {

        case 'FOI_MAP_UPDATE_POINT':
            return {
                ...state,
                update: {
                    ...state.update,
                    point: action.point
                }
            };

        case 'FOI_MAP_UPDATE_POINT_OK':
            return {
                ...state,
                update: {
                    ...state.update,
                    point: false
                }
            };

        case 'FOI_MAP_FEATURES_IN_EXTENT':
            return {
                ...state,
                fiex: action.features
            };

        default:
            return state;
    }
};

export default core_map;
