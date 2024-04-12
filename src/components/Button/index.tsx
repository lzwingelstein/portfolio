import type { ReactElement } from 'react'
import classes from './button.module.css';

interface ButtonProps {
    children: string;
}

export default function Button({children}: ButtonProps): ReactElement {
    return (
        <button className={classes.button}>
            {children}
        </button>
    );
}