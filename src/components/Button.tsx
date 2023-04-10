import * as React from 'react';
import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children? : React.ReactNode
}

function Button({children, ...rest }: ButtonProps) {
	return <button {...rest}>{children}</button>;
}

export default Button;
