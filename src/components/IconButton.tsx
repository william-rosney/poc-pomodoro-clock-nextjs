import * as React from 'react';
import Image, { StaticImageData } from 'next/image';
import styles from '@/components/ResetButton.module.css';


interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	icon: StaticImageData;
}

function IconButton({ icon, ...rest }: IconButtonProps) {
	console.log('TEST',rest.className);
	return (
		<button {...rest} className={rest.className}>
			<Image src={icon} alt="icon" width={45} height={45} />
		</button>
	);
}

export default IconButton;
