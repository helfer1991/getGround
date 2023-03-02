import React from 'react';
import { Link } from './styles';

export type LinkProps = {
    to: string;
    variant?: 'main' | 'light' | undefined;
}

export const ButtonLink: React.FC<LinkProps> = ({ children, to, variant }) => {
    return (
        <Link to={to} variant={variant}>
            {children}
        </Link>
    )
};