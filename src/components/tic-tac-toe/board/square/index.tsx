import React, { FC } from 'react'
import { RButton, RButtonProps } from '../../../UIKit/button'

interface SquareProps extends RButtonProps {
  value?: string
}

export const Square: FC<SquareProps> = ({ value, ...props }) => {
	return (
		<RButton variant='white' className='ratio ratio-1x1' {...props}>
			<div className='shadow-sm h-100 d-flex justify-content-center align-items-center'>{value}</div>
		</RButton>
	)
}
