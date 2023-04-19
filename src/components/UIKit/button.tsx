import React, { FC } from 'react'
import { Button, ButtonProps } from 'react-bootstrap'

export interface RButtonProps extends ButtonProps {
  onClick?: React.EventHandler<React.MouseEvent | React.KeyboardEvent>;
}

export const RButton: FC<RButtonProps> = ({ children, onClick, ...props }) => {
	return (
		<Button
			onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
				e.stopPropagation()
				onClick?.(e)
			}}
			{...props}>{children}</Button>
	)
}