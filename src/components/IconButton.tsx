import Image, { StaticImageData } from 'next/image';
import * as React from 'react';
import resetIcon from '@/assets/reset.png';
import styles from '@/components/IconButton.module.css';

interface IconButtonProps extends React.ImgHTMLAttributes<HTMLImageElement> {
	icon: StaticImageData;
}

function IconButton({ icon, ...rest }: IconButtonProps) {
	return (
		<button className={styles.iconBtn}>
			<Image src={icon} alt="Reset" width={40} height={40} />
		</button>
	);
}

export default IconButton;
