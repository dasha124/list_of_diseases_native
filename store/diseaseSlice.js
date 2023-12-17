import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    diseases: [],
    disease: {},
};

export const diseaseSlice = createSlice({
    name: 'disease',
    initialState,
    reducers: {
        setDiseases: (state, { payload }) => {
            state.diseases = payload;
        },
        setDisease: (state, { payload }) => {
            state.disease = payload;
        },
        resetDisease: (state) => {
            state.disease = {};
        },
    },
});

export const diseaseReducer = diseaseSlice.reducer;

export const { setDiseases, setDisease, resetDisease } = diseaseSlice.actions;