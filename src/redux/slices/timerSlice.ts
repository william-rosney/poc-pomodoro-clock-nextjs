import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../redux/stores/store';

const POMODORO = 25;
const SHORT_BREAK = 5;
const LONG_BREAK = 30;

interface TimerState {
	isRunning: boolean;
	timeRemaining: number;
	durationSelected: number;
}

const initialState: TimerState = {
	isRunning: false,
	timeRemaining: POMODORO * 60,
	durationSelected: POMODORO,
};

export const timerSlice = createSlice({
	name: 'timer',
	initialState,
	reducers: {
		togglePlayMode: (state) => {
			state.isRunning = !state.isRunning;
		},
		reset: (state) => {
			state.isRunning = false;
			state.timeRemaining = state.durationSelected * 60;
		},
		selectDuration: (state, action: PayloadAction<number>) => {
			state.isRunning = false;
			state.durationSelected = action.payload;
            state.timeRemaining = state.durationSelected * 60;
		},
		decrementTimerRemaining: (state) => {
			const newTimeRemaing = state.timeRemaining - 1;
            state.timeRemaining = newTimeRemaing;
			if (newTimeRemaing === 0) {
				state.isRunning = false;
			}
		},
	},
});

export const {
	togglePlayMode,
	reset,
	selectDuration,
	decrementTimerRemaining,
} = timerSlice.actions;
export default timerSlice.reducer;
