import React from 'react'
import '../../styles.scss';

/**
 * Column Properties
 */
interface IButton {
    /** Button text property */
    text: string
}

export const Button: React.FC<IButton> = ({ text }) => {
    return (
        <button className="button">{text}</button>
    )
};

export default Button