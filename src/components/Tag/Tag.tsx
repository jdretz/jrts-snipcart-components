import React from 'react'
import '../../styles.scss';

/**
 * Tag Properties
 */
export interface ITag {
    /** Display name for tag */
    tagName: string,
    /** CSS classnames to be passed to classname */
    className?: string,
    /** React styles object */
    style?: React.CSSProperties,
}

export const Tag: React.FC<ITag> = ({ tagName, className, style }) => {
    return (
        <small style={style} className={'product-tag ' + className}>{tagName.toUpperCase()}</small>
    )
};

export default Tag