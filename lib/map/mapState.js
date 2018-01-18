
const initialState = {
    isFetching: false,
    data: [],
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

        default:
            return state;
    }
};

export default core_map;
