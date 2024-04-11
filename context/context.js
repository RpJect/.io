// context.js

// Define your global context or state here
const initialState = {
    theme: 'light',
    user: null,
    cart: [],
};

// Reducer function to handle state changes
const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_THEME':
            return { ...state, theme: action.payload };
        case 'SET_USER':
            return { ...state, user: action.payload };
        case 'ADD_TO_CART':
            return { ...state, cart: [...state.cart, action.payload] };
        // Add more cases as needed
        default:
            return state;
    }
};

export { initialState, reducer };
