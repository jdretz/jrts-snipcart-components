import React from 'react'
import '../../styles.scss';

/**
 * Column Properties
 */
export interface IButton {
    /** Button text property */
    text: string
}

export const Button: React.FC<IButton> = ({ text }) => {
    return (
        <button role="button" className="button">{text}</button>
    )
};

export default Button