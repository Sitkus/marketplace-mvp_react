import { configureStore, createSlice } from '@reduxjs/toolkit';
import a from 'assets/images/a.jpg';
import b from 'assets/images/b.jpg';

const itemsSlice = createSlice({
    name: 'items',
    initialState: [
        {
            name: 'A',
            price: 30,
            imageSrc: a,
            quantity: 1,
        },
        {
            name: 'B',
            price: 66,
            imageSrc: b,
            quantity: 1,
        },
    ],
});

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addItem(state, action) {
            state.push({
                name: action.payload.name,
                price: action.payload.price,
                imageSrc: action.payload.imageSrc,
                quantity: action.payload.quantity,
            });
        },
        removeItem(state, action) {
            state.splice(action.payload.index, 1);
        },
        incrementItemQuantity(state, action) {
            state[action.payload.index].quantity++;
        },
        decrementItemQuantity(state, action) {
            state[action.payload.index].quantity--;
        },
        clearCartItems(state) {
            state.splice(0, state.length);
        },
    },
});

export const { addItem, removeItem, incrementItemQuantity, decrementItemQuantity, clearCartItems } = cartSlice.actions;

export default configureStore({
    reducer: {
        cart: cartSlice.reducer,
        items: itemsSlice.reducer,
    },
});
