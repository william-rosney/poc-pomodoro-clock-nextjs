import * as React from 'react';
import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	text: string;
}

function Button({ text, ...rest }: ButtonProps) {
	return <button {...rest}>{text}</button>;
}

export default Button;
