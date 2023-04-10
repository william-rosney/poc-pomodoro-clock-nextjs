import * as React from 'react';
import Button from './Button';
import buttonStyle from '@/components/Button.module.css';
import layoutStyles from '@/styles/Layout.module.css';
import { useState } from 'react';
import { useAppSelector, useAppDispatch } from '@/hooks/reduxHooks';
import { selectDuration } from '@/redux/slices/timerSlice';

const POMODORO = 25;
const SHORT_BREAK = 5;
const LONG_BREAK = 30;

function PomodoroDuration() {
	const [durationBtnSelection, setDurationBtnSelection] = useState({
		isPomodoroSelected: true,
		isShortBreakSelected: false,
		isLongBreakSelected: false,
	});

	const { durationSelected } = useAppSelector((state) => state.timer);
	const dispatch = useAppDispatch();

	const onPomodoroClickHandler = () => {
		setDurationBtnSelection({
			isPomodoroSelected: true,
			isLongBreakSelected: false,
			isShortBreakSelected: false,
		});
		dispatch(selectDuration(POMODORO));
	};
	const onShortBreakClickHandler = () => {
		setDurationBtnSelection({
			isPomodoroSelected: false,
			isLongBreakSelected: false,
			isShortBreakSelected: true,
		});
		dispatch(selectDuration(SHORT_BREAK));
	};
	const onLongBreakClickHandler = () => {
		setDurationBtnSelection({
			isPomodoroSelected: false,
			isLongBreakSelected: true,
			isShortBreakSelected: false,
		});
		dispatch(selectDuration(LONG_BREAK));
	};
	return (
		<div className={layoutStyles.pomodoro_duration}>
			<Button
				className={
					durationBtnSelection.isPomodoroSelected
						? `${buttonStyle.btn} ${buttonStyle.btn_secondary} ${buttonStyle.btn_selected}`
						: `${buttonStyle.btn} ${buttonStyle.btn_secondary}`
				}
				onClick={onPomodoroClickHandler}
			>
				Pomodoro
			</Button>
			<Button
				className={
					durationBtnSelection.isShortBreakSelected
						? `${buttonStyle.btn} ${buttonStyle.btn_secondary} ${buttonStyle.btn_selected}`
						: `${buttonStyle.btn} ${buttonStyle.btn_secondary}`
				}
				onClick={onShortBreakClickHandler}
			>
				Short Break
			</Button>
			<Button
				className={
					durationBtnSelection.isLongBreakSelected
						? `${buttonStyle.btn} ${buttonStyle.btn_secondary} ${buttonStyle.btn_selected}`
						: `${buttonStyle.btn} ${buttonStyle.btn_secondary}`
				}
				onClick={onLongBreakClickHandler}
			>
				Long Break
			</Button>
		</div>
	);
}

export default PomodoroDuration;
