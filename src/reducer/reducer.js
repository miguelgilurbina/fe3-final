export const reducer = (state, action) => {
    switch (action.type) {
        case 'GET_DATA':
            return { ...state, data: action.payload }
        case 'ADD_FAVS':
            return { ...state, favs: [...state.data, action.payload] }
        case 'CHANGE_THEME':
            return { ...state, theme: action.payload }
    }


}