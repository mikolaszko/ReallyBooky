import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface currentYearBookGoalState{
    value: number;
}

const initialState: currentYearBookGoalState = {
    value: 0,
};

const currentYearBookGoalSlice = createSlice({
    name: 'bookGoal',
    initialState,
    reducers: {
        incremented(state){
            state.value++;
        },
        amountAdded(state, action: PayloadAction<number>){
            state.value += action.payload
        }
    }
});

export const {incremented, amountAdded} = currentYearBookGoalSlice.actions;

export default currentYearBookGoalSlice.reducer;
