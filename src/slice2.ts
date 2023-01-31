import { createSlice } from '@reduxjs/toolkit';

interface CounterState {
    value: number
}

const initialState: CounterState = {
    value: 2
};

export const counterSlice = createSlice({
    name: 'counter2',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        }
    }
})

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;