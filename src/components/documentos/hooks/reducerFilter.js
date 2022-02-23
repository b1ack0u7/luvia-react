export const reducerFilter = (state = [], action) => {
    console.log(action);

    switch (action.type) {
        case 'ID_AS':
            action.payload.sort(function(a, b) {
                if(a.id > b.id) {
                    return 1;
                }
                else {
                    return -1;
                }
            })

            return action.payload;

        case 'ID_DS':
            action.payload.sort(function(a, b) {
                if(a.id < b.id) {
                    return 1;
                }
                else {
                    return -1;
                }
            })
            return action.payload;

        case 'NM_AS':
            action.payload.sort(function(a, b) {
                if(a.name > b.name) {
                    return 1;
                }
                else {
                    return -1;
                }
            })

            return action.payload;

        case 'NM_DS':
            action.payload.sort(function(a, b) {
                if(a.name < b.name) {
                    return 1;
                }
                else {
                    return -1;
                }
            })

            return action.payload;

        default:
            console.log("Default");
            return state;
    }
}
