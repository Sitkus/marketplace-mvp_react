import { configureStore, createSlice } from '@reduxjs/toolkit';
import a from '../assets/images/a.jpg';
import b from '../assets/images/b.jpg';

const itemsSlice = createSlice({
    name: 'items',
    initialState: [
        {
            name: 'a',
            price: 30,
            imageSrc: a,
            quantity: 0,
        },
        {
            name: 'b',
            price: 66,
            imageSrc: b,
            quantity: 0,
        },
    ],
});

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addItem(state, action) {
            const isItemAlreadyAdded = state.items.find(item => item.name === action.payload.name && item.quantity);

            if (isItemAlreadyAdded) {
                // state.items.findIndex()
            } else {
                state.push({
                    name: action.payload.name,
                    price: action.payload.price,
                    imageSrc: action.payload.imageSrc,
                    quantity: action.payload.quantity,
                });
            }
        },
        removeItem(state, action) {
            state = state.filter(item => item.name !== action.payload.name);
        },
    },
});

export const { addItem, removeItem } = cartSlice.actions;

export default configureStore({
    reducer: {
        cart: cartSlice.reducer,
        items: itemsSlice.reducer,
    },
});
