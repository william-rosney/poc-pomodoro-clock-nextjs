import * as React from 'react';
import Button from './Button';
import buttonStyle from '@/components/Button.module.css';
import { useAppSelector, useAppDispatch } from '../hooks/reduxHooks';
import { togglePlayMode } from '../redux/slices/timerSlice';

function StartStopButton() {
	const { isRunning } = useAppSelector((state) => state.timer);
	const dispatch = useAppDispatch();

    // const playStopHandler = () => {
    //     if(isRunning){
    //         dispatch(stop());
    //     }
    //     else{
    //         dispatch(play());
    //     }
    // }

    const buttonLabel = isRunning ? "Pause" : "Start";
	return (
		<Button className={`${buttonStyle.btn} ${buttonStyle.btn_primary}`} onClick={() => dispatch(togglePlayMode())}>
			{buttonLabel}
		</Button>
	);
}

export default StartStopButton;
