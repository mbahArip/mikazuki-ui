import React from 'react';

export interface ButtonProps {
	size: 'small' | 'medium' | 'large';
	color: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info' | string;
	variant: 'solid' | 'outline' | 'ghost';

	icon?: React.ReactNode;
	endIcon?: React.ReactNode | null;

	disabled: boolean;
	isLoading: boolean;

	className?: string;
	children: React.ReactNode | null;
}

const Button = ({
	size = 'medium',
	color = 'primary',
	variant = 'solid',
	icon,
	endIcon,
	disabled = false,
	isLoading = false,
	className,
	children,
	...rest
}: ButtonProps) => {
	const propsClasses = [];
	if (size === 'small') propsClasses.push('btn-sm');
	if (size === 'medium') propsClasses.push('btn-md');
	if (size === 'large') propsClasses.push('btn-lg');

	if (color) propsClasses.push(color);
	if (color === 'primary') propsClasses.push('btn-primary');
	if (color === 'secondary') propsClasses.push('btn-secondary');
	if (color === 'success') propsClasses.push('btn-success');
	if (color === 'error') propsClasses.push('btn-error');
	if (color === 'warning') propsClasses.push('btn-warning');
	if (color === 'info') propsClasses.push('btn-info');

	if (variant === 'solid') propsClasses.push('btn-solid');
	if (variant === 'outline') propsClasses.push('btn-outline');
	if (variant === 'ghost') propsClasses.push('btn-ghost');

	const joinedClass = `btn ${propsClasses.join(' ')} ${className ? className : ''}`;

	if (isLoading) {
		icon = <></>;
		endIcon = <></>;
		children = <>Loading...</>;
	}

	return (
		<button className={`${joinedClass.trim()}`} disabled={disabled} {...rest}>
			{icon && icon} {children} {endIcon && endIcon}
		</button>
	);
};

export default Button;
