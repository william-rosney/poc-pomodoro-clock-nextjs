import { formatTime } from '@/utils/helpers';
import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import { useAppSelector, useAppDispatch } from '@/hooks/reduxHooks';
import {
	togglePlayMode,
	decrementTimerRemaining,
} from '@/redux/slices/timerSlice';
import styles from './Timer.module.css';

function Timer() {
	const { timeRemaining, isRunning } = useAppSelector(
		(state) => state.timer
	);
	const dispatch = useAppDispatch();

	const intervalRef = useRef<NodeJS.Timeout | null>(null);

	const timeDisplayed = formatTime(timeRemaining);

	useEffect(() => {
		if (isRunning) {
			intervalRef.current = setInterval(() => {
				dispatch(decrementTimerRemaining());
			}, 1000);
		} else {
			clearInterval(intervalRef.current!);
		}
	}, [isRunning, dispatch]);

	return <div className={styles.timer}>{timeDisplayed}</div>;
}

export default Timer;
