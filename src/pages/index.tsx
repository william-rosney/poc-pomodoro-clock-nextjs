import * as React from 'react';
import { useState } from 'react';
import { Inter } from 'next/font/google';
import Card from '@/components/Card';
import Timer from '@/components/Timer';
import Button from '@/components/Button';
import IconButton from '@/components/IconButton';
import resetIcon from '@/assets/reset.png';
import settingIcon from '@/assets/setting.png';
import buttonStyle from '@/components/Button.module.css';
import layoutStyles from '@/styles/Layout.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	const [durationBtnSelection, setDurationBtnSelection] = useState({
		isPomodoroSelected: true,
		isShortBreakSelected: false,
		isLongBreakSelected: false,
	});

	const onPomodoroClickHandler = () => {
		setDurationBtnSelection({
			isPomodoroSelected: true,
			isLongBreakSelected: false,
			isShortBreakSelected: false,
		});
	};
	const onShortBreakClickHandler = () => {
		setDurationBtnSelection({
			isPomodoroSelected: false,
			isLongBreakSelected: false,
			isShortBreakSelected: true,
		});
	};
	const onLongBreakClickHandler = () => {
		setDurationBtnSelection({
			isPomodoroSelected: false,
			isLongBreakSelected: true,
			isShortBreakSelected: false,
		});
	};
	return (
		<Card>
			<div className={layoutStyles.pomodoro_container}>
				<div className={layoutStyles.pomodoro_duration}>
					<Button
						className={
							durationBtnSelection.isPomodoroSelected
								? `${buttonStyle.btn} ${buttonStyle.btn_secondary} ${buttonStyle.btn_selected}`
								: `${buttonStyle.btn} ${buttonStyle.btn_secondary}`
						}
						text="Pomodoro"
						onClick={onPomodoroClickHandler}
					/>
					<Button
						className={
							durationBtnSelection.isShortBreakSelected
								? `${buttonStyle.btn} ${buttonStyle.btn_secondary} ${buttonStyle.btn_selected}`
								: `${buttonStyle.btn} ${buttonStyle.btn_secondary}`
						}
						text="Short Break"
						onClick={onShortBreakClickHandler}
					/>
					<Button
						className={
							durationBtnSelection.isLongBreakSelected
								? `${buttonStyle.btn} ${buttonStyle.btn_secondary} ${buttonStyle.btn_selected}`
								: `${buttonStyle.btn} ${buttonStyle.btn_secondary}`
						}
						text="Long Break"
						onClick={onLongBreakClickHandler}
					/>
				</div>
				<div className={layoutStyles.pomodoro_timer}>
					<Timer />
				</div>
				<div className={layoutStyles.pomodoro_clock_actions}>
					<Button
						className={`${buttonStyle.btn} ${buttonStyle.btn_primary}`}
						text="Start"
					/>
					<IconButton icon={resetIcon} />
					<IconButton icon={settingIcon} />
				</div>
			</div>
		</Card>
	);
}
