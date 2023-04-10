import * as React from 'react';
import { Inter } from 'next/font/google';
import Card from '@/components/Card';
import Timer from '@/components/Timer';
import IconButton from '@/components/IconButton';
import resetIcon from '@/assets/reset.png';
import settingIcon from '@/assets/setting.png';
import layoutStyles from '@/styles/Layout.module.css';
import StartStopButton from '@/components/StartStopButton';
import PomodoroDuration from '@/components/PomodoroDuration';
import { useAppDispatch } from '@/hooks/reduxHooks';
import { reset } from '@/redux/slices/timerSlice';
import ResetButton from '@/components/ResetButton';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	const dispatch = useAppDispatch();
	return (
		<div className={layoutStyles.card_container}>
			<Card>
				<div className={layoutStyles.pomodoro_container}>
					<PomodoroDuration />
					<div className={layoutStyles.pomodoro_timer}>
						<Timer />
					</div>
					<div className={layoutStyles.pomodoro_clock_actions}>
						<StartStopButton />
						<ResetButton />
					</div>
				</div>
			</Card>
		</div>
	);
}
