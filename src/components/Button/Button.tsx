import React from 'react';
import { Button as MUIButton, ButtonProps as MUIButtonProps } from '@mui/material';

export interface ButtonProps extends Omit<MUIButtonProps, 'children'> {
	label: string;
}

const Button: React.FC<ButtonProps> = ({ label, ...props }) => {
	return (
		<MUIButton {...props} sx={{ textTransform: 'none', borderRadius: "2px", px:4 }} disableElevation disableRipple>
			{label}
		</MUIButton>
	);
};

export default Button;