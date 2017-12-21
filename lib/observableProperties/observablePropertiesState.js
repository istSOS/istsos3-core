const initialState = {
    dialog: false,
    selected: null
};

const core_observable_properties = (state = initialState, action) => {

    switch (action.type) {

        case 'OBSERVABLE_PROPERTY_DIALOG_VISIBILITY':
            return {
                ...state,
                dialog: action.open
            };

        case 'OBSERVABLE_PROPERTY_SELECTED':
            return {
                ...state,
                selected: action.selected
            };

        default:
            return state;
    }
};

export default core_observable_properties;
