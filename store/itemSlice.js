import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    item: {},
};

export const itemSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {
        setItems: (state, { payload }) => {
            console.log('setItems');
            state.items = payload;
        },
        setItem: (state, { payload }) => {
            console.log('setItem');
            state.item = payload;
        },
        resetItem: (state) => {
            console.log('resetItem');
            state.item = {};
        },
    },
});

export const itemReducer = itemSlice.reducer;

export const { setItems, setItem, resetItem } = itemSlice.actions;