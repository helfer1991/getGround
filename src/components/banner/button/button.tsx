import React from 'react';
import { MuiButton } from './styles';

type ButtonProps = {
    children: string;
    variant: 'outlined' | 'contained';
    color: 'primary' | 'secondary';
    onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ children, variant, color, onClick }) => {
    return (
        <MuiButton variant={variant} color={color} onClick={onClick}>
            {children}
        </MuiButton>
    )
}