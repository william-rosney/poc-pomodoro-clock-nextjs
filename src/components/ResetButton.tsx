import * as React from 'react';
import { useAppDispatch } from '@/hooks/reduxHooks';
import { reset } from '@/redux/slices/timerSlice';
import resetIcon from '@/assets/reset.png';
import IconButton from './IconButton';
import styles from '@/components/ResetButton.module.css';
import { useState } from 'react';

function ResetButton() {
	const dispatch = useAppDispatch();

	const [isSpinning, setIsSpinning] = useState(false);

	const clickHandler = () => {
		dispatch(reset());
		setIsSpinning(true);
		setTimeout(() => setIsSpinning(false), 1200);
	};
	return (
		<IconButton
			className={isSpinning ? styles.iconBtnSpinning : styles.iconBtn}
			icon={resetIcon}
			onClick={clickHandler}
		/>
	);
}

export default ResetButton;
