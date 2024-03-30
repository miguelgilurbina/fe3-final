export const reducer = (state, action) => {
    switch (action.type) {
        case 'GET_DATA':
            return { ...state, data: action.payload }
        case 'ADD_FAVS':
            const favsFromStorage = JSON.parse(localStorage.getItem('favs')) || [];
            const isDuplicate = state.favs.some(fav => fav.id === action.payload.id);
            if (!isDuplicate) {
                const updatedFavs = [...state.favs, action.payload];
                localStorage.setItem('favs', JSON.stringify(updatedFavs));
                return { ...state, favs: updatedFavs };
            }
        case 'CHANGE_THEME':
            return { ...state, theme: action.payload }
    }


}