import { configureStore} from '@reduxjs/toolkit';

import counterReducer from '../features/counter/counterSlice';
import currentYearBookGoalReducer from '../features/currentYearBTR/currentYearBookGoalSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        bookGoal: currentYearBookGoalReducer,
    },
});

export type AppDisptach = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;